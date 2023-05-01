<script lang="ts" setup>
import type { Speaker } from 'composables/types'
import data from '@/assets/data.json'

interface Props {
  id: string
  type?: 'simple' | 'full'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'simple',
})

const speaker = computed(() => {
  return data.speakers.find((speaker: Speaker) => speaker.id === props.id)
})
</script>

<template>
  <span v-if="type === 'simple'">
    {{ speaker.name }}
  </span>

  <div v-else flex gap-2 items-center>
    <div v-if="speaker.img.length">
      <img :src="`speakers/${speaker.img}`" w-45px h-45px rounded-full drop-shadow>
    </div>
    <div v-else>
      <img src="/public/speaker.svg" w-45px h-45px rounded-full drop-shadow>
    </div>
    <div>
      <div text-16px>
        {{ speaker.name }}
      </div>
      <div v-if="speaker.description" text-12px>
        {{ speaker.description }}
      </div>
    </div>
  </div>
</template>
