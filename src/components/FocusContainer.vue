<script setup lang="ts">
import { ref, watch } from 'vue';

import { useFocusWithin } from '@vueuse/core'

const target = ref();
const { focused } = useFocusWithin(target)

interface Emits {
  (event: 'focus', payload: boolean): void;
  (event: 'blur', payload: boolean): void;
}

const emit = defineEmits<Emits>();

watch(focused, focused => {
    if (focused) emit('focus', focused);
    emit('blur', focused);
})

</script>

<template>
    <div ref="target"  tabindex="-1">
        <slot name="header"></slot>
        <slot :focus="focused"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<style scoped>

</style>