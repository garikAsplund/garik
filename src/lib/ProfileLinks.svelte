<script lang="ts">
	import GitHub from '$lib/SVGs/GitHub.svelte';
	import LinkedIn from '$lib/SVGs/LinkedIn.svelte';
	import Bluesky from './SVGs/Bluesky.svelte';
</script>
<div class="flex flex-col md:flex-row px-6 gap-6 place-items-center">
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
	<a
		href="https://bsky.app/profile/garik.codes"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Bluesky Profile"
		class="hover:opacity-80"
	>
		<Bluesky />
	</a>
</div>