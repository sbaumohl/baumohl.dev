import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://baumohl.dev",
  integrations: [mdx({
    optimize: true,
  }), sitemap(), tailwind(), icon(), playformCompress()],
  redirects: {
    '/blog': '/',
  }
});