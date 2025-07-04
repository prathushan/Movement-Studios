// src/routes/contact/api/+server.ts
import dotenv from 'dotenv';
dotenv.config();

import type { RequestHandler } from '@sveltejs/kit';
import contentfulManagement from 'contentful-management';
const { createClient } = contentfulManagement;


export const POST: RequestHandler = async ({ request }) => {
  const { name, email, company, phone, message } = await request.json();
  const sanitizedPhone = phone?.toString?.() ?? '';

  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const token = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

  if (!spaceId || !token) {
    console.error('❌ Missing Contentful environment variables');
    return new Response('Missing Contentful environment variables', { status: 500 });
  }

  try {
    const client = createClient({ accessToken: token });

    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment('master');

    const entry = await environment.createEntry('contactSubmission', {
      fields: {
        name: { 'en-US': name },
        email: { 'en-US': email },
        company: { 'en-US': company },
        phone: { 'en-US': sanitizedPhone },
        message: { 'en-US': message }
      }
    });

    await entry.publish();

    return new Response(JSON.stringify({ success: true, id: entry.sys.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('❌ Contentful POST error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
