<script setup>
import '@aracna/web-components/elements/data/icon-element'
import Chip from '../components/Chip.vue'
import { ICON_MS_STAR_W500 } from '@aracna/icons-material-symbols-rounded-os24-fill/assets/star'

const SKILLS = [
  { name: 'Apache Cassandra', years: 1 },
  { name: 'CSS', star: true, years: 6 },
  { name: 'Firebase', years: 6 },
  { name: 'HTML', star: true, years: 6 },
  { name: 'Git', star: true, years: 6 },
  { name: 'GraphQL', years: 3 },
  { name: 'Javascript', star: true, years: 6 },
  { name: 'Next.js', star: true, years: 3 },
  { name: 'Nivo Charts', years: 3 },
  { name: 'Node.js', star: true, years: 6 },
  { name: 'PostgreSQL', years: 3 },
  { name: 'Prisma', years: 3 },
  { name: 'Puppeteer', years: 3 },
  { name: 'React', star: true, years: 6 },
  { name: 'REST APIs Development & Integration', star: true, years: 6 },
  { name: 'Shopify Apps Development', years: 1 },
  { name: 'Storybook', years: 3 },
  { name: 'Tailwind CSS', star: true, years: 3 },
  { name: 'Telegram Bots Development', star: true, years: 1 },
  { name: 'Typescript', star: true, years: 4 },
  { name: 'Unit Tests', star: true, years: 6 },
  { name: 'WebSockets', star: true, years: 6 }
]
</script>

<template>
  <div class="flex flex-col gap-8 mt-16">
    <h2>Skills</h2>
    <div class="flex flex-wrap gap-2">
      <Chip v-for="skill in SKILLS" :headline="skill.name" :trailing-icon="skill.star ? ICON_MS_STAR_W500 : undefined" />
    </div>
    <span class="text-xs"
      >The skills with the <aracna-icon fill="#facc15" size="12" :src="ICON_MS_STAR_W500" /> indicate that I have several years of experience and mastery over
      the skill.</span
    >
  </div>
</template>
