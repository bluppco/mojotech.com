/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {

			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'mac': '1440px',
			'2xl': '1536px'

		},
		extend: {

			colors: {

				"mojo_black": "#14111D",
				"mojo_dark_green": "#1E4D32",
				"mojo_zinc": "#F0F0F0"

			}
		},
	},
	plugins: [],
}
