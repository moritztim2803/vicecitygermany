// Charaktere von GTA 6. Nur spoilerfreie Rollenbeschreibungen.
// Aufgenommen wird eine Figur nur, wenn mindestens zwei Quellen Name und Rolle bestätigen.
// Figuren, die nur mit Story-Spoilern zu beschreiben sind, kommen NICHT auf die Seite.

export type GruppeId = 'haupt' | 'keys' | 'musik' | 'megamundo' | 'leonida' | 'helfer';

export type Charakter = {
  id: string;
  name: string;
  kurz: string;          // 1 Zeile unter dem Namen
  rolle: string;         // 2 bis 3 spoilerfreie Sätze
  gruppe: GruppeId;
  ort?: string;
  spielbar?: boolean;
  offiziell?: boolean;   // von Rockstar vor dem Release vorgestellt
  links?: { href: string; text: string }[];
  c: string;             // Neonfarbe der Karte
};

export const GRUPPEN: { id: GruppeId; name: string; text: string }[] = [
  { id: 'haupt', name: 'Hauptfiguren', text: 'Die zwei Figuren, die du spielst.' },
  { id: 'keys', name: 'Die Keys', text: 'Jasons Umfeld rund um Key Lento und den Hafen.' },
  { id: 'musik', name: 'Vice-City-Musikszene', text: 'Label, Club und Rapperinnen aus Vice City.' },
  { id: 'megamundo', name: 'Megamundo', text: 'Die Leute hinter dem großen Konzern.' },
  { id: 'leonida', name: 'Rund um Leonida', text: 'Weitere Figuren, die dir unterwegs begegnen.' },
  { id: 'helfer', name: 'Helfer & Nebenjobs', text: 'Bei ihnen verdienst du früh Geld.' },
];

export const CHARAKTERE: Charakter[] = [
  {
    id: 'jason-duval', name: 'Jason Duval', kurz: 'Spielbare Hauptfigur', gruppe: 'haupt', spielbar: true, offiziell: true,
    ort: 'Leonida Keys', c: '#3ee7f0',
    rolle: 'Jason will eigentlich ein ruhiges Leben, rutscht aber immer wieder in krumme Geschäfte. Er wohnt in den Keys und arbeitet für Leute aus der Schmugglerszene. Mit Lucia bildet er das Gangster-Paar im Zentrum der Story.',
    links: [{ href: '/guides/gta-6-jason-lucia-charakterwechsel/', text: 'So wechselst du zwischen Jason und Lucia' }],
  },
  {
    id: 'lucia-caminos', name: 'Lucia Caminos', kurz: 'Spielbare Hauptfigur', gruppe: 'haupt', spielbar: true, offiziell: true,
    c: '#ff4fa3',
    rolle: 'Lucia ist die erste weibliche Hauptfigur der GTA-Reihe. Sie kommt frisch aus dem Gefängnis und will mit Jason endlich ein besseres Leben. Dafür ist sie bereit, mehr zu riskieren als er.',
    links: [{ href: '/guides/gta-6-jason-lucia-charakterwechsel/', text: 'So wechselst du zwischen Jason und Lucia' }],
  },
  {
    id: 'cal-hampton', name: 'Cal Hampton', kurz: 'Jasons Kumpel und Hacker', gruppe: 'keys', offiziell: true, ort: 'Leonida Keys', c: '#4dff9a',
    rolle: 'Cal ist Jasons bester Freund. Am liebsten sitzt er zu Hause, trinkt Bier und hört den Funk von Polizei und Küstenwache ab. Er arbeitet ebenfalls für Brian.',
  },
  {
    id: 'brian-heder', name: 'Brian Heder', kurz: 'Schmuggler und Jasons Vermieter', gruppe: 'keys', offiziell: true, ort: 'Leonida Keys', c: '#ffd166',
    rolle: 'Brian ist ein alter Drogenschmuggler aus den Keys, der seine Geschäfte über seine Bootswerft abwickelt. Jason wohnt in einem seiner Häuser und zahlt die Miete mit Aufträgen. Mit Brian beginnt deine erste Arbeit im Spiel.',
    links: [{ href: '/guides/gta-6-speichern-spielstand/', text: 'Ab Brians erstem Auftrag kannst du speichern' }],
  },
  {
    id: 'lori-heder', name: 'Lori Heder', kurz: 'Brians Frau', gruppe: 'keys', ort: 'Leonida Keys', c: '#ff9a4d',
    rolle: 'Lori ist Brians dritte Ehefrau und hilft in der Bootswerft mit. Du triffst sie, wenn du für Brian unterwegs bist.',
  },
  {
    id: 'boobie-ike', name: 'Boobie Ike', kurz: 'Geschäftsmann aus Vice City', gruppe: 'musik', offiziell: true, ort: 'Vice City', c: '#b07cff',
    rolle: 'Boobie ist eine feste Größe in Vice City. Ihm gehören Immobilien, ein Stripclub und ein Tonstudio. Er hat es von der Straße nach oben geschafft und lässt das jeden wissen.',
  },
  {
    id: 'drequan-priest', name: "Dre'Quan Priest", kurz: 'Plattenboss bei Only Raw Records', gruppe: 'musik', offiziell: true, ort: 'Vice City', c: '#ff4fa3',
    rolle: "Dre'Quan hat früher gedealt und setzt jetzt alles auf Musik. Mit seinem Label Only Raw Records will er groß rauskommen und hat dafür die Real Dimez unter Vertrag genommen.",
  },
  {
    id: 'real-dimez', name: 'Real Dimez', kurz: 'Rap-Duo: Bae-Luxe und Roxy', gruppe: 'musik', offiziell: true, ort: 'Vice City', c: '#3ee7f0',
    rolle: 'Bae-Luxe und Roxy sind seit der Highschool befreundet und rappen zusammen als Real Dimez. Nach einem frühen Hit mit DWNPLY stehen sie jetzt bei Only Raw Records unter Vertrag.',
  },
  {
    id: 'dwnply', name: 'DWNPLY', kurz: 'Rapper', gruppe: 'musik', ort: 'Vice City', c: '#ffd166',
    rolle: 'DWNPLY hatte mit den Real Dimez einen gemeinsamen Hit. Danach gingen beide Seiten getrennte Wege.',
  },
  {
    id: 'raul-bautista', name: 'Raul Bautista', kurz: 'Erfahrener Bankräuber', gruppe: 'leonida', offiziell: true, c: '#ff9a4d',
    rolle: 'Raul ist ein Profi für Banküberfälle, der für den großen Coup jedes Risiko eingeht. Für seine Jobs sucht er immer wieder neue Leute für seine Crew.',
  },
  {
    id: 'petra-navarro', name: 'Petra Navarro', kurz: 'Top-Managerin bei Megamundo', gruppe: 'megamundo', ort: 'Vice City', c: '#b07cff',
    rolle: 'Petra ist Chief Operating Officer bei Megamundo. Sie bewegt sich in den reichsten Kreisen von Vice City.',
  },
  {
    id: 'andres-de-leon', name: 'Andrés de León', kurz: 'Megamundo-Kontakt', gruppe: 'megamundo', ort: 'Vice City', c: '#3ee7f0',
    rolle: 'Andrés bewegt sich im Umfeld von Megamundo und ist eine der Türen in die Welt der Reichen von Vice City.',
  },
  {
    id: 'valentina', name: 'Valentina', kurz: 'Aus dem Megamundo-Umfeld', gruppe: 'megamundo', ort: 'Vice City', c: '#ff4fa3',
    rolle: 'Valentina gehört zum Umfeld von Megamundo und kennt Andrés.',
  },
  {
    id: 'stefanie-gates', name: 'Stefanie Gates', kurz: 'Lucias Bewährungshelferin', gruppe: 'leonida', c: '#4dff9a',
    rolle: 'Stefanie arbeitet als Sozialarbeiterin für das Leonida Department of Corrections und betreut Lucia. Sie entscheidet mit darüber, wie viel Freiheit Lucia bekommt.',
  },
  {
    id: 'mendez', name: 'Officer Méndez', kurz: 'Polizist in Vice City', gruppe: 'leonida', ort: 'Vice City', c: '#3ee7f0',
    rolle: 'Méndez ist Officer beim Vice City Police Department. Wenn du in der Stadt auffällst, kann er dir begegnen.',
    links: [{ href: '/guides/gta-6-polizei-abhaengen-fahndung/', text: 'So hängst du die Polizei ab' }],
  },
  {
    id: 'kenton', name: 'Kenton', kurz: 'Schatztauchen in den Keys', gruppe: 'helfer', ort: 'Leonida Keys', c: '#3ee7f0',
    rolle: 'Kenton schickt dich auf Tauchgänge zu Wracks vor den Keys. Das ist am Anfang die beste Geldquelle.',
    links: [{ href: '/guides/gta-6-schnell-geld-verdienen/', text: 'Schnell Geld verdienen mit Kenton' }],
  },
  {
    id: 'moses', name: 'Moses', kurz: 'Mechaniker in Port Gellhorn', gruppe: 'helfer', ort: 'Port Gellhorn', c: '#ff9a4d',
    rolle: 'Moses betreibt eine Werkstatt in Port Gellhorn. Bei ihm kannst du Autos verkaufen.',
    links: [{ href: '/guides/gta-6-schnell-geld-verdienen/', text: 'Autos an Moses verkaufen' }],
  },
];
