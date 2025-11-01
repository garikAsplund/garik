import { superValidate, message, setError, fail } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { schema } from '$lib/schema';
// import { fail } from '@sveltejs/kit';
import { EMAILABLE_API_KEY, CF_SECRET_KEY } from '$env/static/private';

interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

async function validateToken(token: string, secret: string) {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			response: token,
			secret
		})
	});

	const data: TokenValidateResponse = await response.json();
	if (import.meta.env.DEV) console.log('Turnstile:', data);

	return {
		success: data.success,
		error: data['error-codes']?.length ? data['error-codes'][0] : null
	};
}

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(schema));
	return { form };
};

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await superValidate(request, zod(schema));

		// --- Honeypot ---
		if (form.data.company?.trim()) {
			return fail(400, { form, message: 'Bot detected 🤖' });
		}
		const token = form.data['cf-turnstile-response'];
		console.log({ token });
		if (!token) {
			return setError(form, 'cf-turnstile-response', 'Missing Turnstile token.');
		}

		const { success } = await validateToken(token, CF_SECRET_KEY);

		if (!success) {
			return setError(form, 'cf-turnstile-response', 'Invalid turnstile, please try again');
		}

		// --- Emailable verification ---
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

		// --- Send email ---
		const response = await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
		});

		if (response.ok) {
			return message(
				form,
				`<strong>Thanks for your interest!</strong><br /><br />I'll reply as soon as possible.`
			);
		} else {
			const errorData = await response.json();
			return message(form, `Error sending email: ${errorData.error}`);
		}
	}
};
