<script lang="ts">
	type Site = {
		image: string;
		title: string;
		description: string;
	};

	const website: Site[] = [
		{
			image: '/static/portfolio/range-rider.png',
			title: 'Range Rider',
			description: 'A website for a my favorite restaurant.'
		}
	];
</script>

<section class="flex w-full flex-col items-center space-y-8 px-8 pt-12 md:px-16">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-4 ">
		{#each website as site}
			<enhanced:img
				src="/static/portfolio/range-rider.png"
				alt={site.title}
				class="h-full w-full object-contain"
			/>
			<enhanced:img
				src="/static/portfolio/range-rider-mobile.png"
				alt={site.title}
				class="h-full w-full object-cover"
			/>
			<div
				class="w-full space-y-4 rounded-lg bg-white p-6 text-left shadow-lg dark:shadow-red-500/50"
			>
				<h2 class="text-xl font-semibold">{site.title}</h2>
				<p class="text-gray-700">{site.description}</p>
			</div>
			<a
				href="https://pagespeed.web.dev/analysis/https-rangerider-netlify-app/5vgya50dxj?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext"
				aria-label="Range Rider PageSpeed Insights"
				rel="noopener noreferrer"
				target="_blank"
			>
				<enhanced:img
					src="/static/portfolio/scores/range-rider.png"
					alt={site.title}
					class="h-full w-full object-contain"
				/></a
			>
		{/each}
	</div>
</section>
