<script setup lang="ts">
import { Contact } from "@/types/data-managment.types";
import { useVModel } from "@vueuse/core";

import { PRIMARY } from '@/constants';

import InputTag from "@/components/Input/InputTag.vue";
import IconSelector from "@/components/UI/IconSelector.vue";
import { computed, ComputedRef } from "vue";


interface Props {
    modelValue: Array<Contact>;
    fullSize: boolean;
}

interface Emits {
    (event: "update:modelValue", payload: Props): void;
    (event: "add", payload: Array<Contact>): void;
    (event: "remove", payload: Array<Contact>): void;
}

const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

const icons: Array<string> = ["phone", "envelope", "map-marker", "github"];

const handleAdd = () => {
  data.value = [ ...data.value, { icon: "phone", value: "" } ]
  emit('add', data.value);
};

const handleRemove = (contactIndex: number) => {
  data.value = data.value.filter((_, index) => index !== contactIndex)
  emit('remove', data.value);
};

const styleWidthInput: string = 'min-width: 50px; max-width: 90%';

</script>

<template>
  <div class="flex items-center justify-center flex-wrap relative px-2">
    <div
      v-for="(contact, index) in data"
      :key="index"
      class="flex items-center mb-2 relative"
      :class="{ 'w-1/2': !props.fullSize, 'justify-center flex-wrap': props.fullSize }"
    >
      <div class="print:ml-2">
        <icon-selector v-model="contact.icon" :icons="icons" />
      </div>
      <input-tag 
      v-model="contact.value" :style="styleWidthInput" class="min-w-full print:text-center" />
      <div class="absolute right-0">
        <button
        class="action btn btn-square btn-warning btn-xs print:opacity-0"
        @click="handleRemove(index)"
      >
        <unicon name="multiply" class="text-xs" fill="black" hover-fill="white"></unicon>
      </button>
      </div>
    </div>
    <div class="absolute bottom-[-1rem] left-0 print:hidden">
      <button class="btn btn-square btn-outline btn-primary btn-xs" @click="handleAdd">
        <unicon name="plus" :fill="PRIMARY" hover-fill="white"></unicon>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
