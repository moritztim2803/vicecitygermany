// Zentrale Einstellungen der Seite. Hier änderst du Name, Domain, Werbung und Affiliate.

export const SITE = {
  name: 'Palmenpixel',
  tagline: 'GTA 6 Guides, Easter Eggs & News auf Deutsch',
  url: 'https://palmenpixel.de',
  lang: 'de',
  locale: 'de_DE',
};

export const ADS = {
  // AdSense-Konto für die Website-Prüfung (Meta-Tag + ads.txt). Lädt noch keine Werbung.
  account: 'ca-pub-8394934654859724',
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
  action: 'https://85133445.sibforms.com/serve/MUIFAAOAcqikvZOXawQs1TGyGXkTBb05c_cEHwc3I3il75iqyF-nBBiZ3sgo6xtQ6Sbt82Zuzma40v7hRN73yez_k3_mj84yfOl4sqFeHoeMXgIxiqWwyemxp54ZN4gmLtUeJ6anJ3CZca-or7LNtOGhZVFkikbA4KCbW2Sx8wvE36qlYG6k5ZbPZXW-aLM7hjT8ahZm5I3gS9GjgA==',
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

// Hauptnavigation oben
export const NAV = [
  { href: '/tools/', name: 'Tools' },
  { href: '/karte/gta-6-karte-regionen/', name: 'Karte' },
  { href: '/fahrzeuge/', name: 'Fahrzeuge' },
  { href: '/kategorie/easter-eggs/', name: 'Easter Eggs' },
  { href: '/kategorie/guides/', name: 'Guides' },
  { href: '/checklisten/', name: 'Checklisten' },
  { href: '/kategorie/news/', name: 'News' },
  { href: '/kategorie/technik/', name: 'Technik' },
];

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
