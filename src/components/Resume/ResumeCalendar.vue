<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';

const date = ref({ "month": 11, "year": 2023 });
</script>

<template>
    <div>
        {{ date }}
        <vue-date-picker v-model="date" month-picker/>
    </div>
</template>

<style scoped>

</style>