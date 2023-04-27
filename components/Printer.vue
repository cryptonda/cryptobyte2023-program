<script setup lang="ts">
const [isOpen, toggleOpen] = useToggle(false)
</script>

<template>
  <a flex inline-block dashedlink @click="toggleOpen()">
    <UnoIcon i-mdi-printer-outline aria-hidden="false" w-24px h-24px inline-block mr-2 />
    Tisknout
  </a>
  <BasePopupWrapper v-model="isOpen">
    <div>Místo tohoto okna by se mohla zobrazit PDF verze k vytisknutí</div>
  </BasePopupWrapper>
</template>
