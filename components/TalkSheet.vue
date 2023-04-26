<script setup lang="ts">
import type { Talk } from 'composables/types'

const props = defineProps<{
  talk: Talk
}>()
</script>

<template>
  <div font-exo text-lg>
    <div v-if="talk.title" font-bold mb-2>
      {{ talk.title }}
    </div>
    <ul v-if="talk.speakers.length" mb-2>
      <li v-for="speaker in talk.speakers" :key="speaker">
        <UnoIcon i-mdi-user aria-hidden="false" inline-block relative top-2px /> {{ speaker }}
      </li>
    </ul>
    <ul v-if="talk.moderator" mb-2>
      <li>
        <UnoIcon i-mdi-microphone aria-hidden="false" inline-block relative top-2px />moderátor {{ talk.moderator }}
      </li>
    </ul>
    <p v-if="talk.description">
      {{ talk.description }}
    </p>
  </div>
</template>
