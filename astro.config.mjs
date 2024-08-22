import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    assetsInclude: ['**/*.lottie']
  },
  integrations: [react(), tailwind()],
  devToolbar: {
    enabled: false
  },
  output: "hybrid",
  adapter: vercel()
});