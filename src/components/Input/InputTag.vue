<script setup lang="ts">
import { ref } from "vue";
import contenteditable from "vue-contenteditable";
import { useVModel } from "@vueuse/core";

// const isEditable = ref(true);
// const content = ref("Full Name User");

const props = defineProps<{
  class?: string;
  modelValue: string;
}>();

interface Emits {
  (event: "update:modelValue", payload: string): void;
}

const emit = defineEmits<Emits>();

const model = useVModel(props, "modelValue", emit);
</script>
<template>
  <div>
    <contenteditable
      tag="div"
      :contenteditable="true"
      v-model="model"
      style="min-width: 2rem;"
      :class="`${props.class}`"
    />
  </div>
</template>

<style scoped></style>
