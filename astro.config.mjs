import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import playformCompress from "@playform/compress";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://baumohl.dev",

  integrations: [
    mdx({
      optimize: true,
    }),
    sitemap(),
    icon(),
    playformCompress(),
    react(),
  ],

  redirects: {
    "/blog": "/",
    "/pgp": "/blog/pgp-key/",
  },

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});