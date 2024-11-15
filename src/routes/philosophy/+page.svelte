<script lang="ts">
	const philosophySections = [
		{
			title: 'Next-Gen Media',
			description:
				'Images and videos are served in modern formats for fast load times without sacrificing quality.'
		},
		{
			title: 'Lightweight Code',
			description:
				'I prioritize site performance by minimizing dependencies and avoiding code bloat.'
		},
		{
			title: 'Effortless Nav',
			description:
				'I build sites that are intuitive and easy to navigate, with client-side routing to avoid annoying full page refreshes.'
		},
		{
			title: 'Minimal Cookies',
			description:
				'Cookies are rarely needed, and I only add them when absolutely necessary. Privacy matters, and data won’t be collected needlessly.'
		},
		{
			title: 'Clarity in Design',
			description:
				'Clear call-to-actions and straightforward design elements keep users focused on what matters most.'
		},
		{
			title: 'Search Ready',
			description:
				'Structured content and technical optimization ensure your site performs well in search results and reaches your target audience.'
		}
	];
</script>

<section class="flex w-full flex-col items-center space-y-8 pt-12 md:px-16 px-8">
	<h1 class="text-4xl font-semibold">Philosophy</h1>
	<article class="max-w-3xl text-left">
		<p class="text-lg pb-4">
			The web doesn't need to be complicated.
		</p>
		<p class="text-base leading-relaxed text-gray-700 pb-8">
			I believe in creating web experiences that feel effortless and are aesthetically pleasing.<br/> My approach emphasizes <strong>fast
			loading times, intuitive navigation, and minimal distractions</strong>.
		</p>
		<div class="grid md:grid-cols-3 grid-cols-1 gap-8">
			{#each philosophySections as section}
				<div class="w-full space-y-4 rounded-lg bg-white p-6 text-left shadow-lg dark:shadow-red-500/50">
					<h2 class="text-xl font-semibold">{section.title}</h2>
					<p class="text-gray-700">{section.description}</p>
				</div>
			{/each}
		</div>
	</article>
</section>
