// Geometrie der selbst gezeichneten Leonida-Karte (schematisch, nicht maßstabsgetreu).

export type Pt = [number, number];

// Geschlossene, weiche Kurve durch Punkte (Catmull-Rom -> Bezier)
export function smoothClosed(pts: Pt[], t = 0.5): string {
  const n = pts.length;
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1: Pt = [p1[0] + ((p2[0] - p0[0]) / 6) * t * 2, p1[1] + ((p2[1] - p0[1]) / 6) * t * 2];
    const c2: Pt = [p2[0] - ((p3[0] - p1[0]) / 6) * t * 2, p2[1] - ((p3[1] - p1[1]) / 6) * t * 2];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`;
  }
  return d + 'Z';
}
export const poly = (pts: Pt[]) => 'M' + pts.map((p) => p.join(',')).join(' L') + 'Z';

// Küstenlinie des Festlands (im Uhrzeigersinn, Start im Nordwesten)
export const coast: Pt[] = [
  [36, 196], [60, 160], [150, 148], [300, 138], [450, 136], [580, 142], [660, 155], [705, 182], [714, 240],
  [728, 300], [748, 370], [768, 432], [790, 466], [786, 500], [806, 545], [828, 612], [848, 690], [852, 760],
  [834, 815], [796, 848], [745, 860], [700, 852], [666, 826], [640, 786], [616, 726], [596, 652], [572, 596],
  [552, 540], [528, 482], [510, 438], [496, 394], [476, 350], [446, 312], [408, 288], [355, 272], [290, 262],
  [220, 268], [150, 262], [90, 254], [50, 236],
];
// Küste fein unterteilen und leicht zerklüften (fester Seed, damit die Karte immer gleich aussieht)
export function roughen(pts: Pt[], levels: number, amp: number, seed = 7): Pt[] {
  let rnd = seed;
  const rand = () => ((rnd = (rnd * 16807) % 2147483647) / 2147483647) * 2 - 1;
  let out = pts;
  for (let l = 0; l < levels; l++) {
    const next: Pt[] = [];
    for (let i = 0; i < out.length; i++) {
      const a = out[i], b = out[(i + 1) % out.length];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const nx = -(b[1] - a[1]) / (len || 1), ny = (b[0] - a[0]) / (len || 1);
      const off = rand() * amp * Math.min(1, len / 40);
      next.push(a, [+((a[0] + b[0]) / 2 + nx * off).toFixed(1), +((a[1] + b[1]) / 2 + ny * off).toFixed(1)]);
    }
    out = next;
    amp *= 0.55;
  }
  return out;
}
export const COAST = smoothClosed(roughen(coast, 3, 9));

// Regionen als Flächen, die übers Meer hinausgehen. Das Festland schneidet sie zu.
export const R = {
  gell: poly([[0, 0], [370, 0], [372, 120], [385, 200], [368, 262], [355, 340], [0, 340]]),
  kal: poly([[370, 0], [1000, 0], [1000, 295], [800, 295], [725, 300], [660, 318], [600, 330], [520, 338], [450, 350], [355, 340], [368, 262], [385, 200], [372, 120]]),
  amb: poly([[355, 340], [450, 350], [520, 338], [600, 330], [660, 318], [725, 300], [800, 295], [1000, 295], [1000, 420], [800, 420], [740, 446], [700, 470], [640, 520], [600, 545], [560, 560], [480, 590]]),
  vice: poly([[700, 470], [740, 446], [800, 420], [1000, 420], [1000, 1000], [820, 1000], [800, 862], [780, 790], [752, 720], [728, 660], [712, 600], [706, 540]]),
  grass: poly([[480, 590], [560, 560], [600, 545], [640, 520], [700, 470], [706, 540], [712, 600], [728, 660], [752, 720], [780, 790], [800, 862], [820, 1000], [300, 1000], [300, 590]]),
};

// Inselkette der Keys
export const keys: { cx: number; cy: number; rx: number; ry: number; rot: number }[] = [
  { cx: 812, cy: 884, rx: 16, ry: 7, rot: -18 },
  { cx: 780, cy: 899, rx: 22, ry: 8, rot: -14 },
  { cx: 742, cy: 911, rx: 18, ry: 7, rot: -10 },
  { cx: 706, cy: 921, rx: 26, ry: 9, rot: -8 },
  { cx: 664, cy: 929, rx: 16, ry: 6, rot: -6 },
  { cx: 630, cy: 934, rx: 20, ry: 7, rot: -4 },
  { cx: 592, cy: 938, rx: 14, ry: 6, rot: -2 },
  { cx: 560, cy: 941, rx: 10, ry: 5, rot: 0 },
];

