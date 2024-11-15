import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { schema } from '$lib/schema';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await superValidate(request, zod(schema));
		console.log(form);

		if (!form.valid) {
			return fail(400, { form });
		} else {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form)
			});

			if (response.ok) {
				console.log("Success!!");
				return message(form, `<strong>Thanks for your interest!</strong> <br /> <br /> I'll reply to you as soon as possible.`);
			} else {
				const errorData = await response.json();
				return message(form, `Error sending email: ${errorData.error}`);
			}
		}
	}
};
