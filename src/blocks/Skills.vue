<script setup>
import { ICON_MS_STAR_FILL_S24_W500 } from '@aracna-icons/material-symbols-rounded-fill-s24-w500'
import Chip from '../components/Chip.vue'

const SKILLS = [
  { name: 'Apache Cassandra', years: 1 },
  { name: 'Astro', years: 2 },
  { name: 'CPP', years: 1 },
  { name: 'CSS', star: true, years: 8 },
  { name: 'Emscripten', years: 1 },
  { name: 'Firebase', years: 6 },
  { name: 'HTML', star: true, years: 8 },
  { name: 'Git', star: true, years: 8 },
  { name: 'GraphQL', years: 3 },
  { name: 'Javascript', star: true, years: 8 },
  { name: 'Next.js', star: true, years: 5 },
  { name: 'Nivo Charts', years: 5 },
  { name: 'Node.js', star: true, years: 8 },
  { name: 'PostgreSQL', years: 5 },
  { name: 'Prisma', years: 5 },
  { name: 'Puppeteer', years: 5 },
  { name: 'React', star: true, years: 8 },
  { name: 'REST APIs Development & Integration', star: true, years: 8 },
  // { name: 'Shopify Apps Development', years: 1 },
  { name: 'Storybook', years: 5 },
  { name: 'Tailwind CSS', star: true, years: 5 },
  { name: 'Telegram Bots Development', years: 1 },
  { name: 'Typescript', star: true, years: 6 },
  { name: 'Unit Tests', star: true, years: 8 },
  { name: 'WebAssembly', years: 1 },
  { name: 'WebSockets', star: true, years: 8 }
]
</script>

<template>
  <div class="lg:col-span-2 flex flex-col gap-8 mt-16">
    <h2>Skills</h2>
    <div class="flex flex-wrap gap-2">
      <Chip v-for="skill in SKILLS" :headline="skill.name" :trailing-icon="skill.star ? ICON_MS_STAR_FILL_S24_W500 : undefined" />
    </div>
    <span class="max-w-md text-xs"
      >The <aracna-icon fill="#facc15" size="12" :src="ICON_MS_STAR_FILL_S24_W500" /> indicates that I have several years of experience and mastery over the
      skill.</span
    >
  </div>
</template>
