<script setup lang="ts">
import { ref } from 'vue';
import InputTag from '../Input/InputTag.vue';

const fullName = ref('User full name');
const position = ref('User position');
</script>

<template>
    <div class="text-center">
        <input-tag v-model="fullName" class="text-2xl font-bold"/>
        <input-tag v-model="position" class="text-xl"/>
    </div>
</template>

<style lang="scss" scoped>

</style>