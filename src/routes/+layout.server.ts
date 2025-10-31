import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { schema } from '$lib/schema';
import { CF_SITE_KEY } from '$env/static/private';

export async function load() {
  const form = await superValidate(zod(schema));
  return {
    form,
    turnstileSiteKey: CF_SITE_KEY
  };
}