<script setup>
import '@aracna/web-components/elements/data/avatar-element'
import '@aracna/web-components/elements/data/image-element'
import '@aracna/web-components/elements/data/icon-element'

const { items } = defineProps(['items'])
</script>

<style scoped>
li {
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
  <ul class="flex flex-col gap-8">
    <li v-for="item in items" class="flex justify-between" :data-id="item.id">
      <div class="flex-1 flex flex-col items-start">
        <span class="surhead">{{ item.surhead }}</span>
        <span class="headline">{{ item.headline }}</span>
        <span class="subhead">{{ item.subhead }}</span>
        <span class="text">{{ item.text }}</span>
      </div>
      <aracna-avatar v-if="typeof item.image === 'object'" shape="squircle" size="32">
        <img class="image" :src="item.image.src" />
      </aracna-avatar>
      <aracna-icon v-if="typeof item.icon === 'string'" fill="black" size="32" :src="item.icon" />
    </li>
  </ul>
</template>
