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
	<title
		>GAR1K.C0DES {$page.url.pathname === '/' ? '' : '| '}
		{$page.url.pathname.replace('/', '').charAt(0).toUpperCase() +
			$page.url.pathname.slice(2).split('/')[0]}</title
	>

	<title>GAR1K.C0DES</title>
	<meta name="description" content="Independent software engineer for hire." />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://garik.codes" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Garik Asplund | Software Engineer" />
	<meta property="og:description" content="Need a fresh website? I've got you :)" />
	<meta
		property="og:image"
		content="https://media.licdn.com/dms/image/v2/D5616AQFDLZGPXiZ-QA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1687973966708?e=1736985600&v=beta&t=IOnuEVPLdtSOSenBSgW6z9ZkbtBcj5Bbj3k9xDz3DJY"
	/>

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://garik.codes" />
	<meta name="twitter:title" content="Garik Asplund | Software Engineer" />
	<meta name="twitter:description" content="Need a fresh website? I've got you :)" />
	<meta
		name="twitter:image"
		content="https://media.licdn.com/dms/image/v2/D5616AQFDLZGPXiZ-QA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1687973966708?e=1736985600&v=beta&t=IOnuEVPLdtSOSenBSgW6z9ZkbtBcj5Bbj3k9xDz3DJY"
	/>
</svelte:head>

<div class="flex min-h-screen w-full flex-col bg-slate-100 text-gray-800 dark:invert">
	<Nav />
	<main class=" flex flex-col items-center">
		{@render children()}
	</main>
	<Footer />
</div>
