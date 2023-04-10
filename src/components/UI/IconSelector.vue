<script setup lang="ts">
import { onMounted } from "vue";

import { useToggle, useVModel } from "@vueuse/core";
import { vOnClickOutside } from "@vueuse/components";
import { useResumeElements } from "@/store/resume-elements";

const props = defineProps<{ modelValue: string; icons: Array<string> }>();

const resumeElementsStore = useResumeElements();

interface Emits {
  (event: "update:modelValue", payload: string): void;
}

const emit = defineEmits<Emits>();

const currentIcon = useVModel(props, "modelValue", emit);

const [showDropDown, toggleDropDown] = useToggle();

const handleOutsideClick = (): void => {
  if (!showDropDown.value) return;
  toggleDropDown();
};

const handleSelectIcon = (icon: string): void => {
  currentIcon.value = icon;
  toggleDropDown();
};

const initIconByFirstElement = () => {
  if (Boolean(currentIcon.value)) return;
  currentIcon.value = props.icons.at(0) || "image-times";
};

onMounted(initIconByFirstElement);
</script>

<template>
  <div class="dropdown dropdown-end" v-on-click-outside="handleOutsideClick">
    <button class="btn-sm" @click="toggleDropDown()">
      <unicon :name="currentIcon" :fill="resumeElementsStore.color.code"></unicon>
    </button>
    <div
      v-show="showDropDown"
      class="flex flex-wrap justify-center align-center dropdown-content shadow bg-base-100 rounded-box"
    >
      <div
        v-for="icon in icons"
        :key="icon"
        class="p-1 cursor-pointer"
        @click="handleSelectIcon(icon)"
      >
        <unicon :name="icon" :fill="resumeElementsStore.color.code"></unicon>
      </div>
    </div>
  </div>
</template>


<style scoped></style>