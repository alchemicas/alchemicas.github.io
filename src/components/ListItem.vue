<script setup>
import { AracnaAvatarElement } from '@aracna/web-components/elements/data/avatar-element'
import { AracnaIconElement } from '@aracna/web-components/elements/data/icon-element'

const E = [AracnaAvatarElement, AracnaIconElement]

const { headline, href, icon, id, image, subhead, surhead, text } = defineProps(['headline', 'href', 'icon', 'id', 'image', 'subhead', 'surhead', 'text'])
</script>

<style scoped>
li {
  a {
    @apply flex justify-center items-center px-4 py-2 rounded-full mt-6;
    @apply font-bold text-xs;
    @apply bg-black text-white;
  }

  img {
    @apply w-8 h-8 object-contain;
  }

  span.surhead {
    @apply text-xs text-gray-500;
  }

  span.headline {
    @apply font-bold mt-2;
  }

  span.subhead {
    @apply mt-1;
  }

  span.text {
    @apply text-sm mt-4;
    @apply text-gray-500;
  }
}
</style>

<template>
  <li class="flex justify-between" :data-id="id">
    <div class="flex-1 flex flex-col items-start">
      <span class="surhead">{{ surhead }}</span>
      <span class="headline">{{ headline }}</span>
      <span class="subhead">{{ subhead }}</span>
      <span class="text">{{ text }}</span>
      <a v-if="typeof href === 'string'" :href="href" target="_blank">Visit Website</a>
    </div>
    <aracna-avatar v-if="typeof image === 'object'" shape="squircle" size="32">
      <img class="image" :src="image.src" />
    </aracna-avatar>
    <aracna-icon v-if="typeof icon === 'string'" fill="black" size="32" :src="icon" />
  </li>
</template>
