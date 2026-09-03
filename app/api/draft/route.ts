import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

const ALLOWED_SLUGS = new Set(['/', '/privacy', '/terms']);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug') || '/';

  if (!process.env.DRAFT_SECRET || secret !== process.env.DRAFT_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  if (!ALLOWED_SLUGS.has(slug)) {
    return new Response('Invalid slug', { status: 400 });
  }

  const draft = await draftMode();
  draft.enable();
  redirect(slug);
}
