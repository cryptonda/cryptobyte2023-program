<script setup lang="ts">
import type { Talk } from 'composables/types'
import data from '@/assets/data.json'

const props = defineProps<{
  talk: Talk
}>()

const stageName = computed(() => {
  const stage = data.stages.find(stage => stage.id === props.talk.stage)?.name
  return stage || 'nenalezeno'
})
</script>

<template>
  <div font-exo text-app-blue>
    <div>
      <LegendItem :format="talk.format" />
    </div>
    <div flex gap-4 justify-start my-2>
      <div v-if="talk.stage" mb-2>
        <UnoIcon i-mdi-map-marker aria-hidden="false" inline-block relative top-2px /> {{ stageName }}
      </div>
      <div v-if="talk.start" mb-2>
        <UnoIcon i-mdi-clock-outline aria-hidden="false" inline-block relative top-2px /> {{ talk.start }} ({{ talk.length }} minut)
      </div>
    </div>
    <div v-if="talk.title" font-bold my-2 text-2xl>
      {{ talk.title }}
    </div>
    <ul v-if="talk.speakers.length" my-2>
      <li v-for="speaker in talk.speakers" :key="speaker">
        <UnoIcon i-mdi-user aria-hidden="false" inline-block relative top-2px /> {{ speaker }}
      </li>
    </ul>
    <ul v-if="talk.moderator" my-2>
      <li>
        <UnoIcon i-mdi-microphone aria-hidden="false" inline-block relative top-2px />moderátor {{ talk.moderator }}
      </li>
    </ul>
    <p v-if="talk.description" my-4>
      {{ talk.description }}
    </p>
  </div>
</template>
