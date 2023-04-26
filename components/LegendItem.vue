<script setup lang="ts">
import type { talkFormat } from 'composables/types'

const props = defineProps<{
  format: talkFormat
}>()

const formatStyle: { [key in talkFormat]: string } = {
  intro: 'bg-app-intro',
  presentation: 'bg-app-presentation',
  workshop: 'bg-app-workshop',
  panel: 'bg-app-panel',
  break: 'bg-gray',
}
</script>

<template>
  <div :class="formatStyle[props.format]" bg-app-intro opacity-50 my-auto mx-4px w-10px h-10px rounded-4px /> <div>zahájení</div>
</template>
