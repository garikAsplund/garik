<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';


	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col bg-slate-100 text-gray-800 dark:invert">
	<Nav />
	<main class="flex w-full flex-col items-center">
		{@render children()}
	</main>
	<!-- <Footer /> -->
</div>
