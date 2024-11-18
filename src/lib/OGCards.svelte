<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
  
    // Props with TypeScript interfaces
    interface Props {
      title?: string;
      description?: string;
      image?: string;
      type?: 'website' | 'article' | 'profile';
      siteName?: string;
    }
  
    let { 
      title = "GAR1K.C0DES",
      description = "Independent software engineer for hire.",
      image = "default-image-url",
      type = "website",
      siteName = "GAR1K.C0DES"
    } = $props<Props>();

    let url = $state('')
  
    // Reactive URL that updates with current path
    $effect(() => {
    url = browser 
        ? window.location.href 
        : `https://garik.codes${$page.url.pathname}`;
    });
  
    // Format title to include site name if not already present
    const formattedTitle = $derived(
      title.includes(siteName) ? title : `${title} | ${siteName}`
    );
  </script>
  
  <svelte:head>
    <!-- Essential Meta Tags -->
    <title>{formattedTitle}</title>
    <meta name="description" content={description} />
  
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={formattedTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content={siteName} />
  
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={formattedTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </svelte:head>