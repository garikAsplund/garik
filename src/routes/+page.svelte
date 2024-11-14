<script lang="ts">
	import ContactForm from '$lib/ContactForm.svelte';

	let { data } = $props();
</script>

<div class="relative flex w-full flex-col items-center">
	<div class="flex max-w-4xl flex-col justify-center space-y-4 px-8 pt-32 lg:space-y-8">
		<h2 class="px-4 text-4xl lg:px-8">Building simple, elegant websites</h2>
		<p class="px-8 md:text-lg lg:px-16 lg:text-xl">
			I'm an independent full-stack software engineer who focuses on creating websites for <b
				>small businesses in need of a glow up</b
			>.
		</p>
		<ul class="space-y-2 px-16 md:space-y-1 lg:px-24 lg:text-lg">
			<li>
				<code class="code lg:text-lg">Minimal code</code> - the less code the better
			</li>
			<li>
				<code class="code lg:text-lg">Responsive layouts</code> - made for every device
			</li>
			<li>
				<code class="code lg:text-lg">Intuitive design</code> - sites should be easy to interact with
			</li>
		</ul>
	</div>
	<div class="py-16 w-full">
		<ContactForm {data} />
	</div>
</div>
