<script setup lang="ts">
import { ref, Ref } from "vue";

import InputTag from "@/components/Input/InputTag.vue";
import YearMonthInputRange from "@/components/Input/YearMonthInputRange.vue";

import BTemplate from "@/components/UI/BTemplate.vue";
import BDuplicator from "@/components/UI/BDuplicator.vue";

import FocusContainer from "@/components/FocusContainer.vue";

import { YearMonthRange } from "@/common/types";
import { useVModel } from "@vueuse/core";

interface ExperianceElement {
  date: YearMonthRange;
  place: string;
  position: string;
  description: string;
}

interface Props {
    modelValue: Array<ExperianceElement>;
}

interface Emits {
    (event: "update:modelValue", payload: Props): void;
    (event: "add"): void;
    (event: "remove", payload: number): void;
}

const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

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

const defaultExperiance: ExperianceElement = {
  position: "Front end Team Lead",
  place: 'google',
  date: mockDate,
  description: testText,
};

const experiances: Ref<Array<ExperianceElement>> = ref([ { ...defaultExperiance } ]);

const handleAdd = () => {
  emit('add');
};

const handleRemove = (index: number) => {
  emit('remove', index);
};
</script>

<template>
  <focus-container #default="{ focus }">
    <b-duplicator :properties="data" :allow-editable="focus" @add="handleAdd" @remove="handleRemove"
      #default="{ index }">
      <div class="my-2">
        <b-template>
          <template #details>
            <input-tag v-model="data[index].place" />
            <input-tag v-model="data[index].position" />
            <year-month-input-range v-model="data[index].date" />
          </template>
          <template #description>
            <input-tag v-model="data[index].description" />
          </template>
        </b-template>
      </div>
    </b-duplicator>
  </focus-container>
</template>

<style scoped></style>