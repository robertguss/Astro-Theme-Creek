import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
 
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights:{
      enabled: true,
    },
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
  })
})
