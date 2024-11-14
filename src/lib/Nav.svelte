<script lang="ts">
	import GarikCodes from '$lib/SVGs/GarikCodes.svelte';
    import { page } from '$app/stores';
	
</script>

<header class="w-full flex py-4 items-end justify-around" id="navbar">
        <!-- Home link and logo -->
		<div class="px-8">
			<a href="/" class="hover:opacity-70" aria-label="Home"> 
                <GarikCodes />
            </a>
		</div>

        <!-- Nav bar -->
		<nav class="px-8 flex justify-end w-full">
			<ul class="flex items-end gap-6 text-xl">
				<li><a href="/portfolio" class="hover:opacity-70 {$page.url.pathname === '/portfolio' ? 'underline-offset-8 underline' : ''}">Portfolio</a></li>
                <li><a href="/pricing" class="hover:opacity-70 {$page.url.pathname === '/pricing' ? 'underline-offset-8 underline' : ''}">Pricing</a></li>
                <li><a href="/blog" class="hover:opacity-70 {$page.url.pathname === '/blog' ? 'underline-offset-8 underline' : ''}">Blog</a></li>
				<li><a href="/contact" class="hover:opacity-70 {$page.url.pathname === '/contact' ? 'underline-offset-8 underline' : ''}">Contact</a></li>
			</ul>
		</nav>

        <!-- CTA -->

</header>
