<script lang="ts">
	import ContactForm from '$lib/ContactForm.svelte';
	import OGCards from '$lib/OGCards.svelte';

	let { data } = $props();
</script>

<OGCards />

<section class="flex w-full flex-col items-center space-y-8 px-8 pt-12 md:px-16">
	<h1 class="text-4xl font-semibold">Contact</h1>
	<p class="text-lg">Want to work together? Fill out the form below!</p>
	<ContactForm {data} />
</section>
