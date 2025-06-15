<script lang="ts">
	import OGCards from '$lib/OGCards.svelte';

	let { data } = $props();
</script>

<OGCards />

<section class="flex w-full flex-col items-center space-y-8 px-8 pt-12 md:px-16 pb-12">
	<h1 class="text-4xl font-semibold">Blog</h1>
	<ul class="space-y-4 md:-translate-x-4">
		{#each data.posts as post}
			<li>
				<h2 class="text-xl font-semibold">
					<a class="hover:underline hover:underline-offset-4" href={post.path}>
						{post.meta.title}
					</a>
				</h2>
			</li>
		{/each}
	</ul>
</section>
