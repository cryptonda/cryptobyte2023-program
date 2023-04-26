<script lang="ts" setup>
interface Props {
  modelValue?: boolean
  isClosable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  isClosable: true,
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
</script>

<template>
  <ClientOnly>
    <BaseBottomSheet v-model="isOpen" :is-closable="isClosable" @close="close">
      <slot />
    </BaseBottomSheet>
  </ClientOnly>
</template>
