<script lang="ts">
	import GarikCodes from '$lib/SVGs/GarikCodes.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { ChevronDown, X } from 'lucide-svelte';
	import NavItems from '$lib/NavItems.svelte';
	import { isMenuOpen } from '$lib/isMenuOpen.svelte';
	import DarkModeButton from './DarkModeButton.svelte';
	import ProfileLinks from './ProfileLinks.svelte';

	let lastScrollY = $state(0);
	let isNavbarVisible = $state(true);
	let hasScrolled = $state(false);
	let isNavigating = $state(false);

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

		if (Math.abs(currentScrollY - lastScrollY) > 200) {
			isNavigating = true;
			setTimeout(() => {
				isNavigating = false;
			}, 0);
		}

		if (Math.abs(currentScrollY - lastScrollY) > 10) {
			isNavbarVisible = currentScrollY < lastScrollY;
			lastScrollY = currentScrollY;

			if (scrollTimeout) clearTimeout(scrollTimeout);

			scrollTimeout = setTimeout(() => {
				isNavbarVisible = true;
			}, 1000);
		}
	}

	function toggleMenu() {
		isMenuOpen.button = !isMenuOpen.button;
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
	class="sticky top-0 z-30 flex w-full {isNavbarVisible
		? 'translate-y-0'
		: '-translate-y-full'} text-gray-800 md:py-4 {isNavigating
		? 'transition-none'
		: 'transition-transform duration-1000 ease-in-out'} items-center bg-slate-100 px-8 md:justify-around"
	id="nav"
	aria-label="Main navigation"
>
	<!-- Home link and logo -->
	<div class="">
		<a
			href="/"
			class="hover:opacity-70"
			aria-label="Home"
			onclick={() => (isMenuOpen.button = false)}
		>
			<GarikCodes />
		</a>
	</div>

	<!-- Nav bar -->
	<nav class="hidden w-full items-center justify-end md:flex">
		<NavItems />
		<ProfileLinks />
		<DarkModeButton />
	</nav>

	<!-- Mobile nav -->
	<div class="flex w-full justify-end space-x-2 md:hidden">
		<button
			aria-label={isMenuOpen.button ? 'Close menu' : 'Open menu'}
			aria-expanded={isMenuOpen.button}
			aria-controls="mobile-menu"
			class="flex items-center p-4 focus:outline-none"
			onclick={toggleMenu}
		>
			<span class="pr-2 text-2xl">Menu</span>
			{#if isMenuOpen.button}
				<X class="h-6 w-6 translate-y-0.5" aria-hidden="true" />
			{:else}
				<ChevronDown class="h-6 w-6 translate-y-0.5" aria-hidden="true" />
			{/if}
		</button>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if isMenuOpen.button}
		<div
			class="absolute left-0 top-12 z-30 flex w-full flex-col items-center space-y-4 bg-slate-100 py-6 text-gray-800 shadow-lg md:hidden"
			id="mobile-menu"
			role="navigation"
			aria-label="Mobile menu"
		>
			<NavItems />
		</div>
	{/if}
	<!-- CTA -->
</header>
