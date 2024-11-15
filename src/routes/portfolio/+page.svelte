<script lang="ts">
	import rangeRider from '$lib/portfolio/range-rider/desktop.png?enhanced';
	import rangeRiderMobile from '$lib/portfolio/range-rider/mobile.png?enhanced';
	import rangeRiderScores from '$lib/portfolio/range-rider/scores.png?enhanced';
	import { ExternalLink } from 'lucide-svelte';

	type Project = {
		title: string;
		description: string;
		siteUrl: string;
		tags: string[];
		images: {
			desktop: any;
			mobile: any;
			performance: any;
		};
		insightsUrl: string;
	};

	// Your projects array
	const projects: Project[] = [
		{
			title: 'Range Rider',
			description:
				'A modern, performant website for my favorite restaurant. Built with SvelteKit and Tailwind CSS, featuring responsive design and optimal performance scores.',
			siteUrl: 'https://rangerider.netlify.app',
			tags: ['SvelteKit', 'Tailwind CSS', 'Responsive'],
			images: {
				desktop: rangeRider,
				mobile: rangeRiderMobile,
				performance: rangeRiderScores
			},
			insightsUrl: 'https://pagespeed.web.dev/analysis/https-rangerider-netlify-app/5vgya50dxj'
		}
		// Add more projects here
	];
</script>

<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<div class="mb-16 space-y-2 text-center">
		<h1 class="text-4xl font-bold tracking-tight">Portfolio</h1>
		<p class="text-lg text-gray-600">Check out some of my recent projects</p>
	</div>

	<div class="grid gap-16">
		{#each projects as project}
			<div class="group relative rounded-2xl border bg-white p-6 transition-all hover:shadow-lg">
				<!-- Project Header -->
				<div class="mb-6 flex items-center justify-between">
					<div>
						<h2 class="text-2xl font-semibold">{project.title}</h2>
						<p class="mt-2 text-gray-600">{project.description}</p>
						<div class="mt-3 flex gap-2">
							{#each project.tags as tag}
								<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
									{tag}
								</span>
							{/each}
						</div>
					</div>
					<a
						href={project.siteUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
					>
						<ExternalLink />
					</a>
				</div>

				<!-- Project Screenshots -->
				<div class="space-y-6">
					<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
						<!-- Desktop Screenshot - Takes up 2 columns -->
						<div class="overflow-hidden rounded-lg border bg-gray-50 lg:col-span-2">
							<enhanced:img
								src={project.images.desktop}
								alt="{project.title} desktop view"
								class="h-[400px] w-full object-contain dark:invert"
							/>
						</div>

						<!-- Mobile Screenshot -->
						<div class="overflow-hidden rounded-lg border bg-gray-50">
							<enhanced:img
								src={project.images.mobile}
								alt="{project.title} mobile view"
								class="mx-auto h-[400px] w-auto object-contain dark:invert"
							/>
						</div>
					</div>

					<!-- Performance Score - Full width below -->
					<div class="flex w-full justify-center">
						<a
							href={project.insightsUrl}
							class="block overflow-hidden rounded-lg border bg-gray-50"
							target="_blank"
							aria-label="Performance scores for {project.title}"
							rel="noopener noreferrer"
						>
							<enhanced:img
								src={project.images.performance}
								alt="{project.title} performance scores"
								class="h-24 w-full object-contain dark:invert"
							/>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
