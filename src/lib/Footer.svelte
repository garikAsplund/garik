<script lang="ts">
	import GitHub from "$lib/SVGs/GitHub.svelte";
	import LinkedIn from "$lib/SVGs/LinkedIn.svelte";

</script>

<footer class="relative bottom-0 w-full flex justify-center items-center space-x-4 py-8 z-40 mt-auto" id="footer">
    <a 
    href="https://github.com/garikAsplund" 
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub Profile"
    class="hover:opacity-80"
  >
    <GitHub />
  </a> 
  <a 
  href="https://www.linkedin.com/in/garik-asplund/" 
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn Profile"
  class="hover:opacity-80"
>   
  <LinkedIn />
  </a>
</footer>