<script setup lang="ts">
import { computed, ComputedRef, ref } from "vue";
import { useVModel } from "@vueuse/core";
import { range } from "lodash";

interface Props {
  modelValue: string | undefined;
  startFromEnd: boolean;
}

interface Emits {
  (event: "update:modelValue", payload: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  startFromEnd: false,
  disable: "",
});

const ACTUAL_DATE_YEAR = new Date().getFullYear();
const START_DATE = 1939;
const QUANTITY_YEARS = 11;
const DEFAULT_ACTTIVE_PAGE = 1;
const MAX_ACTTIVE_PAGE = 7;

const initActivePage = props.startFromEnd
  ? MAX_ACTTIVE_PAGE
  : DEFAULT_ACTTIVE_PAGE;

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

const activePage = ref(initActivePage);

const setActiveYearFrom = (year: number): void => {
  data.value = year.toString();
};

const setPage = (page: number): void => {
  activePage.value += page;
};

const isMaxYear = (year: number): Boolean => year === ACTUAL_DATE_YEAR;
const isNotMaxYear = (year: number): Boolean => year <= ACTUAL_DATE_YEAR;

const yearsRange: ComputedRef<Array<number>> = computed(() => {
  const fromDate =
    activePage.value > DEFAULT_ACTTIVE_PAGE
      ? START_DATE + activePage.value * QUANTITY_YEARS
      : START_DATE;
  return range(fromDate, fromDate + QUANTITY_YEARS, DEFAULT_ACTTIVE_PAGE) || [];
});

const existMaxYear: ComputedRef<boolean> = computed(
  () => Boolean(yearsRange.value?.find(isMaxYear)) || false
);
const actualYearsRange: ComputedRef<number[]> = computed(() =>
  yearsRange.value.filter(isNotMaxYear)
);
const isCurrentedDate = (date: string): boolean =>
  date === data.value?.toString();
</script>

<template>
  <div class="grid grid-cols-4">
    <div class="flex align-items-center">
      <div class="p-1">
        <div 
          class="h-4 w-4"
          @click="setPage(-1)">
          <vue-feather 
          v-show="activePage > 1" 
          type="chevron-left"></vue-feather>
        </div>
      </div>
      <div class="p-1">
        <div
          class="h-4 w-4"
          @click="setPage(1)"
        >
        <vue-feather type="chevron-right"></vue-feather>
        </div>
      </div>
    </div>
    <div
      v-for="year in actualYearsRange"
      :key="year"
      @click="setActiveYearFrom(year)"
      class="p-1 cursor-pointer text-center"
      :class="{
        'bg-primary text-white': isCurrentedDate(year.toString()),
      }"
    >
      {{ year }}
    </div>
  </div>
</template>

<style scoped>
</style>