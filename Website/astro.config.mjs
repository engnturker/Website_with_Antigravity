import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwindcss";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
