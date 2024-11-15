<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { schema } from '$lib/schema';
	import { zod } from 'sveltekit-superforms/adapters';
	import { dev } from '$app/environment';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	let { data } = $props();
	let isSubmitting = $state(false);

	const { form, errors, enhance, reset, constraints, message } = superForm(data.form, {
		validators: zod(schema),
		resetForm: true,
		dataType: 'json',
		taintedMessage: null,
		onResult: ({ result }) => {
			isSubmitting = false;
		},
		onError: ({ result }) => {
			isSubmitting = false;
			// Handle error
			console.error('Form submission error:', result);
		}
	});

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		try {
			isSubmitting = true;
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	}
</script>

<section
	class="relative flex w-full max-w-4xl flex-col items-center rounded-lg bg-slate-50 p-4 py-8 shadow-lg dark:shadow-red-500/50"
	aria-labelledby="contact-form-title"
>
	{#if !$message}
		<h1 id="contact-form-title" class="mb-6 text-2xl font-semibold text-gray-800">Get in touch</h1>

		<!-- {#if dev}
	  <SuperDebug data={$form} />
	{/if} -->

		<form method="POST" class="w-full space-y-6" onsubmit={handleSubmit} use:enhance novalidate>
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<!-- Name Fields -->
				<div class="grid grid-cols-1 gap-6">
					<div class="flex flex-col">
						<label for="name" class="mb-1 text-sm font-medium text-gray-700"> Name * </label>
						<input
							type="text"
							id="name"
							bind:value={$form.name}
							placeholder="Name"
							{...$constraints.name}
							class="rounded-md border border-gray-300 p-2
							focus:border-[#8864c8]/90
							focus:outline-none
							focus:ring-1
							focus:ring-[#8864c8]/90 {$errors.name ? 'border-red-500 dark:border-teal-400' : ''}"
						/>
						{#if $errors.name}
							<span class="mt-1 text-sm text-red-500 dark:invert">{$errors.name}</span>
						{/if}
					</div>
				</div>

				<!-- Contact Info -->
				<div class="flex flex-col">
					<label for="email" class="mb-1 text-sm font-medium text-gray-700"> Email * </label>
					<input
						type="email"
						id="email"
						bind:value={$form.email}
						placeholder="Email"
						{...$constraints.email}
						class="rounded-md border border-gray-300 p-2
						focus:border-[#8864c8]/90
						focus:outline-none
						focus:ring-1
						focus:ring-[#8864c8]/90 {$errors.email ? 'border-red-500 dark:border-teal-400' : ''}"
					/>
					{#if $errors.email}
						<span class="mt-1 text-sm text-red-500 dark:invert">{$errors.email}</span>
					{/if}
				</div>

				<div class="flex flex-col">
					<label for="phone" class="mb-1 text-sm font-medium text-gray-700"> Phone </label>
					<input
						type="tel"
						id="phone"
						bind:value={$form.phone}
						placeholder="Phone"
						{...$constraints.phone}
						class="rounded-md border border-gray-300 p-2
						focus:border-[#8864c8]/90
						focus:outline-none
						focus:ring-1
						focus:ring-[#8864c8]/90 {$errors.phone ? 'border-red-500 dark:border-teal-400' : ''}"
					/>
					{#if $errors.phone}
						<span class="mt-1 text-sm text-red-500 dark:invert">{$errors.phone}</span>
					{/if}
				</div>
			</div>

			<!-- Message -->
			<div class="flex flex-col">
				<label for="inquiry" class="mb-1 text-sm font-medium text-gray-700"> Message * </label>
				<textarea
					id="inquiry"
					bind:value={$form.inquiry}
					placeholder="Tell me about what kind of project you have in mind"
					{...$constraints.inquiry}
					rows="4"
					class="rounded-md border border-gray-300 p-2
					focus:border-[#8864c8]/90
					focus:outline-none
					focus:ring-1
					focus:ring-[#8864c8]/90 {$errors.inquiry ? 'border-red-500 dark:border-teal-400' : ''}"
				></textarea>
				{#if $errors.inquiry}
					<span class="mt-1 text-sm text-red-500 dark:invert">{$errors.inquiry}</span>
				{/if}
			</div>

			<!-- Submit Button -->
			<div class="flex items-center justify-center">
				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full max-w-sm rounded-md bg-gray-800 py-2 font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:bg-blue-400 dark:bg-[#FF6B6B]/90 dark:hover:opacity-100 dark:hover:saturate-150"
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
