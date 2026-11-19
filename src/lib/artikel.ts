import { getCollection, type CollectionEntry } from 'astro:content';

export type Artikel = CollectionEntry<'artikel'>;

export async function allArtikel(): Promise<Artikel[]> {
  const items = await getCollection('artikel', ({ data }) => import.meta.env.DEV || !data.draft);
  return items.sort(
    (a, b) => (b.data.updatedDate ?? b.data.publishDate).valueOf() - (a.data.updatedDate ?? a.data.publishDate).valueOf()
  );
}

export const artikelUrl = (a: Artikel) => `/${a.data.category}/${a.id}/`;
