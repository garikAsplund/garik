<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col bg-slate-100 dark:invert text-gray-800">
	<Nav />
	<main class=" flex flex-col items-center">
		{@render children()}
	</main>
	<Footer />
</div>
