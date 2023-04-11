<script setup lang="ts">
import { computed, ref, Ref } from "vue";
import { useResumeElements } from '@/store/resume-elements';
import { ResumeElement } from "@/types/data-managment.types";

import FontSelector from "@/components/FontSelector.vue";
import ColorSelector from "@/components/ColorSelector.vue";

interface Emits {
  (event: 'add', payload: string): void;
}

const emits = defineEmits<Emits>();

const resumeElementStore = useResumeElements(); 

const elements = computed(() => resumeElementStore.resumeElements);

const handleAddResume = (element: ResumeElement) => {
  resumeElementStore.addResumeElement(element)
  emits('add', element.name);
}

</script>

<template>
  <div class="flex justify-around bg-white z-50">
    <ul class="w-100">
      <li><div class="text-center"> <small>Elements</small></div></li>
      <li v-for="element in elements" :key="element.name" class="w-100">
        <button
          class="btn btn-outline btn-success btn-wide"
          @click="handleAddResume(element)"
        >
          {{ element.name }}
        </button>
      </li>
      <li class="my-2">
        <font-selector/>
      </li>
      <li>
        <color-selector/>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
