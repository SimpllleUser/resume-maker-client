<script setup lang="ts">
import { Ref, ref } from 'vue';
import InputTag from '../Input/InputTag.vue';
import YearMonthInputRange from '../Input/YearMonthInputRange.vue';
import { YearMonthRange } from '../../common/types';
import BTemplate from '../UI/BTemplate.vue';


const testText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make 
      a type specimen book. It has survived not only five centuries,
       but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum`;
const description: Ref<string> = ref(testText);
const place: Ref<string> = ref('University / School');
const date: Ref<YearMonthRange> = ref({
    from: {
        month: '',
        year: '',
    },
    to: {
        month: '',
        year: '',
    },
});
</script>

<template>
    <b-template>
        <template #details>
            <input-tag v-model="place" />
            <year-month-input-range v-model="date" />
        </template>
        <template #description>
            <input-tag v-model="description" />
        </template>
    </b-template>
</template>

<style scoped></style>