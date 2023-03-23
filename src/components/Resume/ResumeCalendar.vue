<script setup lang="ts">
import { ref } from 'vue';
import YearMonthInputRange from '@/components/Input/YearMonthInputRange.vue';

const dateRange = ref({
    from: { year: '', month:'' },
    to: { year: '', month:'' },
});
</script>

<template>
    <div>
        <year-month-input-range v-model="dateRange" />
    </div>
</template>

<style scoped></style>