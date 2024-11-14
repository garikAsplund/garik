<script>
  import { page } from '$app/stores';
</script>

<main class="h-[70vh] w-full flex items-center justify-center ">
  <div class="text-center">
      {#if $page.status === 404}
          <img 
              src="https://i.kym-cdn.com/photos/images/newsfeed/000/236/756/b33.jpg" 
              alt="Page not found, cat not found"
              class="max-w-full h-auto" 
          />
      {:else if $page.status === 500}
          <img 
              src="https://http.cat/images/500.jpg" 
              alt="Oh no"
              class="max-w-full h-auto shadow-lg rounded-lg" 
          />
      {/if}
  </div>
</main>