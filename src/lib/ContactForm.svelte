<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { schema } from '$lib/schema';
	import { zod } from 'sveltekit-superforms/adapters';
	import { dev } from '$app/environment';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import FormInput from './FormInput.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_CF_SITE_KEY } from '$env/static/public';
	// import { Turnstile } from 'svelte-turnstile';
	import { turnstile } from '@svelte-put/cloudflare-turnstile';

	// onMount(() => {
	// 	const script = document.createElement('script');
	// 	script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
	// 	script.async = true;
	// 	document.head.appendChild(script);
	// });

	let { data } = $props();
	let isSubmitting = $state(false);
	let reset = $state<() => void>();
	let token = $state('');
	$inspect(token);

	const { form, errors, enhance, constraints, message, validateForm } = superForm(data.form, {
		validators: zod(schema),
		dataType: 'json',
		taintedMessage: null,
		onSubmit: () => {
			isSubmitting = true;
		},
		onResult: ({ result }) => {
			isSubmitting = false;
		},
		onError: ({ result }) => {
			isSubmitting = false;
			console.error('Form submission error:', result);
		},
		onUpdated() {
			// When the form is updated, we reset the turnstile
			reset?.();
		}
	});
</script>

<section
	class="relative flex w-full max-w-xl flex-col items-center rounded-lg bg-slate-50 p-4 py-8 shadow-lg dark:shadow-red-500/50"
	aria-labelledby="contact-form-title"
>
	{#if !$message}
		<h3 id="contact-form-title" class="mb-6 text-2xl font-semibold text-gray-800">Get in touch</h3>

		<!-- {#if dev}
	  <SuperDebug data={$form} />
	{/if} -->

		<form method="POST" class="w-full space-y-6" use:enhance novalidate>
			<div class="grid grid-cols-1 gap-6">
				<input type="text" name="company" bind:value={$form.company} style="display: none" />

				<FormInput
					label="Name"
					id="name"
					type="text"
					bind:value={$form.name}
					error={$errors.name}
					constraints={$constraints.name}
					autocomplete="name"
				/>

				<FormInput
					label="Email"
					id="email"
					type="email"
					bind:value={$form.email}
					error={$errors.email}
					constraints={$constraints.email}
					autocomplete="email"
				/>

				<!-- <Turnstile
					siteKey={PUBLIC_CF_SITE_KEY}
					size="normal"
					theme="auto"
					on:callback={(e) => ($form['cf-turnstile-response'] = e.detail)}
					bind:reset
				/> -->
				<!-- <input type="hidden" name="cf-turnstile-response" value={$form['cf-turnstile-response']} /> -->
				<div
					use:turnstile
					turnstile-sitekey={PUBLIC_CF_SITE_KEY}
					turnstile-theme="auto"
					turnstile-response-field-name="cf-turnstile-response"
					turnstile-response-field
					onturnstile={(e) => ($form['cf-turnstile-response'] = e.detail.token)}
				></div>
			</div>

			<!-- Textarea component -->
			<div class="flex flex-col space-y-1">
				<label for="inquiry" class=" text-sm font-medium text-gray-700"> Message </label>
				<div class="" id="inquiry-error" role={$errors.inquiry ? 'alert' : undefined}>
					{#if $errors.inquiry}
						<span class="field-error my-1 flex items-center gap-1 text-sm text-red-600 dark:invert">
							<svg
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
							{$errors.inquiry}
						</span>
					{/if}
				</div>
				<div class="relative">
					<textarea
						id="inquiry"
						bind:value={$form.inquiry}
						{...$constraints.inquiry}
						rows="4"
						class="w-full rounded-md border p-2
				{$errors.inquiry ? 'border-red-500 dark:border-red-400' : 'border-gray-300'}
				focus:border-[#8864c8]/90
				focus:outline-none
				focus:ring-1
				focus:ring-[#8864c8]/90"
						aria-invalid={!!$errors.inquiry}
						aria-describedby={$errors.inquiry ? 'inquiry-error' : undefined}
					></textarea>
				</div>
			</div>

			<!-- Submit Button -->
			<div class="flex items-center justify-center">
				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full max-w-sm rounded-md bg-gray-800 py-2 font-semibold text-white transition-[opacity,filter] duration-300 hover:opacity-90 disabled:cursor-not-allowed dark:bg-[#FF6B6B]/90 dark:text-black dark:hover:opacity-100 dark:hover:saturate-150"
					aria-disabled={isSubmitting}
				>
					{#if isSubmitting}
						<span class="inline-flex min-w-[90px] justify-center">
							Sending<span class="dots"></span>
						</span>
					{:else}
						Reach Out
					{/if}
				</button>
			</div>
		</form>{/if}

	{#if $message}
		<div class="flex items-center justify-center">
			<p class="text-center text-lg">{@html $message}</p>
		</div>
	{/if}
</section>

<style>
	.dots {
		font-family: monospace;
		display: inline-block;
		min-width: 3ch;
		text-align: left;
		position: relative;
		line-height: normal;
		vertical-align: baseline;
	}

	.dots::after {
		content: '';
		animation: dots 1.5s steps(4, jump-none) infinite;
		position: absolute;
		left: 0;
		height: 100%;
		display: flex;
		align-items: center;
	}

	@keyframes dots {
		0%,
		100% {
			content: '\00a0\00a0\00a0';
		}
		25% {
			content: '.\00a0\00a0';
		}
		50% {
			content: '..\00a0';
		}
		75% {
			content: '...';
		}
	}
</style>
