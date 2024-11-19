<script lang="ts">
	import { page } from '$app/stores';
    import { isMenuOpen } from '$lib/isMenuOpen.svelte';

    function closeMenu() {
		isMenuOpen.button = false;
	}
</script>

<ul class="flex flex-col items-center gap-6 text-2xl md:text-xl md:flex-row md:items-end md:justify-end w-full">
	<li class="w-full md:w-fit">
		<a
			href="/philosophy"
			onclick={closeMenu}
			class="hover:opacity-70 w-full block text-center {$page.url.pathname === '/philosophy'
				? 'underline underline-offset-8'
				: ''}">Philosophy</a
		>
	</li>
	<li class="w-full md:w-fit ">
		<a
			href="/portfolio"
			onclick={closeMenu}
			class="hover:opacity-70 w-full block text-center {$page.url.pathname === '/portfolio'
				? 'underline underline-offset-8'
				: ''}">Portfolio</a
		>
	</li>
	<li class="w-full md:w-fit ">
		<a
			href="/pricing"
			onclick={closeMenu}
			class="hover:opacity-70 w-full block text-center {$page.url.pathname === '/pricing'
				? 'underline underline-offset-8'
				: ''}">Pricing</a
		>
	</li>
	<li class="w-full md:w-fit ">
		<a
			href="/blog"
			onclick={closeMenu}
			class="hover:opacity-70 w-full block text-center {$page.url.pathname.split('/')[1] === 'blog'
				? 'underline underline-offset-8'
				: ''}">Blog</a
		>
	</li>
	<li class="w-full md:w-fit ">
		<a
			href="/contact"
			onclick={closeMenu}
			class="hover:opacity-70 w-full block text-center {$page.url.pathname === '/contact'
				? 'underline underline-offset-8'
				: ''}">Contact</a
		>
	</li>
</ul>

