<script setup lang="ts">
import type { talkFormat } from 'composables/types'
import data from '@/assets/data.json'

const props = defineProps<{
  format: talkFormat
}>()

const formatName = computed(() => {
  const retVal = data.formats.find(format => format.id === props.format)?.name
  return retVal || 'nenalezeno'
})

const formatStyle: { [key in talkFormat]: string } = {
  intro: 'bg-app-intro',
  presentation: 'bg-app-presentation',
  workshop: 'bg-app-workshop',
  panel: 'bg-app-panel',
  break: 'bg-gray',
  side: 'bg-app-side',
}
</script>

<template>
  <div flex gap-1>
    <div :class="formatStyle[props.format]" opacity-50 my-auto mx-4px w-10px h-10px rounded-4px /> <div>{{ formatName }}</div>
  </div>
</template>
