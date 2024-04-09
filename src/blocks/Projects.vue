<script setup>
import List from '../components/List.vue'
import ARACNA_LOGO from '../assets/projects/aracna.png'
import MODRON_LOGO from '../assets/companies/modron.svg'

const PROJECTS = [
  {
    description:
      'Aracna is a collection of more than 10+ libraries entirely written by me which aim to simplify and enhance Web and Node.js development. They are open source and available on github.com/queelag.',
    id: 'aracna',
    logo: ARACNA_LOGO,
    name: 'Aracna',
    subhead: 'aracna.dariosechi.it',
    time: '2021 - Present',
    website: 'https://aracna.dariosechi.it'
  },
  {
    description:
      'Modron is a telegram bot which makes it easy to play tabletop role-playing games via chat. It supports multiple systems such as D&D 5e, Mork Borg and potentially more given the scalability of the source code.',
    id: 'modron',
    logo: MODRON_LOGO,
    name: 'Modron',
    subhead: 'modron.one',
    time: '2020 - 2021',
    website: 'https://modron.one'
  }
]
</script>

<style>
#projects {
  li {
    &[data-id='modron'] {
      aracna-avatar {
        @apply p-1.5 bg-gray-800;
      }
    }
  }
}
</style>

<template>
  <div class="flex flex-col gap-8 mt-16" id="projects">
    <h2>Personal Projects</h2>
    <List
      id="projects"
      :items="
        PROJECTS.map((project) => ({
          headline: project.name,
          href: project.website,
          id: project.id,
          image: project.logo,
          subhead: project.subhead,
          surhead: project.time,
          text: project.description
        }))
      "
    />
  </div>
</template>
