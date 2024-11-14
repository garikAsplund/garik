<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<div class="inset-0 absolute bg-black/5 -z-10"></div>
	<Nav />

	{@render children()}

	<Footer />
</div>
