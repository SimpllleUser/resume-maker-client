<script setup lang="ts">
import { ColorOption } from "@/common/types";
import { useResumeElements } from "@/store/resume-elements";

const resumeElementsStore = useResumeElements();

// const colors = [ 'neutral-800', 'yellow-500', 'green-300', 'rose-700' ];
// const color = ref(colors.at(0));

const handleSelectIcon = (currentColor: ColorOption): void => {
    resumeElementsStore.setColor(currentColor);
};

const getItemClass = (color: string) => color === resumeElementsStore.color.label 
?  'm-2' 
: 'drop-shadow-xl m-1'; 
</script>

<template>
    <div>Colors</div>
      <div
        v-for="colorItem in resumeElementsStore.colors"
        :key="colorItem"
        class="p-4 my-2 cursor-pointer "
        :class="`${colorItem.bg} ${getItemClass(colorItem.label)}`"
        @click="handleSelectIcon(colorItem)"
      >
      {{ colorItem.label }}
      </div>
</template>

<style scoped>

</style>