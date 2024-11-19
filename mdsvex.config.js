import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import 'prismjs';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-rust.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-bash.js';

const config = defineConfig({
  extensions: ['.svx', '.md'],
  
  // remarkPlugins: [
  //   remarkGfm
  // ],
  
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeExternalLinks,
      {
        target: '_blank',
        rel: ['noopener', 'noreferrer']
      }
    ]
  ],
  
  // highlight: {
  //   highlighter: async (code, lang = 'text') => {
  //     const prism = await import('prismjs');
      
  //     // Map some common language aliases
  //     const languageMap = {
  //       'js': 'javascript',
  //       'ts': 'typescript',
  //       'sh': 'bash',
  //       'shell': 'bash',
  //       'yml': 'yaml'
  //     };

  //     // Use mapped language if available
  //     const normalizedLang = languageMap[lang] || lang;
      
  //     let grammar;
  //     try {
  //       // Try to load the language if not loaded
  //       if (normalizedLang !== 'text' && !prism.languages[normalizedLang]) {
  //         await import(`prismjs/components/prism-${normalizedLang}.js`);
  //       }
  //       grammar = prism.languages[normalizedLang];
  //     } catch (e) {
  //       grammar = prism.languages['text'];
  //     }

  //     const highlighted = grammar 
  //       ? prism.highlight(code, grammar, normalizedLang)
  //       : prism.util.encode(code);

  //     return `<pre class="language-${normalizedLang}"><code class="language-${normalizedLang}">${highlighted}</code></pre>`;
  //   }
  // }
});

export default config;