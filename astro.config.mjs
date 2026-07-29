import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [sitemap()],
  site: "https://astro-theme-creek.netlify.app/",
  vite: {
    plugins: [tailwindcss()],
  },
});
