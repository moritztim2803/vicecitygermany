// Die interaktiven Tools der Seite. Werden auf Startseite, Tools-Seite und in den Rubriken gezeigt.

export type Tool = {
  id: string;
  name: string;
  claim: string;
  href: string;
  c: string;
  tag: string;
  icon: string;
};

export const TOOLS: Tool[] = [
  { id: 'quiz', name: 'Welche Region bist du?', claim: '7 Fragen, 1 Minute. Finde heraus, wo in Leonida du hingehörst, und teil dein Ergebnis.',
    href: '/karte/gta-6-quiz-welche-region/', c: '#ff4fa3', tag: 'Test',
    icon: 'M9 9a3 3 0 1 1 4.5 2.6c-.9.5-1.5 1.2-1.5 2.4v.5M12 18.5v.5' },
  { id: 'karte', name: 'Interaktive Karte', claim: '6 Regionen und 40 Orte. Tipp einen Ort an und sieh, was dich dort erwartet.',
    href: '/karte/gta-6-karte-regionen/', c: '#3ee7f0', tag: 'Karte',
    icon: 'M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14' },
  { id: 'album', name: 'Sammelalbum', claim: 'Alle 480 Karten in 18 Sets. Tipp an, was du hast, und sieh, was bis zur Trophäe fehlt.',
    href: '/guides/gta-6-sammelkarten-tracker/', c: '#b07cff', tag: 'Tracker',
    icon: 'M4 5h10v15H4zM14 7l5 1.5-3.5 12-1.5-.4M7 9h4M7 12h4' },
  { id: 'heat', name: 'Erkennt mich die Polizei?', claim: 'Tipp an, was die Polizei über dich weiß, und schüttel die Fahndung Schritt für Schritt ab.',
    href: '/guides/gta-6-polizei-abhaengen-fahndung/', c: '#ffd166', tag: 'Check',
    icon: 'M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21.1l1.5-7L2 9.3l7-.8z' },
  { id: 'fahrzeuge', name: 'Fahrzeug-Ranking', claim: 'Welches Auto wofür? Die besten Fahrzeuge für Flucht, Rennen, Gelände und Wasser.',
    href: '/fahrzeuge/', c: '#ff9a4d', tag: 'Ranking',
    icon: 'M3 15l2-5h14l2 5v4H3zM7 19v2M17 19v2M6 15h3M15 15h3' },
  { id: 'checklisten', name: 'Deine Checklisten', claim: 'Easter Eggs, Orte und erste Schritte zum Abhaken, mit deinem Gesamtfortschritt.',
    href: '/checklisten/', c: '#4dff9a', tag: 'Fortschritt',
    icon: 'M4 6l2 2 3-3M4 12l2 2 3-3M4 18l2 2 3-3M12 7h8M12 13h8M12 19h8' },
];
