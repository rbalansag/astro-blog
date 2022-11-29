import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";
import image from "@astrojs/image";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [preact(), image()],
  adapter: netlify()
});