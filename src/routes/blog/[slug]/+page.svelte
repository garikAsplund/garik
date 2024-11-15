<script lang="ts">
	import { ChevronLeft, ChevronRight, MoveLeft } from 'lucide-svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>GAR1K.C0DES | {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<a href="/blog" class="mt-4 flex items-center gap-2 hover:underline hover:underline-offset-4">
	<MoveLeft />
	Back to Blog
</a>

<article class="mx-auto max-w-screen-lg px-8 py-12">
	<hgroup>
		<h1 class="text-3xl font-semibold capitalize">{data.meta.title}</h1>
	</hgroup>

	<div class="mt-7 flex gap-3">
		{#each data.meta.categories as category}
			<span class="rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-800">
				&num;{category}
			</span>
		{/each}
	</div>

	<div class="prose mt-8">
		<data.content />
	</div>

	<div class="mt-8 flex items-center justify-between">
		{#if data.prevPost}
			<a
				href={`/blog/${data.prevPost.path.split('/')[1]}`}
				class="flex items-center gap-2 hover:underline hover:underline-offset-4"
			>
				<ChevronLeft size={20} />
				<span>Previous: {data.prevPost.meta.title}</span>
			</a>
		{:else}
			<div></div>
		{/if}

		{#if data.nextPost}
			<a
				href={`/blog/${data.nextPost.path.split('/')[1]}`}
				class="flex items-center gap-2 hover:underline hover:underline-offset-4"
			>
				<span>Next: {data.nextPost.meta.title}</span>
				<ChevronRight size={20} />
			</a>
		{:else}
			<div></div>
		{/if}
	</div>
</article>
