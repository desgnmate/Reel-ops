import { revalidatePath, revalidateTag } from 'next/cache';
import type { NextRequest } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(request: NextRequest) {
  if (!process.env.SANITY_REVALIDATE_SECRET) {
    return Response.json({ message: 'Revalidation secret is not configured' }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<{ _type?: string }>(
    request,
    process.env.SANITY_REVALIDATE_SECRET,
  );

  if (!isValidSignature) {
    return Response.json({ message: 'Invalid signature' }, { status: 401 });
  }

  revalidateTag('site', { expire: 0 });
  revalidatePath('/', 'page');

  return Response.json({ revalidated: true, type: body?._type || null, now: Date.now() });
}
