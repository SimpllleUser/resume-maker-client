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
  console.log(1);
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
  <div v-on-click-outside="handleOutsideClick" class="relative">
    <button class="btn-sm" @click="toggleDropDown()">
      <vue-feather :type="currentIcon"></vue-feather>
    </button>
    <div
      v-show="showDropDown"
      class="absolute flex flex-wrap justify-center align-center dropdown-content shadow bg-base-100 rounded-box z-50"
    >
      <div
        v-for="icon in icons"
        :key="icon"
        class="p-1 cursor-pointer"
        @click="handleSelectIcon(icon)"
      >
      <vue-feather :type="icon"></vue-feather>
      </div>
    </div>
  </div>
</template>


<style scoped></style>