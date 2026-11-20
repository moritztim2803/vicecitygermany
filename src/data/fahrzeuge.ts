// Fahrzeug-Datenbank. Nur Angaben, die mehrere Quellen bestätigen.
// Bilder: Lege ein eigenes Foto als public/fahrzeuge/<id>.jpg ab, dann erscheint es automatisch statt der Silhouette.

export type Klasse = 'pickup' | 'sport' | 'super' | 'gelaende' | 'suv' | 'klassiker' | 'motorrad' | 'boot' | 'luft' | 'militaer';

export const KLASSEN: Record<Klasse, { name: string; c: string }> = {
  super: { name: 'Supersportwagen', c: '#ff4fa3' },
  sport: { name: 'Sportwagen', c: '#ff4fa3' },
  klassiker: { name: 'Klassiker', c: '#ffd166' },
  pickup: { name: 'Pick-up', c: '#ff9a4d' },
  suv: { name: 'SUV', c: '#ff9a4d' },
  gelaende: { name: 'Gelände', c: '#4dff9a' },
  motorrad: { name: 'Motorrad', c: '#b07cff' },
  boot: { name: 'Boot', c: '#3ee7f0' },
  luft: { name: 'Luft', c: '#3ee7f0' },
  militaer: { name: 'Militär', c: '#ff3b3b' },
};

export type Fahrzeug = {
  id: string;
  name: string;
  hersteller: string;
  klasse: Klasse;
  holen: string[];
  staerke: string;
  tags?: string[];
  warnung?: string;
  form?: Klasse; // Silhouette, falls abweichend von der Klasse
};

export const FAHRZEUGE: Fahrzeug[] = [
  { id: 'ganado', name: "'70 Vapid Ganado", hersteller: 'Vapid', klasse: 'pickup',
    holen: ['Gehört Jason von Anfang an und bleibt dir dauerhaft erhalten.', 'Mit der Ultimate Edition holst du in Kapitel 1 bei Coastal Auto Care in Key Lento den Retro-Umbau ab.'],
    staerke: 'Dein fester Wagen: Er bleibt gespeichert, und im Kofferraum lagerst du große Waffen und ein Ersatz-Outfit.',
    tags: ['Ab Spielstart'] },
  { id: 'cheetah', name: "'95 Grotti Cheetah", hersteller: 'Grotti', klasse: 'sport',
    holen: ['Ultimate Edition: steht ab Kapitel 5 in der Tiefgarage der Pegassi Residences in Vice City.'],
    staerke: 'Flacher Sportwagen-Klassiker, der in GTA zurückkehrt.', tags: ['Ultimate Edition'] },
  { id: 'dominator-buggy', name: "'67 Vapid Dominator Buggy", hersteller: 'Vapid', klasse: 'gelaende',
    holen: ['Ultimate Edition: steht ab Kapitel 2 in der Paradise Garage in Watson Bay.', 'Freigeschaltet über den Mud Club und das Dirt-Track-Rennen.'],
    staerke: 'Muscle-Car-Optik mit starkem Fahrverhalten im Gelände.', tags: ['Ultimate Edition'] },
  { id: 'stanier', name: "'55 Vapid Stanier", hersteller: 'Vapid', klasse: 'klassiker',
    holen: ['Vorbesteller-Bonus aus dem Vintage Vice City Pack.'],
    staerke: 'Zweifarbige Oldtimer-Limousine im 50er-Look.', tags: ['Vorbesteller'] },
  { id: 'enduro', name: 'Dinka Enduro', hersteller: 'Dinka', klasse: 'motorrad',
    holen: ['Ultimate Edition: steht ab Kapitel 1 bei Jasons Haus in Key Lento.'],
    staerke: 'Geländemotorrad: wendig, schnell im Gelände und ideal für schmale Wege.', tags: ['Ultimate Edition', 'Ab Spielstart'] },
  { id: 'kayak', name: 'Crest Kayak', hersteller: 'Crest', klasse: 'boot',
    holen: ['Ultimate Edition: liegt ab Kapitel 1 bei Jasons Haus in Key Lento.'],
    staerke: 'Für ruhige Ausflüge auf dem Wasser, direkt ab Jasons Haus.', tags: ['Ultimate Edition', 'Ab Spielstart'] },
  { id: 'squalo', name: 'Shitzu Squalo', hersteller: 'Shitzu', klasse: 'boot',
    holen: ['Ultimate Edition: liegt ab Kapitel 4 am Kanal-Steg in Washington Beach.'],
    staerke: 'Großes, schnelles Motorboot. An Bord steht eine Waffenkiste.', tags: ['Ultimate Edition'] },
  { id: 'carbonizzare', name: 'Grotti Carbonizzare', hersteller: 'Grotti', klasse: 'sport',
    holen: ['Fährt in den reichen Vierteln von Vice City herum. Klau ihn dir von der Straße.'],
    staerke: 'Sehr hohe Endgeschwindigkeit, braucht aber etwas, bis er sie erreicht.' },
  { id: 'coquette', name: 'Invetero Coquette D10', hersteller: 'Invetero', klasse: 'sport',
    holen: ['Fährt auf den Straßen von Vice City. Geparkt brauchst du meist einen Schlüssel.'],
    staerke: 'Ungefähr so schnell wie der Carbonizzare.' },
  { id: 'astron', name: 'Pfister Astron', hersteller: 'Pfister', klasse: 'suv',
    holen: ['Fährt in Downtown Vice City.'],
    staerke: 'Schnelles, wendiges SUV.' },
  { id: 'zorrusso', name: 'Granforma Zorrusso', hersteller: 'Granforma', klasse: 'super',
    holen: ['Du klaust ihn in Kapitel 3 in einer Story-Mission für Randy. Danach hast du auch den Schlüssel-Kloner.'],
    staerke: 'Einer der Supersportwagen im Spiel.', tags: ['Story'] },
  { id: 'thrax', name: 'Truffade Thrax', hersteller: 'Truffade', klasse: 'super',
    holen: ['Wird über das Cheat-Menü freigeschaltet, wenn du alle Shopping-Herausforderungen schaffst.'],
    staerke: 'Einer der Supersportwagen im Spiel.', tags: ['Freischaltbar'] },
  { id: 'lazer', name: 'Hauners P-996 Lazer', hersteller: 'Hauners', klasse: 'militaer', form: 'luft',
    holen: ['Steht auf der Mile Zero Air Station auf Goose Key, ab Kapitel 1 erreichbar.', 'Alternativ über das Cheat-Menü, wenn du alle Herausforderungen schaffst.'],
    staerke: 'Kampfjet mit Maschinengewehr und Raketen.', warnung: 'Wer ihn klaut, hat sofort fünf Sterne.', tags: ['Freischaltbar'] },
  { id: 'rhino', name: 'Hauners Rhino', hersteller: 'Hauners', klasse: 'militaer',
    holen: ['Steht in Reihen bei den Hangars der Mile Zero Air Station.', 'Alternativ über das Cheat-Menü, wenn du alle Survival-Herausforderungen schaffst.'],
    staerke: 'Panzer. Nichts hält ihn auf.', warnung: 'Hat einen festen Militär-Sender: Die Fahndung wirst du darin nicht los.', tags: ['Freischaltbar'] },
];

// Unsere Empfehlungen je Zweck (Platz 1 bis 3)
export const RANKINGS: { id: string; name: string; c: string; frage: string; plaetze: { id: string; warum: string }[] }[] = [
  { id: 'start', name: 'Bester Start', c: '#ffd166', frage: 'Was nehme ich am Anfang?', plaetze: [
    { id: 'ganado', warum: 'Bleibt dir dauerhaft, Kofferraum für Waffen und Outfit.' },
    { id: 'enduro', warum: 'Steht direkt bei Jasons Haus, ideal für die engen Wege der Keys.' },
    { id: 'kayak', warum: 'Liegt direkt am Haus, fürs Wasser gleich nebenan.' },
  ] },
  { id: 'tempo', name: 'Tempo', c: '#ff4fa3', frage: 'Womit bin ich am schnellsten?', plaetze: [
    { id: 'zorrusso', warum: 'Supersportwagen, kommt sicher über die Story.' },
    { id: 'carbonizzare', warum: 'Sehr hohe Endgeschwindigkeit, fährt in Vice City herum.' },
    { id: 'coquette', warum: 'Fast genauso schnell und häufig auf der Straße.' },
  ] },
  { id: 'gelaende', name: 'Gelände', c: '#4dff9a', frage: 'Was fährt gut abseits der Straße?', plaetze: [
    { id: 'dominator-buggy', warum: 'Gebaut fürs Gelände, mit starkem Fahrverhalten im Dreck.' },
    { id: 'enduro', warum: 'Kommt überall durch, wo Autos stecken bleiben.' },
    { id: 'ganado', warum: 'Robuster Pick-up für Feldwege und Sumpfstraßen.' },
  ] },
  { id: 'wasser', name: 'Wasser', c: '#3ee7f0', frage: 'Was nehme ich auf dem Wasser?', plaetze: [
    { id: 'squalo', warum: 'Schnelles Motorboot mit Waffenkiste an Bord.' },
    { id: 'kayak', warum: 'Leise durch Kanäle und flaches Wasser.' },
  ] },
  { id: 'chaos', name: 'Chaos', c: '#ff3b3b', frage: 'Ich will Ärger. Was nehme ich?', plaetze: [
    { id: 'rhino', warum: 'Panzer, aber die Fahndung bleibt an dir kleben.' },
    { id: 'lazer', warum: 'Kampfjet. Fünf Sterne sind dir sicher.' },
  ] },
];
