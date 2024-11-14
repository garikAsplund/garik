<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	// import { onMount } from 'svelte';

	let { children } = $props();

	// let navBarHeight: number = $state(0);
	// let footerHeight: number = $state(0);

	// onMount(() => {
	// 	let navBarElement: HTMLDivElement = document.getElementById('nav');
	// 	let footerElement: HTMLDivElement = document.getElementById('footer');

	// 	function calculateNavBarHeight() {
	// 		if (navBarElement) {
	// 			navBarHeight = navBarElement.offsetHeight;
	// 			// console.log(`NavBar height: ${navBarHeight}px`);
	// 		}
	// 	}

	// 	function calculateFooterHeight() {
	// 		if (footerElement) {
	// 			footerHeight = footerElement.offsetHeight;
	// 			// console.log(`Footer height: ${footerHeight}px`);
	// 		}
	// 	}

	// 	calculateNavBarHeight();
	// 	calculateFooterHeight();
	// 	window.addEventListener('resize', calculateNavBarHeight);
	// 	window.addEventListener('resize', calculateFooterHeight);
	// 	return () => {
	// 		window.removeEventListener('resize', calculateNavBarHeight);
	// 		window.removeEventListener('resize', calculateFooterHeight);
	// 	};
	// });
</script>

<div class="flex min-h-screen w-full flex-col overflow-x-hidden">
	<Nav />

	{@render children()}

	<Footer />
</div>
