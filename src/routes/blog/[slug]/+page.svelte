<script lang="ts">
	import { BookOpenCheck, ChevronLeft, ChevronRight, MoveLeft } from 'lucide-svelte';

	let { data } = $props();

	const ogImage = data.meta.og_image || './blog/blogging.jpeg';
</script>

<svelte:head>
	<title>GAR1K.C0DES | {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content="Tech thoughts from a n00b+" />
	<meta property="og:image" content={data.meta.og_image} />
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

	<div class="flex w-full items-center justify-center py-8">
		<div class="flex w-full max-w-2xl items-center justify-center space-x-4">
			<div class="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
			<BookOpenCheck size={36}/>
			<div class="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
		</div>
	</div>

	<div class="mt-8 flex items-center justify-between">
		{#if data.prevPost}
			<a
				href={`/blog/${data.prevPost.path.split('/')[1]}`}
				class="flex items-center gap-2 hover:underline hover:underline-offset-4"
			>
				<ChevronLeft size={24} />
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
				<ChevronRight size={24} />
			</a>
		{:else}
			<div></div>
		{/if}
	</div>
</article>
