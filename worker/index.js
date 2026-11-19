// Worker vor der statischen Seite: nimmt nur das Einsende-Formular (/api/einsenden) an
// und schickt den Inhalt per Cloudflare Email Routing an die Redaktion.
// Alles andere liefert Cloudflare direkt aus ./dist aus.
//
// Einrichtung (Cloudflare-Dashboard):
// 1. palmenpixel.de > Email > Email Routing aktivieren, Zieladresse bestätigen.
// 2. Worker palmenpixel > Settings > Variables: EINSENDUNG_AN = bestätigte Zieladresse.
import { EmailMessage } from 'cloudflare:email';

const FROM = 'formular@palmenpixel.de';
const LIMITS = { titel: 120, ort: 1500, beschreibung: 4000, name: 60, email: 120 };

const b64 = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s)));
const clean = (v, max) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);
const oneLine = (s) => s.replace(/\n/g, ' ');

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

async function einsenden(request, env) {
  if (request.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
  if (!env.EINSENDUNG_AN || !env.EMAIL) return json({ ok: false, error: 'not_configured' }, 503);

  let form;
  try { form = await request.formData(); } catch { return json({ ok: false, error: 'bad_request' }, 400); }

  // Honeypot: echte Nutzer lassen das unsichtbare Feld leer.
  if (clean(form.get('website'), 200)) return json({ ok: true });

  const art = clean(form.get('art'), 30) === 'anregung' ? 'Anregung' : 'Easter Egg';
  const titel = oneLine(clean(form.get('titel'), LIMITS.titel));
  const ort = clean(form.get('ort'), LIMITS.ort);
  const beschreibung = clean(form.get('beschreibung'), LIMITS.beschreibung);
  const name = oneLine(clean(form.get('name'), LIMITS.name));
  const email = oneLine(clean(form.get('email'), LIMITS.email));
  const zustimmung = form.get('zustimmung') === 'ja';

  if (!titel || !beschreibung || !zustimmung) return json({ ok: false, error: 'missing' }, 400);
  const emailOk = !email || /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email);
  if (!emailOk) return json({ ok: false, error: 'email' }, 400);

  const text = [
    `Art: ${art}`,
    `Titel: ${titel}`,
    `Wo / wie: ${ort || '-'}`,
    '',
    beschreibung,
    '',
    `Name für die Nennung: ${name || '- (anonym)'}`,
    `E-Mail für Rückfragen: ${email || '-'}`,
    '',
    `Eingegangen: ${new Date().toISOString()}`,
  ].join('\n');

  const headers = [
    `From: Palmenpixel Formular <${FROM}>`,
    `To: ${env.EINSENDUNG_AN}`,
    `Subject: =?UTF-8?B?${b64(`[${art}] ${titel}`)}?=`,
    `Message-ID: <${crypto.randomUUID()}@palmenpixel.de>`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: base64',
  ];
  if (email) headers.push(`Reply-To: ${email}`);
  const raw = headers.join('\r\n') + '\r\n\r\n' + b64(text).replace(/.{1,76}/g, '$&\r\n');

  try {
    await env.EMAIL.send(new EmailMessage(FROM, env.EINSENDUNG_AN, raw));
  } catch (e) {
    console.error('send failed', e);
    return json({ ok: false, error: 'send' }, 502);
  }
  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/einsenden') return einsenden(request, env);
    return env.ASSETS.fetch(request);
  },
};
