<script>
    import { ArrowRight } from 'lucide-svelte';
  
    const plans = [
      {
        title: "Standard",
        description: "Perfect for small business websites",
        price: "857",
        features: [
          "Custom Design",
          "Responsive Layout",
          "Content Management",
          "Basic SEO Setup",
          "Performance Optimization",
          "Documentation"
        ]
      },
      {
        title: "Advanced",
        description: "Enhanced features for growing businesses",
        price: "1473",
        features: [
          "Custom Design",
          "Responsive Layout",
          "Content Management",
          "Advanced SEO",
          "Speed Optimization",
          "Conversion Focus",
          "Tutorial Session"
        ]
      },
      {
        title: "E-Commerce",
        description: "Full-featured online store",
        price: "2219",
        features: [
          "Custom Design",
          "Responsive Layout",
          "Product Management",
          "Shopping Cart",
          "Payment Integration",
          "Advanced SEO",
          "Speed Optimization",
          "Tutorial Session"
        ]
      }
    ];
  </script>
  
  <section class="flex w-full flex-col items-center space-y-8 pt-12 md:px-16 px-8 max-w-7xl">
	<h1 class="text-4xl font-semibold text-center">Pricing</h1>
    <div class="grid md:grid-cols-3 gap-8 pt-12">
      {#each plans as plan}
        <div class="flex flex-col p-6 bg-white border rounded-lg">
          <div class="mb-8">
            <h3 class="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p class="text-base text-gray-600">{plan.description}</p>
          </div>
          
          <div class="mb-6">
            <span class="text-3xl font-bold">${plan.price}</span>
          </div>
          
          <ul class="space-y-3 mb-8">
            {#each plan.features as feature}
              <li class="flex items-start text-base">
                <span class="text-green-500 mr-2 dark:invert">✓</span>
                {feature}
              </li>
            {/each}
          </ul>
          
          <div class="mt-auto">
            <p class="text-xs text-gray-500 mb-4 italic">
              Plus $74/per additional page
            </p>
            <a href="/contact" class="w-full bg-gray-900 text-gray-100  py-2 px-4 rounded hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      {/each}
    </div>
</section>