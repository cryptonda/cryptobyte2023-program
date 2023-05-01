<script setup lang="ts">
import type { Talk, talkFormat } from 'composables/types'
import data from '@/assets/data.json'

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
  side: 'bg-app-side',
}

const [isOpen, toggleOpen] = useToggle(false)

function rows(l: number) {
  let span = 1
  if (l > 40)
    span = 2
  if (l >= 160)
    span = 6

  if (l >= 460)
    span = 16

  return span
}
</script>

<template>
  <td
    v-if="talk"
    min-w-200px font-exo
    rounded-1 text-sm :class="talkStyle[talk.format]" bg-opacity-30 hover:bg-opacity-40 p-2
    whitespace-normal align-top cursor-pointer text-app-blue :rowspan="rows(talk.length)"
    @click="toggleOpen()"
  >
    <div v-if="talk.title" font-bold mb-2>
      {{ talk.title }}
    </div>
    <ul v-if="talk.speakers.length" mb-2>
      <li v-for="speaker in talk.speakers" :key="speaker">
        <UnoIcon i-mdi-user aria-hidden="false" inline-block relative top-2px /> <Speaker :id="speaker" />
      </li>
    </ul>
    <ul v-if="talk.moderator" mb-2>
      <li>
        <UnoIcon i-mdi-microphone aria-hidden="false" inline-block relative top-2px /> moderuje <Speaker :id="talk.moderator" />
      </li>
    </ul>
    <div v-if="talk.format === 'side'">
      <p v-if="talk.description" class="description" text-xs v-html="markdownIt(talk.description)" />
    </div>
    <div v-else>
      <div v-if="talk.description" text-xs v-html="shortenText(markdownIt(talk.description))" />
    </div>
    <BasePopupWrapper v-model="isOpen">
      <TalkSheet :talk="talk" />
    </BasePopupWrapper>
  </td>
  <td v-else class="error">
    Nenalezeno
  </td>
</template>
