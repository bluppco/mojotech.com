import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), react()],
	output: "server",
	adapter: cloudflare({
		routes: {
			exclude: ["/icons/*", "/logo/*", "/logo/*", "/_astro/*"]
		},
		runtime: {
			mode: 'local',
			type: 'pages'
		}
	}),
	image: {
		service: {
			entrypoint: "astro/assets/services/noop"
		}
	},
})
