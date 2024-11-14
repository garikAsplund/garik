<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="container flex flex-col h-full w-full items-center">
	<Nav />

	{@render children()}

	<Footer />
</div>
