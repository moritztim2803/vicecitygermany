// Die sechs Regionen von Leonida: Texte für Region-Test, Ergebnis-Seiten und Teilen-Bilder.
import type { RegionId } from './orte';

export type Region = { id: RegionId; slug: string; name: string; c: string; typ: string; motto: string; text: string; link: string; linkText: string };

export const REGIONEN: Record<RegionId, Region> = {
  vice: { id: 'vice', slug: 'vice-city', name: 'Vice City', c: '#ff4fa3', typ: 'Großstadt', motto: 'Neon, Strand und Nachtleben',
    text: 'Du brauchst Neonlicht, Lärm und Leute um dich herum. Tagsüber Ocean Beach, nachts ein Club in Downtown: In der Großstadt nach dem Vorbild von Miami bist du zu Hause.',
    link: '/easter-eggs/gta-6-easter-eggs/#dexters-wohnung-finden', linkText: 'Dein erstes Ziel: Dexters Wohnung' },
  keys: { id: 'keys', slug: 'leonida-keys', name: 'Leonida Keys', c: '#3ee7f0', typ: 'Inselkette', motto: 'Boot, Sonne, türkises Wasser',
    text: 'Du lässt es lieber ruhig angehen. Mit dem Boot von Key Lento raus aufs Meer und nach Schätzen tauchen, statt im Stau zu stehen.',
    link: '/guides/gta-6-schnell-geld-verdienen/', linkText: 'Schatztauchen mit Kenton' },
  grass: { id: 'grass', slug: 'grassrivers', name: 'Grassrivers', c: '#4dff9a', typ: 'Sumpfgebiet', motto: 'Je seltsamer, desto besser',
    text: 'Alligatoren schrecken dich nicht ab. Du willst wissen, was im Sumpf von Pelican Valley lauert, und am Ende des Tages gibt es ein Eis in Watson Bay.',
    link: '/easter-eggs/gta-6-easter-eggs/#bigfoot-finden', linkText: 'Auf zu Bigfoot' },
  gell: { id: 'gell', slug: 'port-gellhorn', name: 'Port Gellhorn', c: '#ff9a4d', typ: 'Küstenort', motto: 'Billigmotel statt Luxushotel',
    text: 'Du magst Orte mit Ecken und Kanten: Motels an der Landstraße, Billard im Delights und Rennen auf dem Gellhorn International Raceway.',
    link: '/karte/gta-6-karte-regionen/#port-gellhorn', linkText: 'Mehr über Port Gellhorn' },
  amb: { id: 'amb', slug: 'ambrosia', name: 'Ambrosia', c: '#ffd166', typ: 'Industriestadt', motto: 'Ehrliche Arbeit, laute Motoren',
    text: 'Zwischen Zuckerraffinerie und Biker-Gang fühlst du dich wohler als in jeder Strandbar. Am Wochenende geht es zum Schlammrennen in den Thrillbilly Mud Club.',
    link: '/karte/gta-6-karte-regionen/#ambrosia', linkText: 'Mehr über Ambrosia' },
  kal: { id: 'kal', slug: 'mount-kalaga', name: 'Mount Kalaga', c: '#b07cff', typ: 'Nationalpark', motto: 'Weg von allem',
    text: 'Angeln am Lake Tallaloko, Jagen im Wald, mit dem Quad über die Pfade und abends auf die Aussichtsplattform: Im Nationalpark findest du deine Ruhe.',
    link: '/karte/gta-6-karte-regionen/#mount-kalaga', linkText: 'Mehr über Mount Kalaga' },
};
export const REGION_ORDER: RegionId[] = ['vice', 'keys', 'grass', 'gell', 'amb', 'kal'];
export const QUIZ_URL = '/karte/gta-6-quiz-welche-region/';
export const ergebnisUrl = (r: RegionId) => `/test/${REGIONEN[r].slug}/`;
export const regionUrl = (r: RegionId) => `/karte/gta-6-${REGIONEN[r].slug}/`;
