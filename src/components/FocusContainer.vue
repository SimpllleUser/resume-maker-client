<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFocusWithin } from '@vueuse/core'

const target = ref();
const { focused } = useFocusWithin(target)

const emit = defineEmits(['focus', 'blur']);

watch(focused, focused => {
    const emitName = focused ? 'focus' : 'blur';
    return emit(emitName, focused);
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