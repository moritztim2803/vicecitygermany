// Orte in Leonida für die interaktive Karte und die Orte-Liste.
// x/y sind Positionen auf unserer schematischen Karte (viewBox 1000 × 1000), nicht maßstabsgetreu.
// Orte ohne x/y stehen nur in der Liste.

export type RegionId = 'vice' | 'keys' | 'grass' | 'gell' | 'amb' | 'kal';
export type OrtTyp = 'stadt' | 'viertel' | 'natur' | 'spot' | 'freizeit';

export type Ort = {
  id: string;
  name: string;
  region: RegionId;
  typ: OrtTyp;
  text: string;
  x?: number;
  y?: number;
  link?: string;
};

export const TYPEN: Record<OrtTyp, { name: string; icon: string }> = {
  stadt: { name: 'Städte & Orte', icon: 'M4 21V9l5-3v15M9 21V4l6 3v14M15 21v-9l5 2v7M3 21h18' },
  viertel: { name: 'Stadtteile', icon: 'M3 21V10h6v11M9 21V4h7v17M16 21v-8h5v8M12 8h1M12 12h1M12 16h1' },
  natur: { name: 'Natur', icon: 'M2 20l7-12 4 6 3-4 6 10z' },
  spot: { name: 'Sehenswürdigkeiten', icon: 'M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21.1l1.5-7L2 9.3l7-.8z' },
  freizeit: { name: 'Freizeit & Nachtleben', icon: 'M8 21h8M12 15v6M5 3h14l-7 12z' },
};

export const ORTE: Ort[] = [
  // Vice City
  { id: 'downtown', name: 'Downtown Vice City', region: 'vice', typ: 'viertel', x: 636, y: 488,
    text: 'Das Hochhaus-Zentrum mit funktionierender U-Bahn. Am großen Autobahnkreuz liegen die Clubs NINE1NINE und The Vault.' },
  { id: 'vice-beach', name: 'Vice Beach', region: 'vice', typ: 'freizeit', x: 792, y: 505,
    text: 'Die Strandinsel im Osten: Bars, Hotels und Supersportwagen auf der Hauptstraße.' },
  { id: 'ocean-beach', name: 'Ocean Beach', region: 'vice', typ: 'freizeit', x: 800, y: 585,
    text: 'Art-déco-Hotels und weißer Sand. Hier stehen das Ocean View Hotel und das Fitnessstudio Venus Fitness.' },
  { id: 'vcia', name: 'Vice City International Airport', region: 'vice', typ: 'spot', x: 560, y: 575,
    text: 'Der große Flughafen mit oberer und unterer Ebene, Parkhaus in der Mitte und Flugzeugen auf dem Vorfeld.' },
  { id: 'port', name: 'Port Vice City', region: 'vice', typ: 'spot', x: 718, y: 592,
    text: 'Der Hafen für die großen Kreuzfahrtschiffe.' },
  { id: 'hamlet', name: 'Hamlet', region: 'vice', typ: 'stadt', x: 600, y: 705,
    text: 'Kleinstadt südlich von Vice City mit Gefängnis, Wohngebiet und kleiner Innenstadt.' },
  { id: 'waning-sands', name: 'Waning Sands', region: 'vice', typ: 'stadt', x: 712, y: 350,
    text: 'Vorstadt nördlich von Vice City mit Zugbrücke über den Leith River, Bahnlinie und Minigolf.' },
  { id: 'little-cuba', name: 'Little Cuba', region: 'vice', typ: 'viertel',
    text: 'Kubanische Bäckereien und der Hehler Yasmani, der dir Beute abkauft.' },
  { id: 'crosstown', name: 'Crosstown', region: 'vice', typ: 'viertel',
    text: 'Hier liegen die Tuning-Werkstatt Rideout Customs und der Club Jack of Hearts.' },
  { id: 'stockyard', name: 'Stockyard', region: 'vice', typ: 'viertel',
    text: 'Szeneviertel mit dem Laden Stock 305 und dem Tattoo-Studio Electric Fang.' },
  { id: 'la-perle', name: 'La Perle', region: 'vice', typ: 'viertel',
    text: 'Stadtteil mit dem Hehler Tyrone.' },
  { id: 'peacock-bay', name: 'Peacock Bay', region: 'vice', typ: 'viertel',
    text: 'Südlich von Downtown: Wohnblocks, Hochhäuser und kleine Läden.' },
  { id: 'washington-beach', name: 'Washington Beach', region: 'vice', typ: 'freizeit',
    text: 'Strandviertel, nördlich davon liegt die Bonita Court Garage.' },
  { id: 'flea', name: 'Tisha-Wocka Flea Market', region: 'vice', typ: 'freizeit',
    text: 'Flohmarkt mit gefälschter Markenware.' },
  { id: 'starfish', name: 'Starfish Island', region: 'vice', typ: 'spot',
    text: 'Insel voller Villen, bewacht von Sicherheitsleuten und Hunden.' },
  { id: 'rialto', name: 'Rialto Islands', region: 'vice', typ: 'spot',
    text: 'Die Inseln der Reichen vor der Küste von Vice City.' },
  { id: 'leaf-links', name: 'Leaf Links', region: 'vice', typ: 'freizeit',
    text: 'Golfplatz auf einer Insel vor Vice City.' },
  { id: 'dexter', name: 'Dexters Wohnung', region: 'vice', typ: 'spot', x: 772, y: 452,
    text: 'Easter Egg auf Washington Island, ganz im Osten der Karte.', link: '/easter-eggs/gta-6-easter-eggs/#dexters-wohnung-finden' },

  // Leonida Keys
  { id: 'key-lento', name: 'Key Lento', region: 'keys', typ: 'stadt', x: 600, y: 838,
    text: 'Hier beginnt das Spiel. Eine lange Straße führt durch den Ort, hier steht Jasons Haus.' },
  { id: 'brians', name: "Brian's Boat Works", region: 'keys', typ: 'spot',
    text: 'Bootswerft und Jachthafen von Brian Heder.' },
  { id: 'southwind', name: 'Southwind', region: 'keys', typ: 'stadt', x: 420, y: 960,
    text: 'Der Ort am südlichen Ende der Keys.' },
  { id: 'mile-zero', name: 'Mile Zero Air Station', region: 'keys', typ: 'spot', x: 285, y: 925,
    text: 'Militärflugplatz mit Kampfjets. Wer hier eindringt, bekommt sofort eine hohe Fahndungsstufe.' },

  // Grassrivers
  { id: 'watson-bay', name: 'Watson Bay', region: 'grass', typ: 'stadt', x: 330, y: 700,
    text: 'Fischerort mit Booten, Hotels, einer Bar und einer Eisdiele.' },
  { id: 'capri', name: 'Capri', region: 'grass', typ: 'stadt', x: 268, y: 610,
    text: 'Reiche Kleinstadt an der Küste, mit dem Juwelier Victoria Lee.' },
  { id: 'pelican', name: 'Pelican Valley', region: 'grass', typ: 'natur', x: 455, y: 760,
    text: 'Das Sumpfgebiet mit Cottonmouth Lake, Gullet Marsh und Pelican River.' },
  { id: 'bigfoot', name: 'Bigfoot am Cottonmouth Lake', region: 'grass', typ: 'spot', x: 500, y: 700,
    text: 'Easter Egg im Sumpf.', link: '/easter-eggs/gta-6-easter-eggs/#bigfoot-finden' },

  // Port Gellhorn
  { id: 'port-gellhorn', name: 'Port Gellhorn', region: 'gell', typ: 'stadt', x: 285, y: 330,
    text: 'Billigmotels, Polizeiwache, Bahnlinie und ein Diner. Eine große Brücke führt zu einer Industrieinsel.' },
  { id: 'raceway', name: 'Gellhorn International Raceway', region: 'gell', typ: 'freizeit', x: 330, y: 420,
    text: 'Rennstrecke, die unter einer Brücke durchführt, mit enger Haarnadelkurve.' },
  { id: 'delights', name: 'Delights', region: 'gell', typ: 'freizeit',
    text: 'Stripclub in Port Gellhorn mit Billardtischen.' },
  { id: 'draper', name: 'Draper Island', region: 'gell', typ: 'natur',
    text: 'Insel vor der Küste in der Draper Bay.' },
  { id: 'manifest', name: 'Manifest Canyon', region: 'gell', typ: 'natur',
    text: 'Schlucht im Norden des Kelly County.' },

  // Ambrosia
  { id: 'ambrosia', name: 'Ambrosia', region: 'amb', typ: 'stadt', x: 520, y: 395,
    text: 'Landwirtschaft und Industrie. Die Fabriken haben bewachte Bereiche nur für Mitarbeiter.' },
  { id: 'allied', name: 'Allied Crystal', region: 'amb', typ: 'spot', x: 470, y: 455,
    text: 'Die Zuckerraffinerie und der größte Arbeitgeber der Stadt.' },
  { id: 'lake-leonida', name: 'Lake Leonida', region: 'amb', typ: 'natur', x: 572, y: 292,
    text: 'Der große See in der Mitte von Leonida, nach dem Vorbild des Lake Okeechobee.' },
  { id: 'thrillbilly', name: 'Thrillbilly Mud Club', region: 'amb', typ: 'freizeit',
    text: 'Schlammrennen abseits der Straße.' },

  // Mount Kalaga
  { id: 'kalaga', name: 'Mount Kalaga National Park', region: 'kal', typ: 'natur', x: 452, y: 175,
    text: 'Aussichtsplattform mit Blick bis nach Vice City, eine Straße zum Gipfel und Pfade für Quads.' },
  { id: 'millport', name: 'Millport', region: 'kal', typ: 'stadt', x: 600, y: 95,
    text: 'Industriestadt mit Hafenkränen, weiter die Küste entlang steht ein Leuchtturm.' },
  { id: 'tallaloko', name: 'Lake Tallaloko', region: 'kal', typ: 'natur', x: 655, y: 190,
    text: 'See im Osten, in der Nähe von Millport.' },
  { id: 'reservoir', name: 'Kalaga Reservoir', region: 'kal', typ: 'natur',
    text: 'Stausee im Norden.' },
  { id: 'grayson', name: 'Grayson', region: 'kal', typ: 'stadt',
    text: 'Ort an der San Malo Bay, nahe den Featherstone Islands.' },
];
