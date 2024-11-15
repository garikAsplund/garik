import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { enhancedImages } from 'mdsvex-enhanced-images';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			// remarkPlugins: [[enhancedImages]]
		})
	],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx']
};

export default config;
