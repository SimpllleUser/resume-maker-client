<script setup lang="ts">
import contenteditable from "vue-contenteditable";
import { useVModel } from "@vueuse/core";

import { useResumeElements } from "@/store/resume-elements";

interface Props {
  class?: string;
  style?: string;
  modelValue: string;
}

interface Emits {
  (event: "update:modelValue", payload: string): void;
}

const resumeElementsStore = useResumeElements();


const props = defineProps<Props>();


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
      class="text-"
      :class="`font-${resumeElementsStore.font.value} ${props.class}`"
    />
  </div>
</template>

<style scoped></style>
