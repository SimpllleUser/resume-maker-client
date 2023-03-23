<script setup lang="ts">
import { ref, Ref } from "vue";
import { YearMonthRange } from "../../common/types";
import InputTag from "../Input/InputTag.vue";
import YearMonthInputRange from "../Input/YearMonthInputRange.vue";
import BTemplate from "../UI/BTemplate.vue";
import BDuplicator from "../UI/BDuplicator.vue";
import FocusContainer from "../FocusContainer.vue";

interface ExperianceElement {
  date: YearMonthRange;
  place: string;
  position: string;
  description: string;
}

const testText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make 
      a type specimen book. It has survived not only five centuries,
       but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum`;

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

const mockExperiance: ExperianceElement = {
  position: "Front end Team Lead",
  place: 'google',
  date: mockDate,
  description: testText,
};

const experiances: Ref<Array<ExperianceElement>> = ref(
  [
    {
      position: "Front end Team Lead",
      place: 'google',
      date: mockDate,
      description: testText,
    },
    {
      position: "Front end Team Lead 2222",
      place: 'google 222',
      date: mockDate,
      description: '!!!!' + testText,
    },
  ]
);
const handleAdd = () => {
  experiances.value.push(mockExperiance);
};

const handleRemove = (index: number) => {
  experiances.value.splice(index, 1);
};
</script>

<template>
  <focus-container #default="{ focus }">
    <b-duplicator :properties="experiances" :allow-editable="focus" @add="handleAdd" @remove="handleRemove"
      #default="{ index }">
      <div class="my-2">
        <b-template>
          <template #details>
            <input-tag v-model="experiances[index].place" />
            <input-tag v-model="experiances[index].position" />
            <year-month-input-range v-model="experiances[index].date" />
          </template>
          <template #description>
            <input-tag v-model="experiances[index].description" />
          </template>
        </b-template>
      </div>
    </b-duplicator>
  </focus-container>
</template>

<style scoped></style>