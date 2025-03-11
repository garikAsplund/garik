<script>
  import { page } from '$app/state';
</script>

<main class="h-[70vh] w-full flex items-center justify-center ">
  <div class="text-center">
      {#if page.status === 404}
          <enhanced:img 
              src="/static/errors/404cat.jpg" 
              alt="Page not found, cat not found"
              class="max-w-full h-auto dark:invert" 
          />
      {:else if page.status === 500}
          <enhanced:img 
              src="/static/errors/500cat.jpg" 
              alt="Oh no"
              class="max-w-full h-auto dark:invert" 
          />
      {/if}
  </div>
</main>