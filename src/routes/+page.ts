
import { client } from '$lib/contentful';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const res = await client.getEntries({
    content_type: 'home',
    include: 2,
  });

  const home = res.items[0].fields;


  const resolveLinks = (refs: any[] = []) =>
    refs.map((ref: any) => {
      const match = res.includes?.Entry?.find((entry: any) => {
        return entry?.sys?.id === ref?.sys?.id;
      });
      return match?.fields || {};
    });

  return {
    home: {
      ...home,
      blocks: resolveLinks(home.block || []), 
      imageSlider: home.imageSlider || [],
    }
  };
};
