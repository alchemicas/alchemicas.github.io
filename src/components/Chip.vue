<script setup>
import { AracnaImageElement } from '@aracna/web-components/elements/data/image-element'

const E = [AracnaImageElement]

const { headline, text, trailingIcon } = defineProps(['headline', 'text', 'trailingIcon'])
</script>

<style scoped>
div.chip {
  @apply px-4 py-2 rounded-full;
  @apply bg-black;

  &[has-trailing-icon] {
    @apply pr-3;
  }

  aracna-icon {
    @apply mb-px;
  }

  span {
    @apply text-white;

    &.headline {
      @apply font-bold text-xs;
    }
  }
}
</style>

<template>
  <div class="chip flex items-center gap-2" :has-trailing-icon="typeof trailingIcon === 'string'">
    <div class="flex flex-col gap-2">
      <span v-if="typeof headline === 'string'" class="headline">{{ headline }}</span>
      <span v-if="typeof text === 'string'" class="text">{{ text }}</span>
    </div>
    <aracna-icon v-if="typeof trailingIcon === 'string'" fill="#fbbf24" size="16" :src="trailingIcon" />
  </div>
</template>
