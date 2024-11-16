<script lang="ts">
	import ContactForm from '$lib/ContactForm.svelte';
	import HeroArt from '$lib/HeroArt.svelte';
	import Blob from '$lib/Blob.svelte';

	let { data } = $props();
</script>

<div class="relative flex min-h-screen w-full flex-col items-center overflow-hidden">
	<!-- Gradient positioned absolutely within the container -->
	<Blob />
	<!-- Content container with proper z-index -->
	<div class="relative z-20">
		<div class="flex max-w-4xl flex-col justify-center space-y-4 px-8 pt-32 lg:space-y-8">
			<h2 class="px-4 text-4xl lg:px-8">Building simple, elegant websites</h2>
			<p class="px-8 md:text-lg lg:px-16 lg:text-xl">
				I'm an independent full-stack software engineer who focuses on creating websites for
				<strong>small businesses in need of a glow up</strong>.
			</p>
			<ul class="space-y-2 px-16 md:space-y-1 lg:px-24 lg:text-lg">
				<li>
					<code class="code lg:text-lg">Minimal code</code> - the less code the better
				</li>
				<li>
					<code class="code lg:text-lg">Responsive layouts</code> - made for every device
				</li>
				<li>
					<code class="code lg:text-lg">Intuitive design</code> - sites that are easy to interact with
				</li>
			</ul>
		</div>
		<div class="flex w-full justify-center px-4 py-4">
			<a
				href="/portfolio"
				class="mt-8 inline-flex items-center space-x-3 border-2 border-black bg-white/80 px-4 py-2 text-xl backdrop-blur-sm transition-all hover:opacity-75 md:mt-16"
			>
				<div class="flex items-center">
					<p>See my work</p>
				</div>
			</a>
		</div>
		<div class="flex w-full justify-center px-4 py-16">
			<ContactForm {data} />
		</div>
	</div>
</div>
