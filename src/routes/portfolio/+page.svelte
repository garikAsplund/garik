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
	import ecncDesktop from '$lib/portfolio/ecnc/desktop.png?enhanced';
	import ecncMobile from '$lib/portfolio/ecnc/mobile.png?enhanced';
	import ecncScores from '$lib/portfolio/ecnc/scores.png?enhanced';
	import pier303Desktop from '$lib/portfolio/pier303/desktop.png?enhanced';
	import pier303Mobile from '$lib/portfolio/pier303/mobile.png?enhanced';
	import pier303Scores from '$lib/portfolio/pier303/scores.png?enhanced';
	import OGCards from '$lib/OGCards.svelte';

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
			title: 'Pier 303 Seafood Market',
			description:
				'Small static site for a local seafood market in need of a web presence.',
			siteUrl: 'https://www.pier303seafood.com',
			images: {
				desktop: pier303Desktop,
				mobile: pier303Mobile,
				performance: pier303Scores
			},
			insightsUrl:
				'https://pagespeed.web.dev/analysis/https-www-pier303seafood-com/i587q2v8fl?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
		{
			title: 'Eagle Cap Nordic Club',
			description:
				'Made a club website to give up-to-date info on plowing status, events, and accept donations.',
			siteUrl: 'https://www.eaglecapnordic.org',
			images: {
				desktop: ecncDesktop,
				mobile: ecncMobile,
				performance: ecncScores
			},
			insightsUrl:
				'https://pagespeed.web.dev/analysis/https-www-eaglecapnordic-org/yflnq4g3xz?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
		{
			title: 'Alpine Meadows Golf Course',
			description:
				"Transformed an outdated website into a modern, responsive platform to showcase Wallowa County's only golf course. Integrated with Stripe for online membership payments.",
			siteUrl: 'https://golfalpinemeadows.vercel.app',
			images: {
				desktop: amgcDesktop,
				mobile: amgcMobile,
				performance: amgcScores
			},
			insightsUrl:
				'https://pagespeed.web.dev/analysis/https-golfalpinemeadows-vercel-app/4st6ws88tz?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
		{
			title: 'Asia Pacific Conference on Vision 2024',
			description:
				'Developed a clean, accessible website for a vision science conference in Singapore. Prioritized clear navigation and easy access to conference information for international attendees.',
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
			title: 'Cuyama Oaks Ranch',
			description:
				"Reimagined the ranch's web presence with a mobile-first approach, replacing a problematic Square Space design. Optimized for iOS users who comprise 75% of visitors, ensuring fast access to essential information.",
			siteUrl: 'https://cuyama-oaks.vercel.app',
			images: {
				desktop: corDesktop,
				mobile: corMobile,
				performance: corScores
			},
			insightsUrl:
				'https://pagespeed.web.dev/analysis/https-cuyama-oaks-vercel-app/9qy89rjcur?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
		{
			title: 'Range Rider',
			description:
				"Streamlined the user experience with a complete redesign that fits Range Rider's vibe and added a HTML-base food menu, enhanced SEO optimization, and dynamic open sign.",
			siteUrl: 'https://rangerider.netlify.app',
			images: {
				desktop: rangeRider,
				mobile: rangeRiderMobile,
				performance: rangeRiderScores
			},
			insightsUrl: 'https://pagespeed.web.dev/analysis/https-rangerider-netlify-app/nsw0f7do8w?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
		{
			title: 'Redd Sauna',
			description:
				"Enhanced the booking experience with robust form validation and automated confirmation emails. This thoughtful rebuild improves customer communication while maintaining the brand's aesthetic.",
			siteUrl: 'https://redd-sauna.vercel.app',
			images: {
				desktop: reddSaunaDesktop,
				mobile: reddSaunaMobile,
				performance: reddSaunaScores
			},
			insightsUrl:
				'https://pagespeed.web.dev/analysis/https-redd-sauna-vercel-app/t8702lm7ho?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		},
		{
			title: 'Toska Bear',
			description:
				'Elevated a simple link tree into an engaging artist presence. The new design adds depth and personality while maintaining quick access to essential links and videos.',
			siteUrl: 'https://www.toskabear.com',
			images: {
				desktop: toskaBearDesktop,
				mobile: toskaBearMobile,
				performance: toskaBearScores
			},
			insightsUrl:
				'https://pagespeed.web.dev/analysis/https-www-toskabear-com/e4cyzhdur2?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext'
		}
	];
</script>

<OGCards />

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
				<div class="space-y-4">
					<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
						<!-- Desktop Screenshot - Takes up 2 columns -->
						<div class="overflow-hidden lg:col-span-2">
							<a
								href={siteUrl}
								class="block overflow-hidden hover:opacity-95"
								target="_blank"
								aria-label="Desktop site {title}"
								rel="noopener noreferrer"
							>
								<enhanced:img
									src={images.desktop}
									alt="{title} desktop view"
									title="{title} on desktop"
									class="h-auto w-full object-contain"
								/>
							</a>
						</div>

						<!-- Mobile Screenshot -->
						<div class="overflow-hidden">
							<a
								href="http://www.responsinator.com/?url={siteUrl}"
								class="block overflow-hidden hover:opacity-95"
								target="_blank"
								aria-label="Mobile site {title}"
								rel="noopener noreferrer"
							>
								<enhanced:img
									src={images.mobile}
									alt="{title} mobile view"
									title="{title} on mobile"
									class="mx-auto h-[400px] w-auto object-contain"
								/>
							</a>
						</div>
					</div>

					<!-- Performance Score - Full width below -->
					<div class="flex w-full justify-center pt-4">
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
								class="h-24 w-full object-contain hover:opacity-75"
							/>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
