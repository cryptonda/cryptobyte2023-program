<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'
import type { ModalSize } from './BaseModal.vue'

import BaseModal from './BaseModal.vue'
import BaseBottomSheet from './BaseBottomSheet.vue'

// unocss safelist
// md:w-720px md:w-920px md:w-400px
// NFT Miss Figma requires md:w-800px :)

interface Props {
  modelValue?: boolean
  isClosable?: boolean
  size?: ModalSize
  bgColor?: string
  initialFocus?: HTMLElement
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  isClosable: true,
  size: '800px',
  bgColor: '',
})

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'update:modelValue', value: boolean): void
}>()

const isOpen = useVModel(props, 'modelValue', emit, { passive: true })

function close(): void {
  if (!props.isClosable)
    return

  isOpen.value = false
  emit('close')
}

const isDesktop = useMediaQuery('(min-width: 640px)')
</script>

<template>
  <ClientOnly>
    <Component :is="isDesktop ? BaseModal : BaseBottomSheet" v-model="isOpen" :is-closable="isClosable" :size="size" :bg-color="bgColor" :initial-focus="initialFocus" @close="close">
      <slot />
    </Component>
  </ClientOnly>
</template>
