<script>
	import { ArrowRight } from 'lucide-svelte';
  import OGCards from '$lib/OGCards.svelte';

	const plans = [
		{
			title: 'Standard',
			description: 'Perfect for small business websites',
			price: '857',
			features: [
				'Custom Design',
				'Responsive Layout',
				'Content Management',
				'Basic SEO Setup',
				'Performance Optimization',
				'Documentation'
			]
		},
		{
			title: 'Advanced',
			description: 'Enhanced features for growing businesses',
			price: '1473',
			features: [
				'Custom Design',
				'Responsive Layout',
				'Content Management',
				'Advanced SEO',
				'Speed Optimization',
				'Conversion Focus',
				'Tutorial Session'
			]
		},
		{
			title: 'E-Commerce',
			description: 'Full-featured online store',
			price: '2219',
			features: [
				'Custom Design',
				'Responsive Layout',
				'Product Management',
				'Shopping Cart',
				'Payment Integration',
				'Advanced SEO',
				'Speed Optimization',
				'Tutorial Session'
			]
		}
	];
</script>

<OGCards />

<section class="flex w-full max-w-7xl flex-col items-center space-y-8 px-8 pt-12 md:px-16">
	<h1 class="text-center text-4xl font-semibold">Pricing</h1>
	<p class="text-center text-lg text-gray-700">Choose the plan that best fits your needs.</p>
	<div class="grid gap-8 pt-12 md:grid-cols-3">
		{#each plans as plan}
			<div class="flex flex-col rounded-lg border bg-white p-6">
				<div class="mb-8">
					<h3 class="mb-2 text-2xl font-semibold">{plan.title}</h3>
					<p class="text-base text-gray-600">{plan.description}</p>
				</div>

				<div class="mb-6">
					<span class="text-3xl font-bold">${plan.price}</span>
				</div>

				<ul class="mb-8 space-y-3">
					{#each plan.features as feature}
						<li class="flex items-start text-base">
							<span class="mr-2 text-green-500 dark:invert">✓</span>
							{feature}
						</li>
					{/each}
				</ul>

				<div class="mt-auto">
					<p class="mb-4 text-xs italic text-gray-500">
						Plus domain purchase and $10/month hosting fee
					</p>
					<a
						href="/contact"
						class="conic flex w-full items-center justify-center gap-2 rounded border border-gray-900 px-4 py-2 transition duration-300 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-red-500/50"
					>
						Get Started
						<ArrowRight size={16} />
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>
