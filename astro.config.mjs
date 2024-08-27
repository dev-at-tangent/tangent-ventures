import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import partytown from '@astrojs/partytown'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    assetsInclude: ["**/*.lottie"],
  },
  integrations: [
    react(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
