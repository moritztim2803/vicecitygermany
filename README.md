# Palmenpixel – deutsche GTA-6-Guide-Seite (Astro)

Statische, schnelle, SEO-freundliche Seite. Artikel sind einfache Markdown-Dateien.
Name und Domain stehen in `src/site.config.ts`.

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # fertige Seite landet in dist/
```

## Neuen Artikel schreiben

Neue Datei in `src/content/artikel/`, Dateiname = URL, z. B. `gta-6-geld-verdienen.md`:

```markdown
---
title: "GTA 6 Geld verdienen: Die 7 besten Methoden"   # max. 70 Zeichen
description: "Kurzbeschreibung für Google, max. 160 Zeichen."
category: guides          # news | guides | tipps | karte | technik
publishDate: 2026-11-20
updatedDate: 2026-11-22   # optional, wird als "Aktualisiert am" angezeigt
faq:                      # optional, erzeugt FAQ-Snippets bei Google
  - q: "Frage?"
    a: "Antwort."
draft: false
---

**Kurz gesagt:** Die Antwort in 1–2 Sätzen ganz oben.

## Zwischenüberschrift
...
```

Die URL wird dann `/guides/gta-6-geld-verdienen/`. Sitemap, Inhaltsverzeichnis, Meta-Tags,
Schema.org (Article, Breadcrumb, FAQ) und Werbeplätze kommen automatisch dazu.

## Online stellen (kostenlos)

1. Code in ein GitHub-Repository legen.
2. In Cloudflare unter **Workers & Pages** ein neues Projekt aus dem GitHub-Repo anlegen.
   Projektname `palmenpixel` (muss zum `name` in `wrangler.jsonc` passen), Build-Befehl `npm run build`,
   Deploy-Befehl `npx wrangler deploy`. Die Einstellungen stehen in `wrangler.jsonc`.
3. Eigene Domain verbinden (ca. 10 €/Jahr). **Tipp:** Kein „gta“ oder „rockstar“ im Domainnamen, das sind Marken von Take-Two.
4. Domain in `src/site.config.ts` (`url`) und `public/robots.txt` eintragen.
5. Seite in der **Google Search Console** anmelden und `sitemap-index.xml` einreichen.

## Geld verdienen

### Werbung (Google AdSense)
1. Erst ca. 15–25 gute Artikel veröffentlichen, sonst lehnt AdSense oft ab („geringwertiger Inhalt“).
2. Impressum und Datenschutz vollständig ausfüllen (Pflicht!).
3. Bei AdSense anmelden, Publisher-ID in `src/site.config.ts` → `ADS.adsenseClient` eintragen.
4. Die Zeile aus dem AdSense-Konto in `public/ads.txt` eintragen.
5. **Wichtig:** Für Besucher aus der EU verlangt Google eine **Google-zertifizierte Consent-Plattform (CMP)**.
   Am einfachsten: In AdSense unter „Datenschutz & Mitteilungen“ die kostenlose Google-CMP aktivieren.
   Dann das eigene Banner (`src/components/CookieBanner.astro`) auf das reine Nachladen von AdSense
   reduzieren oder entfernen. Das mitgelieferte Banner ist nur für die Zeit vor AdSense gedacht.

Werbeplätze: `header`, `in-article`, `sidebar`, `footer` (siehe `src/components/AdSlot.astro`).
Ohne Publisher-ID zeigen sie gestrichelte Platzhalter.

Später, ab ca. 10.000 Sitzungen/Monat: **Ezoic**, ab ca. 50.000: **Raptive/Mediavine** zahlen deutlich mehr pro 1.000 Besucher.

### Amazon-Affiliate
1. Beim Amazon PartnerNet anmelden, Tracking-ID in `AFFILIATE.amazonTag` eintragen.
2. Komponente `src/components/AffiliateBox.astro` in Seiten nutzen (für Markdown-Artikel: `@astrojs/mdx`
   installieren und Artikel als `.mdx` schreiben).
3. Affiliate-Links sind als Werbung gekennzeichnet (Pflicht in Deutschland). Passende Produkte:
   PS5-SSD, Xbox-Speicherkarte, Controller, Headsets, PSN/Xbox-Guthaben, Lösungsbuch.

## Rechtliches (kurz)

- Impressum (§ 5 DDG) und Datenschutzerklärung sind **Platzhalter** und müssen vor dem Livegang ausgefüllt werden
  (Generator z. B. datenschutz-generator.de oder e-recht24.de).
- Rockstars Fan-Richtlinie erlaubt Material nur für **nicht-kommerzielle** Nutzung. Werbeseiten mit
  eigenen Texten sind in der Branche üblich und werden praktisch toleriert, aber nicht ausdrücklich erlaubt.
  Deshalb: eigene Texte und eigene Screenshots, keine Rockstar-Logos, keine offiziellen Artworks,
  keine Leaks, keine Glitch-/Exploit-/Mod-Menü-Anleitungen, Spoiler immer markieren.
