<script lang="ts">
	import { BookOpenCheck, ChevronLeft, ChevronRight, MoveLeft } from 'lucide-svelte';
	import altImage from '$lib/blogging.jpeg';
	import OGCards from '$lib/OGCards.svelte';

	let { data } = $props();

	const ogImage = data.meta.og_image || altImage;
</script>

<OGCards
	title={data.meta.title}
	description="Tech thoughts from a n00b"
	image={ogImage}
	type="article"
/>
<a
	href="/blog"
	class="mt-4 flex items-center justify-center gap-2 hover:underline hover:underline-offset-4"
>
	<MoveLeft />
	Back to Blog
</a>

<article class="mx-auto max-w-screen-lg px-8 py-12">
	<hgroup>
		<h1 class="text-4xl font-semibold capitalize">{data.meta.title}</h1>
	</hgroup>

	<div class="prose mt-8 text-lg">
		<data.content />
	</div>

	<div class="flex w-full items-center justify-center py-8">
		<div class="flex w-full max-w-2xl items-center justify-center space-x-4">
			<div class="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
			<BookOpenCheck size={36} />
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