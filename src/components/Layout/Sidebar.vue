<script setup lang="ts">
import { computed, ref, Ref } from "vue";
import { useResumeElements } from '@/store/resume-elements.ts';

const resumeElementStore = useResumeElements(); 

const elements = computed(() => resumeElementStore.resumeElements)

</script>

<template>
  <div class="flex justify-around">
    <ul class="w-100">
      <li v-for="element in elements" :key="element.name" class="w-100">
        <button
          class="btn btn-outline btn-success btn-wide"
          @click="resumeElementStore.addResumeElement(element)"
        >
          {{ element.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
