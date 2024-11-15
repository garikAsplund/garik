<script lang="ts">
	let { data } = $props();
</script>

<section class="px-6 py-8">
	<ul class="space-y-4">
		{#each data.posts as post}
			<li>
				<h2 class="text-lg font-semibold">
					<a class="hover:underline" href={post.path}>
						{post.meta.title}
					</a>
				</h2>
			</li>
		{/each}
	</ul>
</section>
