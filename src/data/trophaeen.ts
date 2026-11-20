// Alle 55 Trophäen / Erfolge in GTA 6.
// Quellen: Insider Gaming, PC Gamer, Output Lag (18.–20.11.2026). Name, Stufe und Aufgabe stehen bei mindestens zwei Quellen gleich.
// versteckt = im Spiel geheim. Wir zeigen sie erst nach Antippen, damit niemand gespoilert wird.

export type Stufe = 'platin' | 'gold' | 'silber' | 'bronze';
export type Trophaee = { id: string; name: string; stufe: Stufe; text: string; versteckt?: boolean; story?: boolean };

export const STUFEN: Record<Stufe, { name: string; c: string }> = {
  platin: { name: 'Platin', c: '#b9e8ff' },
  gold: { name: 'Gold', c: '#ffd166' },
  silber: { name: 'Silber', c: '#d6d3e6' },
  bronze: { name: 'Bronze', c: '#ff9a4d' },
};

export const TROPHAEEN: Trophaee[] = [
  { id: 'platin', name: 'Vice Got a Price!', stufe: 'platin', text: 'Alle anderen Trophäen sammeln.' },
  { id: 'long-road', name: 'A Long Road', stufe: 'gold', text: '100 % Spielfortschritt erreichen.' },
  { id: 'stunts', name: 'Cunning Stunts', stufe: 'silber', text: '250 Stunts schaffen.' },
  { id: 'master-none', name: 'Master of None', stufe: 'bronze', text: 'Jede Art von Aktivität einmal ausprobieren.' },
  { id: 'shootist', name: 'The Shootist', stufe: 'silber', text: 'Bei allen Schießstand-Herausforderungen Gold holen.' },
  { id: 'top-fun', name: 'Top Fun', stufe: 'bronze', text: 'An jedem Ort ein Top-Fun-Drohnenrennen gewinnen.' },
  { id: 'cash-kudos', name: 'Earn Cash, Not Kudos', stufe: 'bronze', text: '20 verschiedene Rennen gewinnen.' },
  { id: 'tackle', name: 'Baited My Tackle', stufe: 'bronze', text: 'Cal in einer Angel-Herausforderung schlagen.' },
  { id: 'fiddler', name: 'Stick Fiddler', stufe: 'bronze', text: 'Ein Arcade-Spiel durchspielen.' },
  { id: 'strangers', name: 'Strangers & Freaks', stufe: 'silber', text: '8 Missionsreihen für Fremde abschließen.' },
  { id: 'pma', name: 'Positive Mental Attitude', stufe: 'bronze', text: 'An jedem Meditationsort in Leonida meditieren.' },
  { id: 'deck', name: 'Don’t Touch My Deck', stufe: 'silber', text: '3 Sammelkarten-Sets vervollständigen.' },
  { id: 'wainker', name: 'You WAiNKer!', stufe: 'silber', text: 'An 100 Orten WAiNK benutzen.' },
  { id: 'last-thing', name: 'One Last Thing', stufe: 'bronze', text: '50 Herausforderungen abschließen.' },
  { id: 'hot-together', name: 'Hot Together', stufe: 'bronze', text: 'Mit deinem Partner eine 4-Sterne-Fahndung abhängen.' },
  { id: 'retail', name: 'Retail Therapy', stufe: 'bronze', text: 'Mit deinem Partner 3 Läden hintereinander ausrauben, ohne die Fahndung zu verlieren.' },
  { id: 'whip', name: 'Whip It Good', stufe: 'bronze', text: '100 Fahrzeuge entdecken.' },
  { id: 'gunslinger', name: 'Gunslinger', stufe: 'bronze', text: '5 Gegner mit einem einzigen Kampf-Fokus ausschalten.' },
  { id: 'sneakthief', name: 'Sneakthief', stufe: 'bronze', text: 'Einen Juwelier ausrauben, ohne entdeckt zu werden.' },
  { id: 'withdrawal', name: 'Maximum Withdrawal', stufe: 'silber', text: '5 Banktresore ausrauben und entkommen.' },
  { id: 'blitz', name: 'A Classic Blitz Play', stufe: 'bronze', text: 'Einen Geldtransporter ausrauben und entkommen.' },
  { id: 'goodtime', name: 'The Goodtime State', stufe: 'bronze', text: 'Ganz Leonida erkunden.' },
  { id: 'pest', name: 'Pest Control', stufe: 'bronze', text: 'Bei jeder Gang ein illegales Geschäft ausrauben.' },
  { id: 'dime', name: 'Dime on the Dollar', stufe: 'bronze', text: '250.000 $ aus markierten Scheinen waschen.' },
  { id: 'treat', name: 'Treat Yo Self', stufe: 'bronze', text: 'Insgesamt 100.000 $ in Läden ausgeben.' },
  { id: 'boxes', name: 'Little Boxes', stufe: 'bronze', text: 'Alle Garagen kaufen.' },
  { id: 'spot', name: 'On the Spot', stufe: 'bronze', text: '10 Fahrzeuge in der Scooter-Bros-App registrieren.' },
  // Versteckt: Story
  { id: 'paradise', name: 'Just Like Paradise', stufe: 'bronze', text: 'Story-Mission „Gone Fishing“ abschließen.', versteckt: true, story: true },
  { id: 'k1', name: 'Paradise Lost', stufe: 'bronze', text: 'Kapitel 1 abschließen.', versteckt: true, story: true },
  { id: 'k2', name: 'T**s Ass Drug Money', stufe: 'bronze', text: 'Kapitel 2 abschließen.', versteckt: true, story: true },
  { id: 'k3', name: 'Vice City, Baby!', stufe: 'bronze', text: 'Kapitel 3 abschließen.', versteckt: true, story: true },
  { id: 'k4', name: 'Top Of The World, Ma', stufe: 'bronze', text: 'Kapitel 4 abschließen.', versteckt: true, story: true },
  { id: 'ende', name: 'You Gotta Know When to Get Off', stufe: 'gold', text: 'Die Story abschließen.', versteckt: true, story: true },
  { id: 'trust', name: 'Trust', stufe: 'bronze', text: 'Story-Mission „Breakfast Run“ abschließen.', versteckt: true, story: true },
  { id: 'bank', name: 'Break the Bank', stufe: 'bronze', text: 'Story-Mission „The Cartel Heist“ abschließen.', versteckt: true, story: true },
  { id: 'family', name: 'Family Matters', stufe: 'bronze', text: 'Story-Mission „Child’s Play“ abschließen.', versteckt: true, story: true },
  { id: 'dwnfall', name: 'DWNFALL', stufe: 'bronze', text: 'Story-Mission „Headliners“ abschließen.', versteckt: true, story: true },
  { id: 'hijacked', name: 'Hi-Jacked', stufe: 'bronze', text: 'Story-Mission „VCIA Takedown“ abschließen.', versteckt: true, story: true },
  { id: 'snow', name: 'Snow Storm', stufe: 'bronze', text: 'Story-Mission „Operation Savage Glory“ abschließen.', versteckt: true, story: true },
  // Versteckt: Nebenfiguren
  { id: 'andy', name: 'Road to Rehabilitation', stufe: 'bronze', text: 'Die letzte Mission für Andy abschließen.', versteckt: true, story: true },
  { id: 'kenton', name: 'This Was No Boat Accident', stufe: 'bronze', text: 'Die letzte Mission für Kenton abschließen.', versteckt: true, story: true },
  { id: 'billy', name: 'The Lone Rider', stufe: 'bronze', text: 'Die letzte Mission für Billy abschließen.', versteckt: true, story: true },
  { id: 'randy', name: 'Supply & Demand', stufe: 'bronze', text: 'Die letzte Mission für Randy abschließen.', versteckt: true, story: true },
  { id: 'tyrone', name: 'Spin On This!', stufe: 'bronze', text: 'Die letzte Mission für Tyrone abschließen.', versteckt: true, story: true },
  { id: 'bret', name: 'Fair Game', stufe: 'bronze', text: 'Für Bret ein besonderes Tier jagen.', versteckt: true, story: true },
  // Versteckt: sonstige
  { id: 'vcia', name: 'Catch Me If You Can', stufe: 'bronze', text: 'Am Flughafen VCIA „außerplanmäßig abfliegen“.', versteckt: true },
  { id: 'tank', name: 'Challenging Tank', stufe: 'bronze', text: 'Hinweis im Spiel: „Kinda hot in these Rhinos.“', versteckt: true },
  { id: 'bowling', name: 'Let’s Go Bowling', stufe: 'bronze', text: 'In der Bowlingbahn von Kolt & Associates „durchziehen“.', versteckt: true },
  { id: 'best', name: 'Personal Best', stufe: 'bronze', text: 'Hinweis im Spiel: „A partnership with mass appeal.“', versteckt: true },
  { id: 'actions', name: 'Actions Speak Louder', stufe: 'bronze', text: 'Hinweis im Spiel: „Choices made (for better or worse).“', versteckt: true },
  { id: 'beginning', name: 'In The Beginning…', stufe: 'bronze', text: 'Am Ocean Beach einen Cocktail mit Aussicht genießen.', versteckt: true },
  { id: 'capital', name: 'Capital Offense', stufe: 'bronze', text: 'Mit einem Fahrzeug aus einem Autohaus-Schaufenster brechen.', versteckt: true },
  { id: 'badluck', name: 'Bad Luck, I Guess', stufe: 'bronze', text: 'Hinweis im Spiel: „Second time’s the charm.“', versteckt: true },
  { id: 'truth', name: 'The Truth Is Out There', stufe: 'bronze', text: 'Hinweis im Spiel: „What the hell just happened?“', versteckt: true },
  { id: 'tenpin', name: 'Ten Pin', stufe: 'bronze', text: 'Mit einem Nahkampf-Drive-by Leute umwerfen.', versteckt: true },
];
