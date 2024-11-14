<script>
	import GarikCodes from '$lib/SVGs/GarikCodes.svelte';
</script>

<header class="w-full flex py-4 items-end justify-start">
        <!-- Home link and logo -->
		<div class="px-8">
			<a href="/" class="hover:opacity-70" aria-label="Home"> 
                <GarikCodes />
            </a>
		</div>

        <!-- Nav bar -->
		<nav class="px-4 sm:px-6 lg:px-8 flex justify-end w-full">
			<ul class="flex items-end gap-6 text-xl">
                <li><a href="/pricing" class="hover:opacity-70">Pricing</a></li>
                <li><a href="/blog" class="hover:opacity-70">Blog</a></li>
				<li><a href="/contact" class="hover:opacity-70">Contact</a></li>
			</ul>
		</nav>

        <!-- CTA -->
</header>
