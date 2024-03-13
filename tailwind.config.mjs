/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			screens: {
				'mac': '1440px'
			},

			fontFamily: {
				"gt_america_regular": ["GT America Standard Regular", "sans-serif"],
				"gt_america_light": ["GT America Standard Thin", "sans-serif"],
				"altis": ["Altis Regular", "sans-serif"],
			},

			colors: {
				"mojo_black": "#14111D",
				"mojo_dark_green": "#1E4D32",
				"mojo_zinc": "#F0F0F0"
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
}