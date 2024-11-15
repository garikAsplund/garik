import { error } from '@sveltejs/kit';
import { fetchMarkdownPosts } from '$lib/utils';

export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.svx`);
		const allPosts = await fetchMarkdownPosts();
		console.log({ allPosts });
		const sortedPosts = allPosts.sort((a, b) => {
			return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
		});
		const currentPostIndex = sortedPosts.findIndex((p) => p.path === `blog/${params.slug}`);

		const prevPost = allPosts[currentPostIndex - 1] || null;
		const nextPost = allPosts[currentPostIndex + 1] || null;

		console.log({ prevPost }, { nextPost });

		return {
			content: post.default,
			meta: post.metadata,
			prevPost,
			nextPost
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
