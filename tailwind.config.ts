import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts,svx,md}'], 
	darkMode: 'selector',

	theme: {
		extend: {}
	},

	plugins: [typography, forms]
} satisfies Config;
