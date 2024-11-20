import type { RequestHandler } from './$types';
import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const allPosts = await fetchMarkdownPosts();
  const publishedPosts = allPosts.filter(post => !post.meta.draft);
  const sortedPosts = publishedPosts.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });

  return json(sortedPosts);
};
