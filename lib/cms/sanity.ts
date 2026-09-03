import { createClient } from 'next-sanity';
import { defineLive } from 'next-sanity/live';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missing-project';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET,
);

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2026-09-03',
  useCdn: true,
  perspective: 'published',
  stega: {
    studioUrl:
      process.env.SANITY_STUDIO_URL || 'http://localhost:3000/studio',
  },
});

export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient,
  serverToken: process.env.SANITY_API_READ_TOKEN || false,
  browserToken: process.env.SANITY_API_READ_TOKEN || false,
});
