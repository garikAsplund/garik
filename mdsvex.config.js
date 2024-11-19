import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';

const config = defineConfig({
  extensions: ['.svx', '.md'],
  
  // Add remark plugins for better markdown support
  remarkPlugins: [
    remarkGfm // Handles inline code, tables, strikethrough, etc.
  ],
  
  // Add rehype plugins for HTML processing
  rehypePlugins: [
    rehypeSlug, // Adds IDs to headings
    [
      rehypeExternalLinks, // Processes external links
      {
        target: '_blank',
        rel: ['noopener', 'noreferrer']
      }
    ]
  ],
  
  highlight: {
    highlighter: async (code, lang) => {
      const prism = (await import('prismjs')).default;
      
      // Load the language if it's not loaded yet
      if (lang && !prism.languages[lang]) {
        try {
          await import(`prismjs/components/prism-${lang}`);
        } catch {
          console.warn(`Prism doesn't support language '${lang}'`);
          lang = 'text';
        }
      }
      const highlighted = lang ? prism.highlight(code, prism.languages[lang], lang) : code;
      return `<pre class="language-${lang}"><code class="language-${lang}">${highlighted}</code></pre>`;
    }
  }
});

export default config;