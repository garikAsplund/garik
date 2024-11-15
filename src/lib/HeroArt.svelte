<script lang="ts">
	import { onMount } from 'svelte';
	import random from 'canvas-sketch-util/random';
	import { mapRange } from 'canvas-sketch-util/math';

	const { noise2D } = random;

	let canvas = $state();
    let enableAnimation = $state(false);


	onMount(() => {
        const isLargeScreen = window.innerWidth > 768;
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (!isLargeScreen || prefersReducedMotion) return;

		enableAnimation = true; 
        
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
            if (!enableAnimation) return; // Stop animation if disabled

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
</script>

<canvas bind:this={canvas} class="absolute inset-0 z-10 h-[70vh] w-full"></canvas>
