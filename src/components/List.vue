<script setup>
import ListItem from './ListItem.vue'

const { items } = defineProps(['items'])
</script>

<template>
  <ul class="flex flex-col gap-8">
    <ListItem
      v-for="{ headline, href, icon, id, image, subhead, surhead, text } in items"
      :headline="headline"
      :href="href"
      :icon="icon"
      :id="id"
      :image="image"
      :subhead="subhead"
      :surhead="surhead"
      :text="text"
    />
  </ul>
</template>
