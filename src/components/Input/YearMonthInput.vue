<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useVModel } from '@vueuse/core';
import { isEqual } from 'lodash';

import YearInput from './YearInput.vue';
import MonthInput from './MonthInput.vue';

type YearOrMonth = 'year' | 'month';

interface ModelValue {
    year?: string;
    month?: string;
}

interface Props {
    modelValue: ModelValue;
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
    (event: 'update:modelValue', payload: ModelValue): void
}>()
const data = useVModel(props, 'modelValue', emit)


const ACTUAL_DATE = new Date();
const ACTUAL_DATE_YEAR = new Date().getFullYear();

const getMonthShortNameByIndex = (index: number) => new Date(2000, index)
    .toLocaleString('en-us', { month: 'short' });

const canShowYear = computed(() => props.disable.toString() !== 'year');
const canShowMonth = computed(() => props.disable.toString() !== 'month');

const presentDate = {
    year: canShowYear.value
        ? ACTUAL_DATE_YEAR.toString()
        : '',
    month: canShowMonth.value
        ? getMonthShortNameByIndex(ACTUAL_DATE.getMonth())
        : ''
};

const isPresent = ref(false);

watch(isPresent, () => {
    if (!isPresent.value) return;
    data.value = { ...presentDate };
});

watch(data, () => {
    if (isEqual(data.value, presentDate)) return;
    isPresent.value = false;
}, { deep: true })


</script>

<template>
    <div class="">
        <year-input v-model="data.year" v-show="canShowYear" :start-from-end="props.startFromEnd" />
        <label class="label cursor-pointer" v-show="props.present">
            <span class="label-text">Present</span>
            <input type="checkbox" v-model="isPresent" class="checkbox checkbox-primary" />
        </label>
        <month-input v-model="data.month" v-show="canShowMonth" />
    </div>
</template>

<style scoped></style>