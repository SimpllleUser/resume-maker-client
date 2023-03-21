<script setup lang="ts">
import { computed, ref } from "vue";
import { useVModel } from "@vueuse/core";
import { vOnClickOutside } from '@vueuse/components';

import YearMonthInput from "./YearMonthInput.vue";
import { YearMonthRange } from "../../common/types";

type YearOrMonth = 'year' | 'month';

interface Props {
    modelValue: YearMonthRange;
    present?: boolean;
    startFromEnd?: boolean;
    disable?: YearOrMonth | '';
}

const props = withDefaults(defineProps<Props>(), {
    present: false,
    startFromEnd: false,
    disable: '',
});
const emit = defineEmits<{
    (event: 'update:modelValue', payload: YearMonthRange): void
}>()
const data = useVModel(props, 'modelValue', emit)

const getDateFromInput = ({
    year = '', month = ''
}) => `${month} / ${year} `;

const dateRange = computed
    (() => `${getDateFromInput(data.value.from)} - ${getDateFromInput(data.value.to)}`,
    );

const showDateInput = ref(false);
const handleOutsideClick = () => {
    showDateInput.value = false;
};
</script>
        
<template>
    <div class="relative" v-on-click-outside="handleOutsideClick">
        <div 
        class="flex justify-center w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-primary bg-white z-10" 
        v-show="showDateInput">
            <div class="border-r-2 p-1 border-gray-200">
                <div class="text-center text-gray-400">
                    <b>From</b>
                </div>
                <year-month-input v-model="data.from" :disable="disable" />
            </div>
            <div class="p-1">
                <div class="text-center text-gray-400">
                    <b>To</b>
                </div>
                <year-month-input v-model="data.to" :disable="disable" present />
            </div>
        </div>
        <input :value="dateRange" class="text-center" @focus="showDateInput = true" readonly />
        <div class="text-center hidden print:block">{{ dateRange }}</div>
    </div>
</template>


<style scoped></style>