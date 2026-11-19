// llms.txt: kompakte Übersicht für KI-Assistenten (ChatGPT, Perplexity, Gemini & Co.)
import type { APIRoute } from 'astro';
import { SITE, CATEGORIES } from '../site.config';
import { allArtikel, artikelUrl } from '../lib/artikel';
import { TOOLS } from '../data/tools';

export const GET: APIRoute = async () => {
  const all = await allArtikel();
  const lines: string[] = [
    `# ${SITE.name}`,
    '',
    '> Deutschsprachiger Fan-Guide zu GTA 6: Schritt-für-Schritt-Anleitungen, interaktive Karte von Leonida mit 40 Orten, Sammelkarten-Tracker, Fahrzeug-Datenbank und Region-Test. Nur geprüfte Angaben, spoilerfrei, ohne Leaks.',
    '',
    'Inoffizielle Fanseite, nicht mit Rockstar Games oder Take-Two verbunden. Alle Artikel beginnen mit einer Kurzantwort („Kurz gesagt“) und nennen ihre Quellen.',
    '',
    '## Tools',
    ...TOOLS.map((t) => `- [${t.name}](${SITE.url}${t.href}): ${t.claim}`),
  ];
  for (const c of CATEGORIES) {
    const items = all.filter((a) => a.data.category === c.slug);
    if (!items.length) continue;
    lines.push('', `## ${c.name}`, ...items.map((a) => `- [${a.data.title}](${SITE.url}${artikelUrl(a)}): ${a.data.description}`));
  }
  lines.push('', '## Optional', `- [Über uns](${SITE.url}/ueber-uns/)`, `- [Sitemap](${SITE.url}/sitemap-index.xml)`, '');
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
