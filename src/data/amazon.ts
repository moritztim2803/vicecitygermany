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
};
