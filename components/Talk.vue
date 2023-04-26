<script setup lang="ts">
import data from '@/assets/data.json'

export type talkFormat = 'intro' | 'presentation' | 'workshop' | 'panel' | 'break'

interface Talk {
  id: string
  format: string
  title: string
  description: string
  speakers: string[]
}

const props = defineProps<{
  id: string
}>()

const talk = computed(() => {
  return data.talks.find((talk: Talk) => talk.id === props.id)
})

const talkStyle: { [key in talkFormat]: string } = {
  intro: 'bg-app-intro text-app-blue',
  presentation: 'bg-app-presentation text-app-blue bg-opacity-20',
  workshop: 'bg-app-workshop text-app-blue',
  panel: 'bg-app-panel',
  break: 'bg-gray',
}
</script>

<template>
  <td
    v-if="talk" max-w-150px
    font-exo rounded-1 text-sm :class="talkStyle[talk.format]" bg-opacity-30 hover:bg-opacity-40
    p-2 whitespace-normal align-top
  >
    <div v-if="talk.speakers.length" mb-2>
      {{ talk.speakers.join(", ") }}
    </div>
    <div v-if="talk.title" font-bold mb-2>
      {{ talk.title }}
    </div>
    <p v-if="talk.description" text-xs>
      {{ talk.description }}
    </p>
  </td>
  <td v-else class="error">
    Nenalezeno
  </td>
</template>
