import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sanity from "@sanity/astro";
import react from "@astrojs/react";

const version = "16.13.1"; // Define the version of React you want to use

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  }),
  integrations: [
    sanity({
      projectId: "8cfjlcgg",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
    react(version),
  ],
});
