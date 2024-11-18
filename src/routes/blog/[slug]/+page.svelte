<script lang="ts">
	import { BookOpenCheck, ChevronLeft, ChevronRight, MoveLeft } from 'lucide-svelte';
	import { onMount } from 'svelte';
	let { data } = $props();
	import altImage from '$lib/blogging.jpeg';

	const ogImage = data.meta.og_image || altImage;
	
	// Debug log
	console.log('Blog post meta:', data.meta);
	
	// Force meta update on mount
	onMount(() => {
		// Remove existing og:image tags
		document.querySelectorAll('meta[property="og:image"]').forEach(tag => tag.remove());
		document.querySelectorAll('meta[name="twitter:image"]').forEach(tag => tag.remove());
		
		// Create and append new ones
		const ogImage = document.createElement('meta');
		ogImage.setAttribute('property', 'og:image');
		ogImage.setAttribute('content', ogImage);
		ogImage.setAttribute('data-sveltekit-reload', '');
		document.head.appendChild(ogImage);
		
		const twitterImage = document.createElement('meta');
		twitterImage.setAttribute('name', 'twitter:image');
		twitterImage.setAttribute('content', ogImage);
		twitterImage.setAttribute('data-sveltekit-reload', '');
		document.head.appendChild(twitterImage);
	});
</script>

<svelte:head>
	<title>GAR1K.C0DES | {data.meta.title}</title>
	
	<!-- Force unique keys to ensure updates -->
	<meta property="og:type" content="article" data-sveltekit-reload />
	<meta property="og:title" content={data.meta.title} data-sveltekit-reload />
	<meta property="og:description" content={`${data.meta.title} - Tech thoughts from a n00b`} data-sveltekit-reload />
	
	<!-- Add a unique key to force refresh -->
	<meta property="og:url" content={`https://garik.codes/blog/${data.meta.title}?t=${Date.now()}`} data-sveltekit-reload />
</svelte:head>

<!-- Display the image in the post for testing -->
<a href="/blog" class="mt-4 flex items-center gap-2 hover:underline hover:underline-offset-4">
	<MoveLeft />
	Back to Blog
</a>

<article class="mx-auto max-w-screen-lg px-8 py-12">
	<hgroup>
		<h1 class="text-3xl font-semibold capitalize">{data.meta.title}</h1>
		<time class="mt-2 text-sm text-gray-600">
			{new Date(data.meta.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</time>
	</hgroup>

	<!-- Debug info -->
	<div class="mt-4 p-4 bg-yellow-100 rounded-lg">
		<p>Debug - Current image URL: {ogImage}</p>
	</div>

	<!-- Display image with error handling -->
	<img 
		src={ogImage} 
		alt={data.meta.title}
		class="mt-8 w-full rounded-lg object-cover"
	/>

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