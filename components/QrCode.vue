<script setup lang="ts">
const [isOpen, toggleOpen] = useToggle(false)
</script>

<template>
  <a flex inline-block dashedlink @click="toggleOpen()">
    <UnoIcon i-mdi-qrcode aria-hidden="false" w-24px h-24px inline-block mr-2 />
    QR kód
  </a>
  <BasePopupWrapper v-model="isOpen">
    <div text-center mb-8>
      <p text-app-blue>
        Nasdílej program s kámošem:
      </p>
      <img src="/public/cb-program-qrcode.svg" alt="QR kód na program CryptoByte 2023" max-w-200px mx-auto>
      <NuxtLink to="https://cryptobyte.cz/program" text-xl dashedlink>
        cryptobyte.cz/program
      </NuxtLink>
    </div>
  </BasePopupWrapper>
</template>
