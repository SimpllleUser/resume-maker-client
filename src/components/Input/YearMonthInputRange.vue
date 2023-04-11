<script setup lang="ts">
import { computed, ComputedRef, Ref, ref } from "vue";

import { useVModel } from "@vueuse/core";
import { vOnClickOutside } from "@vueuse/components";

import YearMonthInput from "@/components/Input/YearMonthInput.vue";

import { YearMonthRange } from "@/common/types";

type YearOrMonth = "year" | "month";

interface Props {
  modelValue: YearMonthRange;
  present?: boolean;
  startFromEnd?: boolean;
  disable?: YearOrMonth | "";
}

interface Emits {
  (event: "update:modelValue", payload: YearMonthRange): void;
}

const props = withDefaults(defineProps<Props>(), {
  present: false,
  startFromEnd: false,
  disable: "",
});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

const isPresent: Ref<boolean> = ref(false);

const separate: ComputedRef<string> = computed(() => (!props.disable ? "/" : ""));

const getDateFromInput = ({ year = "", month = "" }): string =>
  `${month} ${separate.value} ${year} `;

const dateRange: ComputedRef<string> = computed(
  () =>
    `${getDateFromInput(data.value.from)} -  ${isPresent.value ? 'Present' : getDateFromInput(data.value.to)}`
);

const showDateInput: Ref<boolean> = ref(false);

const handleOutsideClick = (state: boolean): void => {
  showDateInput.value = state;
};

const setPresent = (state: boolean) => { isPresent.value = state; };

</script>
        
<template>
  <div class="relative" v-on-click-outside="() => handleOutsideClick(false)">
    <div
      class="flex justify-center w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-primary bg-white z-10"
      v-show="showDateInput"
    >
      <div class="border-r-2 p-1 border-gray-200">
        <div class="text-center text-gray-400">
          <b>From</b>
        </div>
        <year-month-input v-model="data.from" start-from-end :disable="disable" />
      </div>
      <div class="p-1">
        <div class="text-center text-gray-400">
          <b>To</b>
        </div>
        <year-month-input
          v-model="data.to"
          :disable="disable"
          start-from-end
          present
          @present-change="setPresent"
        />
      </div>
    </div>
    <input
      :value="dateRange"
      class="text-center input input-bordered input-sm input-secondary print:hidden"
      @focus="handleOutsideClick(true)"
      readonly
    />
    <div class="text-center hidden print:block">{{ dateRange }}</div>
  </div>
</template>


<style scoped></style>