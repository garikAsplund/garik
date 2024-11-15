import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch(`/api/posts`);
  const posts: { title: string; date: string; content: string }[] = await response.json();

  return {
    posts
  };
};
