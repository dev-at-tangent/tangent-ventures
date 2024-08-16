import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    assetsInclude: ['**/*.lottie'],
  },
  integrations: [react(), tailwind()],
  devToolbar: {
    enabled: false,
  },
});
