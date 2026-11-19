import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artikel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artikel' }),
  schema: z.object({
    title: z.string().max(70, 'SEO-Titel max. 70 Zeichen'),
    description: z.string().max(160, 'Meta-Description max. 160 Zeichen'),
    category: z.enum(['news', 'guides', 'easter-eggs', 'karte', 'technik']),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    keywords: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { artikel };
