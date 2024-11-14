<script lang="ts">
	import GarikCodes from '$lib/SVGs/GarikCodes.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let lastScrollY = $state(0);
	let isNavbarVisible = $state(true);
	let isNavigating = $state(false);

	$inspect(isNavbarVisible);

	$effect(() => {
		$page.url.pathname;
		isNavbarVisible = true;
		hasScrolled = false;
		isNavigating = true;
		setTimeout(() => {
			isNavigating = false;
		}, 0);
	});

	let scrollTimeout = $state(0);

	function handleScroll() {
		const currentScrollY = window.scrollY;

		if (Math.abs(currentScrollY - lastScrollY) > 10) {
			isNavbarVisible = currentScrollY < lastScrollY;
			lastScrollY = currentScrollY;

			if (scrollTimeout) clearTimeout(scrollTimeout);

			scrollTimeout = setTimeout(() => {
				isNavbarVisible = true;
			}, 1500);
		}

		if (currentScrollY < 100) {
			isNavbarVisible = true;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (scrollTimeout) clearTimeout(scrollTimeout);
		};
	});
</script>

<svelte:window on:scroll={handleScroll} />

<header
	class="sticky top-0 z-10 flex w-full {isNavbarVisible
		? 'translate-y-0'
		: '-translate-y-full'} py-4 text-gray-800 {isNavigating
		? 'transition-none'
		: 'transition-transform duration-1000 ease-in-out'} items-end justify-around bg-slate-100 px-8"
	id="nav"
	aria-label="Main navigation"
>
	<!-- Home link and logo -->
	<div class="">
		<a href="/" class="hover:opacity-70" aria-label="Home">
			<GarikCodes />
		</a>
	</div>

	<!-- Nav bar -->
	<nav class="flex w-full justify-end">
		<ul class="flex items-end gap-6 text-xl">
			<li>
				<a
					href="/philosophy"
					class="hover:opacity-70 {$page.url.pathname === '/philosophy'
						? 'underline underline-offset-8'
						: ''}">Philosophy</a
				>
			</li>
			<li>
				<a
					href="/portfolio"
					class="hover:opacity-70 {$page.url.pathname === '/portfolio'
						? 'underline underline-offset-8'
						: ''}">Portfolio</a
				>
			</li>
			<li>
				<a
					href="/pricing"
					class="hover:opacity-70 {$page.url.pathname === '/pricing'
						? 'underline underline-offset-8'
						: ''}">Pricing</a
				>
			</li>
			<li>
				<a
					href="/blog"
					class="hover:opacity-70 {$page.url.pathname === '/blog'
						? 'underline underline-offset-8'
						: ''}">Blog</a
				>
			</li>
			<li>
				<a
					href="/contact"
					class="hover:opacity-70 {$page.url.pathname === '/contact'
						? 'underline underline-offset-8'
						: ''}">Contact</a
				>
			</li>
		</ul>
	</nav>

	<!-- CTA -->
</header>
