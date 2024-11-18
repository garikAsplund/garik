<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from '$app/stores';

    interface Props {
      title?: string;
      description?: string;
      image?: string;
      type?: 'website' | 'article' | 'profile';
      subPage?: string;
    }
  
    let { 
      title = "GAR1K.C0DES",
      description = "Need a fresh website? I've got you :)",
      image = "https://media.licdn.com/dms/image/v2/D5616AQFDLZGPXiZ-QA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1687973966708?e=1736985600&v=beta&t=IOnuEVPLdtSOSenBSgW6z9ZkbtBcj5Bbj3k9xDz3DJY",
      type = "website",
      subPage = "Home"
    } = $props<Props>();

    let url = $state('')
  
    $effect(() => {
    url = browser 
        ? window.location.href 
        : `https://garik.codes${$page.url.pathname}`;
    });
  </script>
  
  <svelte:head>
    <!-- Essential Meta Tags -->
    <title>{title} | {subPage}</title>
    <meta name="description" content={description} />
  
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content={subPage} />
  
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </svelte:head>