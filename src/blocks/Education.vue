<script setup>
import List from '../components/List.vue'
import { ICON_MS_SCHOOL_W500 } from '@aracna/icons-material-symbols-rounded-os24-fill/assets/school'
import { ICON_MS_GLOBE_W500 } from '@aracna/icons-material-symbols-rounded-os24-fill/assets/globe'
import { ICON_MS_CODE_BLOCKS_W500 } from '@aracna/icons-material-symbols-rounded-os24-fill/assets/code-blocks'

const EDUCATIONS = [
  {
    icon: ICON_MS_CODE_BLOCKS_W500,
    id: 'born2code',
    qualification: 'Junior Front End Developer',
    school: 'Born2Code Academy',
    text: 'In 2017 I had the luck of being selected for a scholarship at Born2Code Academy, where I learned the basics of web development and I started my journey as a Front End Developer.',
    time: '2017'
  },
  {
    icon: ICON_MS_GLOBE_W500,
    id: 'english-b2-first',
    qualification: 'English B2 First Certificate',
    school: 'Cambridge English Language Assessment',
    text: `Knowing that it would've been an essential part of my future career, I focused on improving my English proficiency and I achieved a B2 First Certificate in 2016.`,
    time: '2016'
  },
  {
    icon: ICON_MS_SCHOOL_W500,
    id: 'high-school',
    qualification: 'High School Diploma',
    school: 'Liceo Scientifico Europa Unita',
    text: 'I graduated from this scientific high school in 2016 with a score of 78/100.',
    time: '2011 - 2016'
  }
]
</script>

<template>
  <div class="flex flex-col gap-8 mt-16">
    <h2>Education</h2>
    <List
      id="education"
      :items="
        EDUCATIONS.map((education) => ({
          headline: education.qualification,
          icon: education.icon,
          id: education.id,
          subhead: education.school,
          surhead: education.time,
          text: education.text
        }))
      "
    />
  </div>
</template>
