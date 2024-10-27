/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
			screens: {
				'pc': '1920px',  // Monitor grande
				'laptop': '1280px',  // Laptops
			  }
		},
	},
	plugins: [],
}
