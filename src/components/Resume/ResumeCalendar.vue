<script setup lang="ts">
import { ref } from 'vue';
import YearMonthInput from '../Input/YearMonthInput.vue';

const dateYear = ref({ year: '', month:'' });
</script>

<template>
    <div class="flex">
        <year-month-input v-model="dateYear" present startFromEnd />
    </div>
</template>

<style scoped></style>