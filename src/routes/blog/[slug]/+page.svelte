<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="max-w-screen-lg mx-auto mt-12">
	<hgroup>
		<h1 class="capitalize text-3xl font-semibold">{data.meta.title}</h1>
	</hgroup>

	<div class="flex gap-3 mt-7">
		{#each data.meta.categories as category}
			<span class="bg-gray-200 text-gray-800 rounded-full px-4 py-2 text-sm">
				&num;{category}
			</span>
		{/each}
	</div>

	<div class="prose mt-8">
		<data.content />
	</div>
</article>

