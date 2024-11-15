<script lang="ts">
	import rangeRider from '$lib/portfolio/range-rider/desktop.png?enhanced';
	import rangeRiderMobile from '$lib/portfolio/range-rider/mobile.png?enhanced';
	import rangeRiderScores from '$lib/portfolio/range-rider/scores.png?enhanced';
	import apcvDesktop from '$lib/portfolio/apcv/desktop.png?enhanced';
	import apcvMobile from '$lib/portfolio/apcv/mobile.png?enhanced';
	import apcvScores from '$lib/portfolio/apcv/scores.png?enhanced';
  import amgcDesktop from '$lib/portfolio/amgc/desktop.png?enhanced';
	import amgcMobile from '$lib/portfolio/amgc/mobile.png?enhanced';
	import amgcScores from '$lib/portfolio/amgc/scores.png?enhanced';
  import corDesktop from '$lib/portfolio/cor/desktop.png?enhanced';
	import corMobile from '$lib/portfolio/cor/mobile.png?enhanced';
	import corScores from '$lib/portfolio/cor/scores.png?enhanced';
  import reddSaunaDesktop from '$lib/portfolio/redd-sauna/desktop.png?enhanced';
	import reddSaunaMobile from '$lib/portfolio/redd-sauna/mobile.png?enhanced';
	import reddSaunaScores from '$lib/portfolio/redd-sauna/scores.png?enhanced';
  import toskaBearDesktop from '$lib/portfolio/toska-bear/desktop.png?enhanced';
	import toskaBearMobile from '$lib/portfolio/toska-bear/mobile.png?enhanced';
	import toskaBearScores from '$lib/portfolio/toska-bear/scores.png?enhanced';

	type Project = {
		title: string;
		description: string;
		siteUrl: string;
		images: {
			desktop: any;
			mobile: any;
			performance: any;
		};
		insightsUrl: string;
	};

	const projects: Project[] = [
		{
			title: 'Alpine Meadows Golf Course',
			description:
				"Wallowa County's only golf course hadn't had their website updated for some time. This refresh brought them into the 21st century.",
			siteUrl: 'https://golfalpinemeadows.vercel.app',
			images: {
				desktop: amgcDesktop,
				mobile: amgcMobile,
				performance: amgcScores
			},
			insightsUrl: 'https://pagespeed.web.dev/analysis/https-golfalpinemeadows-vercel-app/4st6ws88tz?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
    {
			title: 'Asia Pacific Conference on Vision 2024',
			description:
				"A straightforward and informative website for a conference in Singapore.",
			siteUrl: 'https://www.apcv2024.com',
			images: {
				desktop: apcvDesktop,
				mobile: apcvMobile,
				performance: apcvScores
			},
			insightsUrl:
				'https://pagespeed.web.dev/analysis/https-www-apcv2024-com/bspekc1xkm?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
		{
			title: 'Cuyoma Oaks Ranch',
			description:
				"Over 75% of users for this site are on iOS and the old Square Space design had many issues. This redo addresses mobile first and getting info to the user quickly.",
			siteUrl: 'https://cuyoma-oaks.vercel.app',
			images: {
				desktop: corDesktop,
				mobile: corMobile,
				performance: corScores
			},
			insightsUrl: 'https://pagespeed.web.dev/analysis/https-cuyama-oaks-vercel-app/9qy89rjcur?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
		{
			title: 'Range Rider',
			description:
				"The old site was cluttered and confusing. With this makeover there's an HTML menu, better SEO, and up-to-date info.",
			siteUrl: 'https://rangerider.netlify.app',
			images: {
				desktop: rangeRider,
				mobile: rangeRiderMobile,
				performance: rangeRiderScores
			},
			insightsUrl: 'https://pagespeed.web.dev/analysis/https-rangerider-netlify-app/5vgya50dxj'
		},
		{
			title: 'Redd Sauna',
			description:
				"This clone has better validation for forms and sends out a booking confirmation email automatically.",
			siteUrl: 'https://redd-sauna.vercel.app',
			images: {
				desktop: reddSaunaDesktop,
				mobile: reddSaunaMobile,
				performance: reddSaunaScores
			},
			insightsUrl: 'https://pagespeed.web.dev/analysis/https-redd-sauna-vercel-app/t8702lm7ho?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
		{
			title: 'Toska Bear',
			description:
				"Previously just a link tree, this new site adds a little depth and flair.",
			siteUrl: 'https://www.toskabear.com',
			images: {
				desktop: toskaBearDesktop,
				mobile: toskaBearMobile,
				performance: toskaBearScores
			},
			insightsUrl: 'https://pagespeed.web.dev/analysis/https-www-toskabear-com/e4cyzhdur2?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		}
	];
</script>

<section class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
	<div class="mb-16 space-y-2 text-center">
		<h1 class="text-4xl font-bold tracking-tight">Portfolio</h1>
	</div>

	<div class="grid gap-16">
		{#each projects as { title, description, siteUrl, images, insightsUrl }}
			<div class="group relative rounded-sm border bg-white p-6 transition-all hover:shadow-lg">
				<!-- Project Header -->
				<div class="mb-6 flex items-center justify-between">
					<div>
						<h2 class="text-2xl font-semibold">{title}</h2>
						<p class="mt-2 text-gray-600">{description}</p>
					</div>
				</div>

				<!-- Project Screenshots -->
				<div class="space-y-6">
					<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
						<!-- Desktop Screenshot - Takes up 2 columns -->
						<div class="overflow-hidden lg:col-span-2">
							<a
								href={siteUrl}
								class="block overflow-hidden hover:opacity-75"
								target="_blank"
								aria-label="Desktop site {title}"
								rel="noopener noreferrer"
							>
								<enhanced:img
									src={images.desktop}
									alt="{title} desktop view"
									title="{title} on desktop"
									class="h-[400px] w-full object-contain dark:invert"
								/>
							</a>
						</div>

						<!-- Mobile Screenshot -->
						<div class="overflow-hidden">
							<a
								href="http://www.responsinator.com/?url={siteUrl}"
								class="block overflow-hidden hover:opacity-75"
								target="_blank"
								aria-label="Mobile site {title}"
								rel="noopener noreferrer"
							>
								<enhanced:img
									src={images.mobile}
									alt="{title} mobile view"
									title="{title} on mobile"
									class="mx-auto h-[400px] w-auto object-contain dark:invert"
								/>
							</a>
						</div>
					</div>

					<!-- Performance Score - Full width below -->
					<div class="flex w-full justify-center">
						<a
							href={insightsUrl}
							class="block overflow-hidden"
							target="_blank"
							aria-label="Performance scores for {title}"
							rel="noopener noreferrer"
						>
							<enhanced:img
								src={images.performance}
								alt="{title} performance scores"
								title="{title} performance scores"
								class="h-24 w-full object-contain hover:opacity-75 dark:invert"
							/>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
