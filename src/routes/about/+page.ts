// src/routes/about/+page.ts
import { client } from '$lib/contentful'; // or wherever your contentful client is
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const res = await client.getEntries({
    content_type: 'about',
    limit: 1,
  });

  const about = res.items[0]?.fields;

  console.log('🧩 About Fields:', about); // Add this to confirm data is fetched

  return {
    about
  };
};


