<script setup lang="ts">
import { useVModel } from "@vueuse/core";

import InputTag from "@/components/Input/InputTag.vue";
import YearMonthInputRange from "@/components/Input/YearMonthInputRange.vue";
import BTemplate from "@/components/UI/BTemplate.vue";
import BDuplicator from "@/components/UI/BDuplicator.vue";
import FocusContainer from "@/components/FocusContainer.vue";

import { Experiance } from "@/types/data-managment.types";

interface Props {
    modelValue: Array<Experiance>;
}

interface Emits {
    (event: "update:modelValue", payload: Props): void;
    (event: "add"): void;
    (event: "remove", payload: number): void;
}

const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

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
      <div class="my-2 py-2">
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