// Amazon-Links direkt im Artikeltext: [Text](amazon:Suchbegriff+mit+Pluszeichen)
// wird zu einem Amazon-Suchlink mit unserer Tracking-ID, rel="sponsored" und Sternchen (*).
// Ein Absatz, der nur aus Amazon-Links besteht, wird zu einer Reihe Kauf-Buttons mit "Anzeige".
import { AFFILIATE } from '../site.config';

const LINK = /<a href="amazon:([^"]*)">([\s\S]*?)<\/a>/g;

export function amazonize(html: string): string {
  const out = html.replace(LINK, (_, q: string, text: string) => {
    const query = decodeURIComponent(q.replace(/&amp;/g, '&')).replace(/\+/g, ' ');
    const tag = AFFILIATE.amazonTag ? `&amp;tag=${AFFILIATE.amazonTag}` : '';
    return `<a class="az-link" href="https://www.amazon.de/s?k=${encodeURIComponent(query)}${tag}" rel="sponsored nofollow noopener" target="_blank">${text}*</a>`;
  });
  return out.replace(/<p>((?:\s*<a class="az-link"[^>]*>[^<]*<\/a>\s*)+)<\/p>/g,
    (_, links: string) => `<p class="az-row"><span class="ad-label">Anzeige</span>${links}</p>`);
}
