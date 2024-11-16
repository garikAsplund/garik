<script lang="ts">
	import { Image, Code, Navigation, Cookie, Layout, Search } from 'lucide-svelte';

	const philosophySections = [
		{
			title: 'Next-Gen Media',
			description:
				'Images and videos are served in modern formats for fast load times without sacrificing quality.',
			Icon: Image
		},
		{
			title: 'Lightweight Code',
			description:
				'I prioritize site performance by minimizing dependencies and avoiding code bloat.',
			Icon: Code
		},
		{
			title: 'Effortless Nav',
			description:
				'I build sites that are natural and easy to navigate, with client-side routing to avoid annoying full page refreshes.',
			Icon: Navigation
		},
		{
			title: 'Minimal Cookies',
			description:
				"Cookies are rarely required, and I only add them when absolutely necessary. Privacy matters, and data won't be collected needlessly.",
			Icon: Cookie
		},
		{
			title: 'Clarity in Design',
			description:
				'Clear call-to-actions and straightforward design elements keep users focused on what matters most.',
			Icon: Layout
		},
		{
			title: 'Search Ready',
			description:
				'Structured content and technical optimization ensure your site performs well in search results and reaches your target audience.',
			Icon: Search
		}
	];
</script>

<section class="flex max-w-5xl w-full flex-col items-center space-y-8 px-8 pt-12 md:px-16">
	<h1 class="text-4xl font-semibold">Philosophy</h1>
	<article class=" text-left">
		<div class="md:pl-16">
			<p class="pb-4 text-lg">The web doesn't need to be complicated.</p>
			<p class="pb-8 text-base leading-relaxed text-gray-700">
				I believe in creating web experiences that feel effortless and are aesthetically pleasing.<br
				/>
				My approach emphasizes
				<strong>fast loading times, intuitive navigation, and minimal distractions</strong>.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each philosophySections as { title, description, Icon }}
				<div
					class="w-full space-y-4 rounded-lg bg-white p-6 text-left shadow-lg dark:shadow-red-500/25 shadow-purple-500/10"
				>
					<div class="flex items-center gap-2">
						<Icon class="h-6 w-6" />
						<h2 class="text-xl font-semibold">{title}</h2>
					</div>
					<p class="text-gray-700">{description}</p>
				</div>
			{/each}
		</div>
	</article>
</section>
