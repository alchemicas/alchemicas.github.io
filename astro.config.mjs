import lit from '@astrojs/lit'
import vue from '@astrojs/vue'
import tailwind from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [lit(), vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('aracna-') } } })],
  vite: {
    plugins: [tailwind()]
  }
})
