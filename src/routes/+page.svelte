<script lang="ts">
	import ContactForm from '$lib/ContactForm.svelte';
	import { onMount } from 'svelte';
	import random from 'canvas-sketch-util/random';
	import { mapRange } from 'canvas-sketch-util/math';

	const { noise2D } = random;

	let canvas = $state();

	onMount(() => {
		const ctx = canvas.getContext('2d')!;
		const width = (canvas.width = window.innerWidth);
		const height = (canvas.height = window.innerHeight);

		// Grid settings
		const cols = 99;
		const rows = 200;
		const numCells = cols * rows;

		// Grid dimensions
		const gw = width * 0.8;
		const gh = height * 0.8;
		const cw = gw / cols;
		const ch = gh / rows;

		// Margins
		const mx = (width - gw) * 0.5;
		const my = (height - gh) * 0.5;

		// Noise and color settings
		const frequency = 0.003;
		const amplitude = 39;

		// Points array
		const points = Array.from({ length: numCells }, (_, i) => {
			const x = (i % cols) * cw + mx;
			const y = Math.floor(i / cols) * ch + my;
			const n = noise2D(x, y, frequency, amplitude);
			const lineWidth = mapRange(n, -amplitude, amplitude, 22, 7);
			const color = `hsl(${mapRange(n, -amplitude, amplitude, 333, 250)}, 70%, 95%)`;

			return { x, y, ix: x, iy: y, lineWidth, color };
		});

		let frame = 0;
		const animate = () => {
			ctx.clearRect(0, 0, width, height);

			// Update grid points
			for (let i = 0; i < points.length; i++) {
				const point = points[i];
				const n = noise2D(point.ix + frame * 2, point.iy, frequency, amplitude);
				point.x = point.ix + n;
				point.y = point.iy + n;
			}

			ctx.lineWidth = 1;

			// Draw grid points
			for (let i = 0; i < points.length; i++) {
				const point = points[i];
				ctx.beginPath();
				ctx.arc(point.x, point.y, point.lineWidth * 0.2, 0, Math.PI * 2);
				ctx.fillStyle = point.color;
				ctx.fill();
			}

			frame += 0.2;
			requestAnimationFrame(animate);
		};

		animate();
	});

	let { data } = $props();
</script>

<div class="relative flex w-full flex-col items-center">
	<canvas bind:this={canvas} class="absolute inset-0 z-10 h-[70vh] w-full"></canvas>
	<div class="z-20">
		<div class="flex max-w-4xl flex-col justify-center space-y-4 px-8 pt-32 lg:space-y-8">
			<h2 class="px-4 text-4xl lg:px-8">Building simple, elegant websites</h2>
			<p class="px-8 md:text-lg lg:px-16 lg:text-xl">
				I'm an independent full-stack software engineer who focuses on creating websites for <strong
					>small businesses in need of a glow up</strong
				>.
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
				class="mt-8 inline-flex items-center space-x-3 border-2 border-black px-4 py-2 text-xl md:mt-16"
			>
				<div class="flex items-center hover:opacity-75">
					<p>See my work</p>
				</div>
			</a>
		</div>
		<div class="flex w-full justify-center px-4 py-16">
			<ContactForm {data} />
		</div>
	</div>
</div>
