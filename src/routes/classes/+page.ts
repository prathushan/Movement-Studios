import { client } from '$lib/contentful';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const res = await client.getEntries({
    content_type: 'classes', // ✅ Replace with your actual content type ID
    limit: 1,
  });

  const classes = res.items[0]?.fields;

  console.log('📚 Classes Page Data:', classes);

  return {
    classes
  };
};
