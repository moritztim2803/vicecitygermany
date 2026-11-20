// Alle 61 Cheats aus GTA 6 (Story-Modus, PS5 und Xbox Series X|S).
// Quellen: Red Bull, GamesRadar, Vice (Stand 19./20.11.2026). Ein Code steht nur hier, wenn mindestens zwei Quellen ihn gleich angeben.
// Codes sind Steuerkreuz-Folgen: U = hoch, D = runter, L = links, R = rechts. Auf PS5 und Xbox gleich.

export type CheatKat = 'spieler' | 'kampf' | 'fahrzeug' | 'umgebung' | 'filter';
export type Cheat = { id: string; name: string; sub: string; kat: CheatKat; code?: string; unlock: string; tags?: string };

export const KATS: Record<CheatKat, { name: string; c: string }> = {
  spieler: { name: 'Spieler', c: '#ff4fa3' },
  kampf: { name: 'Kampf', c: '#ff9a4d' },
  fahrzeug: { name: 'Fahrzeuge', c: '#3ee7f0' },
  umgebung: { name: 'Zeit & Wetter', c: '#4dff9a' },
  filter: { name: 'Bildfilter', c: '#b07cff' },
};

export const CHEATS: Cheat[] = [
  // Spieler (10)
  { id: 'geld', name: '250.000 $', sub: '$250,000', tags: 'geld money cash dollar', kat: 'spieler', code: 'URDLULDR', unlock: 'Story abschließen' },
  { id: 'betrunken', name: 'Betrunken', sub: 'Drunk', kat: 'spieler', unlock: '2.500 $ für Alkohol ausgeben' },
  { id: 'heat', name: 'Heat erhöhen', sub: 'Raise Heat Level', kat: 'spieler', code: 'LDRDUDU', unlock: '25-mal eine 3-Sterne-Fahndung abhängen' },
  { id: 'wanted', name: 'Fahndungslevel erhöhen', sub: 'Raise Wanted Level', kat: 'spieler', code: 'LDRDURU', unlock: '50-mal eine 3-Sterne-Fahndung abhängen' },
  { id: 'fokus', name: 'Unendlich Fokus', sub: 'Unlimited Focus', kat: 'spieler', code: 'DUUDUDUDUR', unlock: 'Story abschließen' },
  { id: 'fall', name: 'Kein Fallschaden', sub: 'No Fall Damage', kat: 'spieler', unlock: '20-mal einen Sturz aus 40 Fuß (rund 12 m) überleben' },
  { id: 'fallschirm', name: 'Fallschirm', sub: 'Parachute', kat: 'spieler', unlock: '50 Fallschirm- oder BASE-Sprünge aus 300 Fuß (rund 90 m) oder höher' },
  { id: 'weste', name: 'Schutzweste', sub: 'Body Armor', kat: 'spieler', code: 'DULUUUUUDD', unlock: '100 Workouts' },
  { id: 'reparieren', name: 'Fahrzeug reparieren', sub: 'Repair Vehicle', kat: 'spieler', unlock: '10 Siege auf dem Gellhorn Raceway, im Thrillbilly Mud Club und auf dem Boone Speedway' },
  { id: 'nitro', name: 'Unendlich Nitro', sub: 'Unlimited Nitrous', kat: 'spieler', unlock: '50 Stunt-Sprünge' },
  // Kampf (11)
  { id: 'maxmuni', name: 'Volle Munition', sub: 'Max Ammo', kat: 'kampf', code: 'DURDLLUUDL', unlock: '25 Bronze-Medaillen (oder besser) am Schießstand' },
  { id: 'endlosmuni', name: 'Unendlich Munition', sub: 'Infinite Ammo', kat: 'kampf', code: 'DURDLLUDDD', unlock: '25 Silber-Medaillen (oder besser) am Schießstand' },
  { id: 'nachladen', name: 'Kein Nachladen', sub: 'No Reload', kat: 'kampf', code: 'DURDLLUDDU', unlock: '25 Gold-Medaillen am Schießstand' },
  { id: 'spreng', name: 'Alle Sprengwaffen', sub: 'All Explosive Weapons', kat: 'kampf', unlock: '100 Granaten werfen' },
  { id: 'brand', name: 'Brandmunition', sub: 'Incendiary Ammo', kat: 'kampf', unlock: '100 Gegner mit Feuer erledigen' },
  { id: 'flaschen', name: 'Explodierende Flaschen', sub: 'Exploding Bottles', kat: 'kampf', unlock: '100 Molotowcocktails werfen' },
  { id: 'schrot', name: 'Explosive Schrotflinte', sub: 'Explosive Shotgun', kat: 'kampf', unlock: '100 Gegner mit Explosionen treffen' },
  { id: 'hat', name: 'Hauners H-AT', sub: 'Hauners H-AT', kat: 'kampf', unlock: '100 Fahrzeuge in die Luft jagen' },
  { id: 'attack', name: 'Attack Force', sub: 'Attack Force', kat: 'kampf', code: 'DULLRDDUD', unlock: 'Story abschließen' },
  { id: 'baelle', name: 'Explodierende Bälle', sub: 'Exploding Balls', kat: 'kampf', code: 'DULLRDDUR', unlock: '20 Gegner mit Explosionen treffen' },
  { id: 'vforce', name: 'Vehicle Force', sub: 'Vehicle Force', kat: 'kampf', code: 'DULLRDLUD', unlock: '25 Gegner mit einem Fahrzeug erledigen' },
  // Fahrzeuge (21)
  { id: 'ambulanz', name: 'Interstate Ambulance', sub: 'Krankenwagen', kat: 'fahrzeug', unlock: 'Im Fortschrittsmenü entdecken' },
  { id: 'airboat', name: 'Airboat 09', sub: 'Sumpfboot', kat: 'fahrzeug', unlock: '5 Überlebens-Herausforderungen' },
  { id: 'banshee', name: 'Bravado Banshee', sub: 'Sportwagen', kat: 'fahrzeug', unlock: 'Alle Kampf-Herausforderungen' },
  { id: 'bmx', name: 'Tuff BMX', sub: 'BMX-Rad', kat: 'fahrzeug', unlock: '5 Fitness-Herausforderungen' },
  { id: 'boomazoom', name: 'Maibatsu Boomazoom', sub: 'Fahrzeug', kat: 'fahrzeug', code: 'LURDLLUL', unlock: '5 Shopping-Herausforderungen' },
  { id: 'carbon', name: 'Nagasaki Carbon RS', sub: 'Motorrad', kat: 'fahrzeug', unlock: 'Alle Erkundungs-Herausforderungen' },
  { id: 'dominator', name: '’65 Vapid Dominator', sub: 'Muscle-Car', kat: 'fahrzeug', unlock: 'Alle Fitness-Herausforderungen' },
  { id: 'emerus', name: 'Progen Emerus', sub: 'Supersportwagen', kat: 'fahrzeug', unlock: 'Alle Fahrzeug-Herausforderungen' },
  { id: 'flamingo', name: 'Aufblasbarer Flamingo', sub: 'Inflatable Flamingo', kat: 'fahrzeug', unlock: '50 Koks-Flamingos zerstören' },
  { id: 'pumper', name: 'MTL Pumper', sub: 'Feuerwehrauto', kat: 'fahrzeug', code: 'LURDLRRU', unlock: 'Im Fortschrittsmenü entdecken' },
  { id: 'taxi', name: 'Vapid Stanier G2 Taxi', sub: 'Taxi', kat: 'fahrzeug', unlock: '5 Sport-Herausforderungen' },
  { id: 'lazer', name: 'Hauners P-996 Lazer', sub: 'Kampfjet', kat: 'fahrzeug', unlock: 'Alle Herausforderungen' },
  { id: 'bulldozer', name: 'HVY Bulldozer', sub: 'Bulldozer', kat: 'fahrzeug', code: 'LURDLRRD', unlock: 'Im Fortschrittsmenü entdecken' },
  { id: 'mallard', name: 'Lapwing Mallard', sub: 'Flugzeug', kat: 'fahrzeug', unlock: '5 Fahrzeug-Herausforderungen' },
  { id: 'golfer', name: 'Brimstone Golfer', sub: 'Golfwagen', kat: 'fahrzeug', unlock: 'Alle Sport-Herausforderungen' },
  { id: 'rhino', name: 'Hauners Rhino Tank', sub: 'Panzer', kat: 'fahrzeug', unlock: 'Alle Überlebens-Herausforderungen' },
  { id: 'sanchez', name: 'Maibatsu Sanchez', sub: 'Geländemotorrad', kat: 'fahrzeug', unlock: '5 Kriminellen-Herausforderungen' },
  { id: 'seasparrow', name: 'Nagasaki Sea Sparrow', sub: 'Wasserhubschrauber', kat: 'fahrzeug', unlock: '5 Erkundungs-Herausforderungen' },
  { id: 'speeder', name: 'Speeder 700 GT', sub: 'Speedboot', kat: 'fahrzeug', unlock: '5 Kampf-Herausforderungen' },
  { id: 'thrax', name: 'Truffade Thrax', sub: 'Supersportwagen', kat: 'fahrzeug', unlock: 'Alle Shopping-Herausforderungen' },
  { id: 'bobber', name: 'Western Zombie Bobber', sub: 'Chopper', kat: 'fahrzeug', unlock: 'Alle Kriminellen-Herausforderungen' },
  // Zeit & Wetter (3)
  { id: 'zeitvor', name: 'Zeit vorspulen', sub: 'Move Time Forward', kat: 'umgebung', unlock: '10 Sammel-Uhren finden' },
  { id: 'zeitstop', name: 'Tageszeit anhalten', sub: 'Pause Time of Day', kat: 'umgebung', unlock: '20 Sammel-Uhren finden' },
  { id: 'wetter', name: 'Wetter wechseln', sub: 'Cycle Weather', kat: 'umgebung', code: 'DRUDRUR', unlock: 'Story abschließen' },
  // Bildfilter (16)
  { id: 'golden', name: 'Golden Hour', sub: 'Bildfilter', kat: 'filter', unlock: '4 Stunden Händchen halten mit deinem Partner' },
  { id: 'sugar', name: 'Powdered Sugar', sub: 'Bildfilter', kat: 'filter', unlock: 'Allen Weltraumschrott mit WAiNK scannen' },
  { id: 'pinhole', name: 'Pinhole', sub: 'Bildfilter', kat: 'filter', unlock: '25 Gang-Einsätze mit deinem Partner' },
  { id: 'neon', name: 'Neon Jungle', sub: 'Bildfilter', kat: 'filter', unlock: 'Alle 16 Girlypop-Fahrzeuge entdecken' },
  { id: 'yesteryear', name: 'Yesteryear', sub: 'Bildfilter', kat: 'filter', unlock: 'Den Ridgway entdecken' },
  { id: 'cataclysm', name: 'Cataclysm', sub: 'Bildfilter', kat: 'filter', code: 'DDURRULLRR', unlock: 'Marthas Vamos im Fortschrittsmenü entdecken' },
  { id: 'videotape', name: 'Videotape', sub: 'Bildfilter', kat: 'filter', unlock: '50 Aktivitäten mit deinem Partner' },
  { id: 'mirror', name: 'Dark Mirror', sub: 'Bildfilter', kat: 'filter', unlock: '500.000 $ mit Fahrzeugverkäufen verdienen' },
  { id: 'migraine', name: 'Migraine', sub: 'Bildfilter', kat: 'filter', unlock: '6 Minuten bei 6 Sternen überleben' },
  { id: 'dollhouse', name: 'Dollhouse', sub: 'Bildfilter', kat: 'filter', code: 'DDURRULLDR', unlock: '8 Stunden mit deinem Partner verbringen' },
  { id: 'bubblegum', name: 'Bubblegum', sub: 'Bildfilter', kat: 'filter', unlock: 'Alle 24 Vice City Flamingos-Karten finden' },
  { id: 'ff', name: 'Fast Forward', sub: 'Bildfilter', kat: 'filter', unlock: '50-mal meditieren' },
  { id: 'fisheye', name: 'Fisheye', sub: 'Bildfilter', kat: 'filter', unlock: '100 Fische fangen' },
  { id: 'faded', name: 'Faded Glory', sub: 'Bildfilter', kat: 'filter', code: 'DDURRULLLR', unlock: '50 Läden mit deinem Partner ausrauben' },
  { id: 'pixel', name: 'Pixel Art', sub: 'Bildfilter', kat: 'filter', unlock: '250.000 $ mit Sammlerstücken verdienen' },
  { id: 'hellscape', name: 'Hellscape', sub: 'Bildfilter', kat: 'filter', unlock: '100 Polizeifahrzeuge stehlen' },
];

export const ARROW: Record<string, string> = { U: '↑', D: '↓', L: '←', R: '→' };
export const codeText = (c: string) => [...c].map((k) => ARROW[k]).join(' ');
