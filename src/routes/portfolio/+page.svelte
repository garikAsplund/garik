<script lang="ts">
  import rangeRider from '$lib/portfolio/range-rider/desktop.png?enhanced';
  import rangeRiderMobile from '$lib/portfolio/range-rider/mobile.png?enhanced';
  import rangeRiderScores from '$lib/portfolio/range-rider/scores.png?enhanced';


  type Site = {
    title: string;
    description: string;
    siteUrl: string;
    images: {
      desktop: any;
      mobile: any;
      performance: any;
    };
    insightsUrl: string;
  };

  const websites: Site[] = [
    {
      title: 'Range Rider',
      description: 'A modern, performant website for my favorite restaurant. Built with SvelteKit and Tailwind CSS, featuring responsive design and optimal performance scores.',
      siteUrl: 'https://rangerider.netlify.app',
      images: {
        desktop:rangeRider,
        mobile: rangeRiderMobile,
        performance: rangeRiderScores,
      },
      insightsUrl: 'https://pagespeed.web.dev/analysis/https-rangerider-netlify-app/5vgya50dxj?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo'
    }
    // Add more sites here
  ];
</script>

<section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
  <h1 class="mb-12 text-center text-4xl font-semibold">Portfolio</h1>
  
  <div class="space-y-16">
    {#each websites as site}
      <div class="space-y-8">
        <!-- Project Info -->
        <div class="border rounded-lg bg-white p-6">
          <h2 class="text-xl font-semibold mb-2">{site.title}</h2>
          <p class="text-gray-700">{site.description}</p>
        </div>
        
        <!-- Project Screenshots -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <!-- Desktop Screenshot -->
          <enhanced:img
            src="{site.images.desktop}"
            alt="{site.title} desktop view"
            class="w-full h-full object-contain dark:invert"
          />
          
          <!-- Mobile Screenshot -->
          <enhanced:img
            src="{site.images.mobile}"
            alt="{site.title} mobile view"
            class="h-96 w-auto object-cover dark:invert mx-auto"
          />
          
          <!-- Performance Score -->
          <a
            href={site.insightsUrl}
            class="block"
            aria-label="{site.title} PageSpeed Insights"
            rel="noopener noreferrer"
            target="_blank"
          >
            <enhanced:img
              src="{site.images.performance}"
              alt="{site.title} performance scores"
              class="w-full h-full object-contain dark:invert"
            />
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>