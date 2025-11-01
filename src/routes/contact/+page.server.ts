import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { schema } from '$lib/schema';
import { fail } from '@sveltejs/kit';
import { EMAILABLE_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod(schema));
  return { form };
};

export const actions = {
  default: async ({ request, fetch }) => {
    const form = await superValidate(request, zod(schema));

    if (form.data.company?.trim()) {
      return fail(400, { form, message: 'Bot detected 🤖' });
    }

    if (!form.valid) {
      return fail(400, { form });
    }

    // === Emailable verification ===
    const verifyRes = await fetch(
      `https://api.emailable.com/v1/verify?email=${encodeURIComponent(
        form.data.email
      )}&api_key=${EMAILABLE_API_KEY}`
    );

    const verifyData = await verifyRes.json();

    if (verifyData.state !== 'deliverable') {
      return fail(400, {
        form,
        message: 'Please provide a valid, deliverable email.'
      });
    }
    // === End verification ===

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      return message(
        form,
        `<strong>Thanks for your interest!</strong> <br /> <br /> I'll reply to you as soon as possible.`
      );
    } else {
      const errorData = await response.json();
      return message(form, `Error sending email: ${errorData.error}`);
    }
  }
};