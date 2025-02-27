import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeHighlighter from 'rehype-highlight';
import { enhancedImages } from 'mdsvex-enhanced-images';

const config = defineConfig({
  extensions: ['.svx', '.md'],
  remarkPlugins: [remarkGfm, enhancedImages],
  rehypePlugins: [
    rehypeSlug,
    [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    rehypeHighlighter
  ]
});

export default config;
