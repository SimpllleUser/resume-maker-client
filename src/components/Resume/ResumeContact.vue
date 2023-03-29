<script setup lang="ts">
import { ref, Ref } from "vue";

import InputTag from "@/components/Input/InputTag.vue";
import IconSelector from "@/components/UI/IconSelector.vue";
import { Contact } from "@/types/data-managment.types";
import { useVModel } from "@vueuse/core";


interface Props {
    modelValue: Array<Contact>;
}

interface Emits {
    (event: "update:modelValue", payload: Props): void;
    (event: "add", payload: Array<Contact>): void;
    (event: "remove", payload: Array<Contact>): void;
}

const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

const icons = ["phone", "envelope", "map-marker", "github"];

const contacts: Ref<Array<Contact>> = ref([

]);

const handleAdd = () => {
  data.value = [ ...data.value, { icon: "phone", value: "" } ]
  emit('add', data.value);
};

const handleRemove = (contactIndex: number) => {
  data.value = data.value.filter((_, index) => index !== contactIndex)
  emit('remove', data.value);
};
</script>

<template>
  <div class="flex items-center justify-center flex-wrap">
    <div
      v-for="(contact, index) in data"
      :key="index"
      class="flex items-center justify-around mb-2 w-1/3"
    >
      <div class="print:ml-2">
        <icon-selector v-model="contact.icon" :icons="icons" />
      </div>
      <input-tag v-model="contact.value" class="min-w-full print:text-center" />
      <button
        class="action btn btn-active btn-primary btn-xs print:opacity-0"
        @click="handleRemove(index)"
      >
        <unicon name="multiply" class="text-xs" fill="white"></unicon>
      </button>
    </div>
    <div class="flex items-center mb-2 action print:hidden">
      <button class="btn btn-primary btn-xs" @click="handleAdd">
        <unicon name="plus" fill="white"></unicon>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
