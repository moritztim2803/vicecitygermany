// Welche Amazon-Empfehlungen unter welchem Artikel stehen (Schlüssel = Artikel-Slug).
import type { Tipp } from '../components/AmazonTipps.astro';

const SSD: Tipp[] = [
  { title: '1 TB M.2-SSD für PS5 mit Kühlkörper', note: 'Reicht für GTA 6 und mehrere große Spiele. Bestes Preis-Leistungs-Verhältnis.', q: 'PS5 SSD 1TB Kühlkörper' },
  { title: '2 TB M.2-SSD für PS5 mit Kühlkörper', note: 'Wenn du viele große Spiele gleichzeitig installiert lassen willst.', q: 'PS5 SSD 2TB Kühlkörper' },
];
const SPIEL: Tipp[] = [
  { title: 'GTA 6 für PS5', note: 'Standard Edition, 79,99 € UVP.', q: 'GTA 6 PS5' },
  { title: 'GTA 6 für Xbox Series X|S', note: 'Standard Edition, 79,99 € UVP.', q: 'GTA 6 Xbox Series X' },
];
const CONTROLLER: Tipp[] = [
  { title: 'DualSense-Controller für PS5', note: 'Zweiter Controller oder Ersatz, wenn die Sticks driften.', q: 'DualSense Controller PS5' },
  { title: 'Gaming-Headset für PS5 und Xbox', note: 'Für Radio, Dialoge und Umgebungsgeräusche in Leonida.', q: 'Gaming Headset PS5 Xbox' },
];

export const AMAZON: Record<string, Tipp[]> = {
  'gta-6-ps5-ssd-einbauen': SSD,
  'gta-6-speicherplatz-wie-viel-gb': [...SSD,
    { title: 'Speichererweiterungskarte für Xbox Series X|S', note: 'Der Xbox-Weg: einstecken, fertig. Spiele laufen direkt davon.', q: 'Xbox Series Speichererweiterungskarte 1TB' }],
  'gta-6-release-uhrzeit-preis-editionen': SPIEL,
  'gta-6-ultimate-edition-lohnt-sich': SPIEL,
  'gta-6-collectors-edition-inhalt': SPIEL,
  'gta-6-ps4-xbox-one': [
    { title: 'PS5 Slim', note: 'Unser Tipp: der beste Kompromiss aus Preis und Leistung.', q: 'PS5 Slim Konsole' },
    { title: 'Xbox Series X', note: 'Die stärkere Xbox für GTA 6.', q: 'Xbox Series X Konsole' }],
  'gta-6-30-fps-60-fps-ps5-pro-xbox': [
    { title: 'PS5 Pro', note: 'Hier sieht GTA 6 am besten aus: schärferes Bild und stabile 30 FPS.', q: 'PS5 Pro Konsole' },
    { title: 'PS5 Slim', note: 'Günstiger Einstieg.', q: 'PS5 Slim Konsole' }],
  'gta-6-einsteiger-tipps': CONTROLLER,
  'gta-6-stuerzt-ab-startet-nicht-loesungen': SSD,
  'gta-6-cheats': [CONTROLLER[0], { title: 'Xbox Wireless Controller', note: 'Cheats gibst du mit dem Steuerkreuz ein. Ein Controller mit gutem Steuerkreuz hilft.', q: 'Xbox Wireless Controller' }],
  'gta-6-trophaeen': [{ title: 'Ladestation für Controller', note: 'Für die lange Jagd nach der Platin: zwei Controller gleichzeitig laden.', q: 'Ladestation Controller PS5' }, CONTROLLER[0]],
  'gta-6-spielzeit-wie-lange': [...SPIEL, CONTROLLER[1]],
  'gta-6-pc-version-release': SPIEL,
  'gta-6-schnell-geld-verdienen': CONTROLLER,
  'gta-6-polizei-abhaengen-fahndung': CONTROLLER,
};

// Die Zubehör-Seite /zubehoer/: alles rund um GTA 6 zum Kaufen, nach Bereichen.
export type ShopItem = Tipp & { badge?: string; plattform?: 'ps5' | 'xbox' | 'beide' };
export const SHOP: { id: string; name: string; c: string; intro: string; items: ShopItem[] }[] = [
  { id: 'spiel', name: 'Das Spiel', c: '#ff4fa3', intro: 'GTA 6 gibt es nur für PS5 und Xbox Series X|S. Die Standard Edition reicht für die ganze Story.',
    items: [
      { title: 'GTA 6 für PS5', note: 'Standard Edition, 79,99 € UVP.', q: 'GTA 6 PS5', plattform: 'ps5', badge: 'Unser Tipp' },
      { title: 'GTA 6 für Xbox Series X|S', note: 'Standard Edition, 79,99 € UVP.', q: 'GTA 6 Xbox Series X', plattform: 'xbox' },
      { title: 'PlayStation-Store-Guthaben', note: 'Für die digitale Version, die Ultimate Edition oder ein Upgrade.', q: 'PSN Guthaben', plattform: 'ps5' },
      { title: 'Xbox-Guthaben', note: 'Für die digitale Version auf der Xbox.', q: 'Xbox Guthaben', plattform: 'xbox' },
    ] },
  { id: 'konsole', name: 'Konsole', c: '#3ee7f0', intro: 'Alle Konsolen laufen mit 30 FPS. Am schönsten sieht GTA 6 auf der PS5 Pro aus, am schwächsten läuft es auf der Xbox Series S.',
    items: [
      { title: 'PS5 Slim', note: 'Der beste Kompromiss aus Preis und Leistung.', q: 'PS5 Slim Konsole', plattform: 'ps5', badge: 'Unser Tipp' },
      { title: 'PS5 Pro', note: 'Schärferes Bild und stabile 30 FPS. Für alle, die das Beste wollen.', q: 'PS5 Pro Konsole', plattform: 'ps5' },
      { title: 'Xbox Series X', note: 'Die stärkere Xbox, läuft ähnlich gut wie die PS5.', q: 'Xbox Series X Konsole', plattform: 'xbox' },
      { title: 'Xbox Series S', note: 'Günstig, aber in Action-Szenen oft unter 30 FPS.', q: 'Xbox Series S Konsole', plattform: 'xbox' },
    ] },
  { id: 'controller', name: 'Controller', c: '#4dff9a', intro: 'Ein zweiter Controller lohnt sich, wenn einer leer ist oder die Sticks driften.',
    items: [
      { title: 'DualSense-Controller', note: 'Der Standard-Controller der PS5, in vielen Farben.', q: 'DualSense Controller PS5', plattform: 'ps5', badge: 'Unser Tipp' },
      { title: 'DualSense Edge', note: 'Pro-Controller mit Rücktasten und tauschbaren Sticks.', q: 'DualSense Edge', plattform: 'ps5' },
      { title: 'Xbox Wireless Controller', note: 'Der Standard-Controller der Xbox Series X|S.', q: 'Xbox Wireless Controller', plattform: 'xbox' },
      { title: 'Ladestation für Controller', note: 'Zwei Controller gleichzeitig laden, nie wieder leerer Akku.', q: 'Ladestation Controller PS5' , plattform: 'beide' },
    ] },
  { id: 'speicher', name: 'Speicher', c: '#ffd166', intro: 'GTA 6 braucht bis zu 212 GB. Auf der ersten PS5 sind nur 667 GB frei, da wird es schnell eng.',
    items: [
      { title: '1 TB M.2-SSD für PS5 mit Kühlkörper', note: 'Reicht für GTA 6 und mehrere große Spiele.', q: 'PS5 SSD 1TB Kühlkörper', plattform: 'ps5', badge: 'Unser Tipp' },
      { title: '2 TB M.2-SSD für PS5 mit Kühlkörper', note: 'Für alle, die nichts mehr löschen wollen.', q: 'PS5 SSD 2TB Kühlkörper', plattform: 'ps5' },
      { title: 'Speichererweiterungskarte für Xbox', note: 'Einstecken, fertig. Spiele laufen direkt davon.', q: 'Xbox Series Speichererweiterungskarte 1TB', plattform: 'xbox' },
    ] },
  { id: 'audio', name: 'Sound', c: '#b07cff', intro: 'Radio, Dialoge und Umgebung: Mit Headset hörst du Leonida richtig.',
    items: [
      { title: 'Gaming-Headset für PS5 und Xbox', note: 'Kabellos oder mit Kabel, für beide Konsolen.', q: 'Gaming Headset PS5 Xbox', plattform: 'beide', badge: 'Unser Tipp' },
      { title: 'Soundbar für den Fernseher', note: 'Mehr Wumms im Wohnzimmer, ohne Kopfhörer.', q: 'Soundbar Fernseher', plattform: 'beide' },
    ] },
];
