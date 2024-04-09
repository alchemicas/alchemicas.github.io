<script setup>
import DATBRAIN_LOGO from '../assets/companies/datbrain.png'
import KEYLESS_LOGO from '../assets/companies/keyless.svg'
import MODRON_LOGO from '../assets/companies/modron.svg'
import TOGETHER_PRICE_LOGO from '../assets/companies/together-price.png'
import TOKEDO_LOGO from '../assets/companies/tokedo.svg'
import List from '../components/List.vue'

const JOBS = [
  {
    company: 'Keyless Technologies',
    history: `Keyless has been for sure the most enjoyable working experience I've had so far. Working for a cybersecurity company gives a lot of opportunities to work with more niche technologies and APIs.`,
    id: 'keyless',
    logo: KEYLESS_LOGO,
    position: 'Front End Lead',
    time: '2021 - Present'
  },
  {
    company: 'Datbrain LTD',
    history: `My time in Datbrain was rather short but I still enjoyed it nonetheless. I had the chance to work with Angular and develop an app for the Shopify App Store, it was very different from my main stack.`,
    id: 'datbrain',
    logo: DATBRAIN_LOGO,
    position: 'Full Stack Developer',
    time: '2020 - 2021'
  },
  {
    company: 'Modron',
    history: `Modron was a passion project that I came up with and tried to lead to success with some friends. It was a learning experience in terms of leadership and project management, but also in terms of engineering since I was the sole developer.`,
    id: 'modron',
    logo: MODRON_LOGO,
    position: 'Full Stack Developer',
    time: '2020 - 2021'
  },
  {
    company: 'Together Price',
    history: `Joining Together Price was extremely important for my career, being a quickly growing startup I had to push myself to the limits of what I was capable of accomplishing in terms of development and choice making.`,
    id: 'together-price',
    logo: TOGETHER_PRICE_LOGO,
    position: 'Front End Developer',
    time: '2018 - 2019'
  },
  {
    company: 'Tokedo',
    history: `Tokedo was my first working experience, I learned how to work in a team and the importance of getting things done. I quickly grasped how to use React and React Native to build web and hybrid mobile applications.`,
    id: 'tokedo',
    logo: TOKEDO_LOGO,
    position: 'Front End Developer',
    time: '2018 - 2018'
  }
]
</script>

<style>
#jobs {
  li {
    &[data-id='datbrain'] {
      aracna-avatar {
        @apply p-1.5 bg-blue-950;
      }
    }

    &[data-id='modron'] {
      aracna-avatar {
        @apply p-1.5 bg-gray-800;
      }
    }

    &[data-id='together-price'] {
      aracna-avatar {
        @apply p-1.5;
        background: linear-gradient(151deg, #fc5c72, #e35e90 25%, #6564fd);
      }
    }

    &[data-id='tokedo'] {
      aracna-avatar {
        @apply p-2.5 bg-green-950;
      }
    }
  }
}
</style>

<template>
  <div class="flex flex-col gap-8 lg:mt-16">
    <h2>Work Experience</h2>
    <List
      id="jobs"
      :items="
        JOBS.map((job) => ({
          headline: job.position,
          id: job.id,
          image: job.logo,
          subhead: job.company,
          surhead: job.time,
          text: job.history
        }))
      "
    />
  </div>
</template>
