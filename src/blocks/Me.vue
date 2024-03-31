<script setup>
import { ImageElement } from '@aracna/web-components/elements/data/image-element'
import PORTRAIT from '../assets/portrait.jpg'
</script>

<style scoped>
aracna-image {
  @apply rounded-[32px];
  @apply ring-[3px] ring-offset-8 ring-black;
}
</style>

<template>
  <div class="flex flex-col gap-12">
    <h1>Hey,<br />I'm<br />Dario</h1>
    <aracna-image height="198" :src="PORTRAIT.src" width="160" />
    <div class="flex flex-col gap-2">
      <h2>Contacts</h2>
      <div class="flex flex-col">
        <a class="text-sm underline" href="mailto:dario.sechi.rnd@gmail.com">dario.sechi.rnd@gmail.com</a>
        <a class="text-sm underline" href="https://www.linkedin.com/in/dario-sechi-790/">linkedin.com/in/dario-sechi-790</a>
      </div>
    </div>
  </div>
</template>
