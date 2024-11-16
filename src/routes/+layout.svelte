<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<svelte:head>
	<title>GAR1K.C0DES {$page.url.pathname === '/' ? '' : '| '} {($page.url.pathname.replace('/', '').charAt(0).toUpperCase()) + $page.url.pathname.slice(2).split('/')[0]}</title>
</svelte:head>

<div class="flex min-h-screen w-full flex-col bg-slate-100 dark:invert">
	<Nav />
	<main class=" flex flex-col items-center">
		{@render children()}
	</main>
	<Footer />
</div>
