// Zentrale Einstellungen der Seite. Hier änderst du Name, Domain, Werbung und Affiliate.

export const SITE = {
  name: 'Palmenpixel',
  tagline: 'GTA 6 Guides, Tipps & News auf Deutsch',
  url: 'https://palmenpixel.de',
  lang: 'de',
  locale: 'de_DE',
};

export const ADS = {
  // AdSense Publisher-ID, z. B. 'ca-pub-1234567890123456'. Leer = es werden nur Platzhalter angezeigt.
  adsenseClient: '',
  // Slot-IDs aus dem AdSense-Konto (Anzeigenblöcke). Leer = automatische Anzeigen / Platzhalter.
  slots: {
    'header': '',
    'in-article': '',
    'sidebar': '',
    'footer': '',
  } as Record<string, string>,
};

export const NEWSLETTER = {
  // Formular-Adresse aus dem Newsletter-Dienst (z. B. Brevo: Formular > Teilen > HTML-Code > action="...").
  // Leer = das Anmeldefeld wird auf der Live-Seite nicht angezeigt.
  action: '',
  // Name des E-Mail-Feldes im Formular des Dienstes (Brevo: 'EMAIL', MailerLite: 'fields[email]').
  emailField: 'EMAIL',
  // Name des Dienstes für den Datenschutzhinweis.
  provider: 'Brevo',
};

export const AFFILIATE = {
  // Amazon PartnerNet Tracking-ID, z. B. 'deinname-21'
  amazonTag: '',
};

export const CATEGORIES = [
  { slug: 'news', name: 'News', description: 'Release, Updates, Patches und alles, was gerade zu GTA 6 passiert.' },
  { slug: 'guides', name: 'Guides', description: 'Schritt-für-Schritt-Anleitungen zu Missionen, Geld, Fahrzeugen und mehr.' },
  { slug: 'easter-eggs', name: 'Easter Eggs', description: 'Geheimnisse, Anspielungen und versteckte Orte in GTA 6, Schritt für Schritt zum Nachspielen.' },
  { slug: 'karte', name: 'Karte & Orte', description: 'Leonida, Vice City und alle Orte, Fundorte und Sammelobjekte.' },
  { slug: 'technik', name: 'Technik & Hardware', description: 'Performance, Einstellungen, Speicherplatz, Controller und Zubehör.' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
