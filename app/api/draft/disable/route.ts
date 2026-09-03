import { draftMode } from 'next/headers';

export async function GET() {
  const draft = await draftMode();
  draft.disable();
  return Response.redirect(new URL('/', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
}
