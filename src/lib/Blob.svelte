<div class="gradient absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:!hue-rotate-60 dark:!blur-[89px] dark:opacity-70"></div>

<style>
	@keyframes rotate {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	.gradient {
		--size: 80px;
		--speed: 25s;
		--easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
		width: var(--size);
		height: var(--size);
		filter: blur(calc(var(--size) * 0.14));
		background-image: linear-gradient(hsla(287, 94%, 63%, 0.473), hsla(36, 100%, 63%, 0.509));
		animation: rotate var(--speed) var(--easing) alternate infinite;
		border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
		pointer-events: none;
	}

	@media (min-width: 720px) {
		.gradient {
			--size: 500px;
		}
	}
</style>
