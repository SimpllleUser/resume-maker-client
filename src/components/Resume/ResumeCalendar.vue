<script setup lang="ts">
import YearMonthInput from '../Input/YearMonthInput.vue';
</script>

<template>
    <div class="flex">
        ADD v-model and choose year | moth or year & moth
        <year-month-input startFromEnd/>
        <!-- <year-month-input present/> -->
    </div>
</template>

<style scoped></style>