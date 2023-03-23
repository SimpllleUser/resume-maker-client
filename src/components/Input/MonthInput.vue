<script setup lang="ts">
import { Ref, ref } from "vue";
import { useVModel } from "@vueuse/core";

interface Emits {
  (event: "update:modelValue", payload: string): void;
}

const emit = defineEmits<Emits>();

interface Props {
  modelValue: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {});

const data = useVModel(props, "modelValue", emit);

const getMonthShortNameByIndex = (index: number): string =>
  new Date(2000, index).toLocaleString("en-us", { month: "short" });

const months: Array<string> = new Array(12)
  ?.fill("")
  .map((_, index) => getMonthShortNameByIndex(index));

const present: Ref<boolean> = ref(false);

const resetPresent = (): void => {
  present.value = false;
};

const setActiveMonthFrom = (month: string): void => {
  if (data.value !== month) resetPresent();
  data.value = month;
};
</script>

<template>
  <div class="grid grid-cols-3">
    <div
      v-for="month in months"
      :key="month"
      @click="setActiveMonthFrom(month)"
      class="p-1"
      :class="{
        'bg-primary text-white': month === data,
      }"
    >
      <div class="cursor-pointer text-center">
        {{ month }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>