import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.svx', '.md'],
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