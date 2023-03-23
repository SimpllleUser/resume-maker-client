<script setup lang="ts">
import { ref, Ref } from "vue";

import InputTag from "@/components/Input/InputTag.vue";
import YearMonthInputRange from "@/components/Input/YearMonthInputRange.vue";

import BTemplate from "@/components/UI/BTemplate.vue";
import BDuplicator from "@/components/UI/BDuplicator.vue";

import FocusContainer from "@/components/FocusContainer.vue";

import { YearMonthRange } from "@/common/types";

interface EducationElement {
    description: string;
    place: string;
    date: YearMonthRange;
}

const mockDate: YearMonthRange = {
    from: {
        month: "",
        year: "",
    },
    to: {
        month: "",
        year: "",
    },
};

const testText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make 
      a type specimen book. It has survived not only five centuries.`;

const defaultEducation: EducationElement = {
    place: 'Oxford',
    description: testText,
    date: mockDate,
}


const educations: Ref<Array<EducationElement>> = ref([ { ...defaultEducation } ]);

const handleAdd = () => {
    educations.value.push(defaultEducation);
};

const handleRemove = (index: number) => {
    educations.value.splice(index, 1);
};
</script>

<template>
    <focus-container #default="{ focus }">
        <b-duplicator :properties="educations" :allow-editable="focus" @add="handleAdd" @remove="handleRemove"
            #default="{ index }">
            <div class="my-6">
                <b-template>
                    <template #details>
                        <input-tag v-model="educations[index].place" />
                        <year-month-input-range v-model="educations[index].date" disable="month" />
                    </template>
                    <template #description>
                        <input-tag v-model="educations[index].description" />
                    </template>
                </b-template>
            </div>
        </b-duplicator>
    </focus-container>
</template>

<style scoped></style>