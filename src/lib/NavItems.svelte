<script lang="ts">
	import { page } from '$app/stores';
    import { isMenuOpen } from '$lib/isMenuOpen.svelte';

    function closeMenu() {
		isMenuOpen.button = false;
	}
</script>

<ul class="flex flex-col items-center gap-6 text-xl md:flex-row md:items-end">
	<li>
		<a
			href="/philosophy"
			onclick={closeMenu}
			class="hover:opacity-70 {$page.url.pathname === '/philosophy'
				? 'underline underline-offset-8'
				: ''}">Philosophy</a
		>
	</li>
	<li>
		<a
			href="/portfolio"
			onclick={closeMenu}
			class="hover:opacity-70 {$page.url.pathname === '/portfolio'
				? 'underline underline-offset-8'
				: ''}">Portfolio</a
		>
	</li>
	<li>
		<a
			href="/pricing"
			onclick={closeMenu}
			class="hover:opacity-70 {$page.url.pathname === '/pricing'
				? 'underline underline-offset-8'
				: ''}">Pricing</a
		>
	</li>
	<li>
		<a
			href="/blog"
			onclick={closeMenu}
			class="hover:opacity-70 {$page.url.pathname === '/blog'
				? 'underline underline-offset-8'
				: ''}">Blog</a
		>
	</li>
	<li>
		<a
			href="/contact"
			onclick={closeMenu}
			class="hover:opacity-70 {$page.url.pathname === '/contact'
				? 'underline underline-offset-8'
				: ''}">Contact</a
		>
	</li>
</ul>
