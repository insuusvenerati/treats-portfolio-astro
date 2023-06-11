import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig, sharpImageService } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "server",
  adapter: cloudflare(),
  experimental: {
    assets: false,
  },
  // image: {
  //   service: sharpImageService(),
  // },
});
