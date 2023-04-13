<script setup lang="ts">
import { ColorOption } from "@/common/types";
import { useResumeElements } from "@/store/resume-elements";

const resumeElementsStore = useResumeElements();

const handleSelectIcon = (currentColor: ColorOption): void => {
    resumeElementsStore.setColor(currentColor);
};

const getItemClass = (color: string) => color === resumeElementsStore.color?.label 
?  'm-2' 
: 'drop-shadow-xl m-1'; 
</script>

<template>
    <div class="text-center"><small>Colors</small></div>
      <div
        v-for="colorItem in resumeElementsStore.colors"
        :key="colorItem.code"
        class="p-4 my-2 cursor-pointer "
        :class="`${colorItem.bg} ${getItemClass(colorItem.label)}`"
        @click="handleSelectIcon(colorItem)"
      >
      </div>
</template>

<style scoped>

</style>