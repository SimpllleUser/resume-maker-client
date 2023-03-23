<script setup lang="ts">
import { computed, ComputedRef, ref, watch } from "vue";
import { useVModel } from "@vueuse/core";
import { isEqual } from "lodash";

import YearInput from "@/components/input/YearInput.vue";
import MonthInput from "@/components/input/MonthInput.vue";

type YearOrMonth = "year" | "month";

interface ModelValue {
  year?: string;
  month?: string;
}

interface Props {
  modelValue: ModelValue;
  present?: boolean;
  startFromEnd?: boolean;
  disable?: YearOrMonth | "";
}

interface Emits {
  (event: "update:modelValue", payload: ModelValue): void;
}

const props = withDefaults(defineProps<Props>(), {
  present: false,
  startFromEnd: false,
  disable: "",
});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

const ACTUAL_DATE: Date = new Date();
const ACTUAL_DATE_YEAR: number = new Date().getFullYear();

const getMonthShortNameByIndex = (index: number): string =>
  new Date(2000, index).toLocaleString("en-us", { month: "short" });

const canShowYear: ComputedRef<boolean> = computed(
  () => props.disable.toString() !== "year"
);
const canShowMonth: ComputedRef<boolean> = computed(
  () => props.disable.toString() !== "month"
);

const presentDate: ModelValue = {
  year: canShowYear.value ? ACTUAL_DATE_YEAR.toString() : "",
  month: canShowMonth.value
    ? getMonthShortNameByIndex(ACTUAL_DATE.getMonth())
    : "",
};

const isPresent = ref(false);

const handlePresentDate = () => {
  if (!isPresent.value) return;
  data.value = { ...presentDate };
};

watch(isPresent, handlePresentDate);

const handleDate = (): void => {
  if (isEqual(data.value, presentDate)) return;
  isPresent.value = false;
};

watch(data, handlePresentDate, { deep: true });
</script>

<template>
  <div class="">
    <year-input
      v-model="data.year"
      v-show="canShowYear"
      :start-from-end="props.startFromEnd"
    />
    <label class="label cursor-pointer" v-show="props.present">
      <span class="label-text">Present</span>
      <input
        type="checkbox"
        v-model="isPresent"
        class="checkbox checkbox-primary"
      />
    </label>
    <month-input v-model="data.month" v-show="canShowMonth" />
  </div>
</template>

<style scoped></style>