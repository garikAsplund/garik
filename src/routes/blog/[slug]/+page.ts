import { error } from '@sveltejs/kit';
import { fetchMarkdownPosts } from '$lib/utils';
import { dev } from '$app/environment';

export async function load({ params }) {
	try {
		const PUBLIC_ORIGIN = 'https://garik.codes';
		const post = await import(`../${params.slug}.svx`);
		const allPosts = await fetchMarkdownPosts();
		const publishedPosts = dev ? allPosts : allPosts.filter(post => !post.meta.draft);
		const sortedPosts = publishedPosts.sort((a, b) => {
			return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
		});
		const currentPostIndex = sortedPosts.findIndex((p) => p.path === `blog/${params.slug}`);

		const prevPost = sortedPosts[currentPostIndex - 1] || null;
		const nextPost = sortedPosts[currentPostIndex + 1] || null;

		return {
			content: post.default,
			meta: post.metadata,
			og_image: post.metadata.og_image ? `${PUBLIC_ORIGIN}${post.metadata.og_image}` : 'https://www.garik.codes/_app/immutable/assets/blogging.WI1AkKDk.jpeg',
			prevPost,
			nextPost
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
