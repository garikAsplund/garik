<script lang="ts">
  import {
    BookOpenCheck,
    ChevronLeft,
    ChevronRight,
    MoveLeft,
    ArrowUp
  } from 'lucide-svelte';
  import altImage from '$lib/blogging.jpeg';
  import OGCards from '$lib/OGCards.svelte';
  import { onMount } from 'svelte';

  let { data } = $props();
  const ogImage = data.meta.og_image || altImage;

  let contentElement: HTMLElement;
  let tocItems: Array<{ id: string; text: string; level: number }> = $state(
    []
  );
  let activeSection = $state('');

  $effect(() => {
    if (!contentElement || !data) return;
    const headings = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');

    tocItems = Array.from(headings).map((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }

      return {
        id: heading.id,
        text: heading.innerHTML || '',
        level: parseInt(heading.tagName.charAt(1))
      };
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-80px 0px -60% 0px'
      }
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  });

  function scrollToHeading(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<OGCards
  title={data.meta.title}
  description="Tech thoughts from a n00b"
  image={ogImage}
  type="article"
/>

<a
  href="/blog"
  class="mt-4 flex items-center justify-center gap-2 hover:underline hover:underline-offset-4"
>
  <MoveLeft />
  Back to Blog
</a>

<article class="mx-auto max-w-screen-lg px-8 py-12 ">
  <hgroup>
    <h1 class="text-4xl font-semibold capitalize xl:translate-x-36">{data.meta.title}</h1>
  </hgroup>

  <div class="relative mt-8 flex justify-center xl:translate-x-36">
    <div class="w-full max-w-3xl">
      <div class="prose text-lg" bind:this={contentElement}>
        <data.content />
      </div>
    </div>

    {#if tocItems.length > 0}
      <aside class="sticky top-20 hidden h-fit w-96 xl:block pl-12">
        <div class="max-h-[calc(100vh-8rem)] overflow-y-auto">
          <h3 class="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
            On This Page
          </h3>
          <nav class="space-y-1">
            {#each tocItems as item}
              <button
                onclick={() => scrollToHeading(item.id)}
                class="block w-full text-left text-sm leading-5 transition-colors duration-200"
                style="padding-left: {Math.max(0, item.level - 1) * 12}px"
              >
                <span
                  class="block border-l-2 py-1 pl-3 transition-all duration-200 {activeSection ===
                  item.id
                    ? 'border-gray-800 font-medium text-gray-800'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800'}"
                >
                  {@html item.text}
                </span>
              </button>
            {/each}
          </nav>
          <div class="mt-6 border-t border-gray-200 pt-4">
            <button
              onclick={scrollToTop}
              class="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-500 transition-colors hover:text-gray-700"
            >
              <ArrowUp size={12} />
              Back to top
            </button>
          </div>
        </div>
      </aside>
    {/if}
  </div>

  <div class="flex w-full items-center justify-center py-8">
    <div class="flex w-full max-w-2xl items-center justify-center space-x-4">
      <div
        class="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"
      ></div>
      <BookOpenCheck size={36} />
      <div
        class="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"
      ></div>
    </div>
  </div>

  <div class="mt-8 flex items-center justify-between">
    {#if data.prevPost}
      <a
        href={`/blog/${data.prevPost.path.split('/')[1]}`}
        class="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        <ChevronLeft size={24} />
        <span>Previous: {data.prevPost.meta.title}</span>
      </a>
    {:else}
      <div></div>
    {/if}
    {#if data.nextPost}
      <a
        href={`/blog/${data.nextPost.path.split('/')[1]}`}
        class="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        <span>Next: {data.nextPost.meta.title}</span>
        <ChevronRight size={24} />
      </a>
    {:else}
      <div></div>
    {/if}
  </div>
</article>

<style>
  .prose :global(img) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .prose :global(h1),
  .prose :global(h2),
  .prose :global(h3),
  .prose :global(h4),
  .prose :global(h5),
  .prose :global(h6) {
    scroll-margin-top: 3.7rem;
  }
</style>