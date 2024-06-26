import lit from '@astrojs/lit'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), tailwind({ nesting: true }), vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('aracna-') } } })]
})
