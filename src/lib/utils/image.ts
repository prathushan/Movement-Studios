// src/lib/utils/image.ts
export function contentfulImage(
  url: string,
  width = 800,
  format: 'webp' | 'jpg' = 'webp'
): string {
  return `https:${url}?w=${width}&fm=${format}`;
}
