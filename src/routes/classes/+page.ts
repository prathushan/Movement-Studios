import { client } from '$lib/contentful';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const res = await client.getEntries({
    content_type: 'classes', 
    limit: 1,
  });
  const classes = res.items[0]?.fields;
  return {
    classes
  };
};
