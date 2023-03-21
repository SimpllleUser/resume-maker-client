<script setup lang="ts">
import { computed, ComputedRef, ref, watch } from 'vue';
import { range } from 'lodash';
import { useVModel } from '@vueuse/core';

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

const QUANTITY_YEARS = 11;
const DEFAULT_ACTTIVE_PAGE = 1;
const MAX_ACTTIVE_PAGE = 7;
const initActivePage = props.startFromEnd ? MAX_ACTTIVE_PAGE : DEFAULT_ACTTIVE_PAGE;
const START_DATE = 1939;
const activePage = ref(initActivePage);
const ACTUAL_DATE = new Date();
const ACTUAL_DATE_YEAR = new Date().getFullYear();

const setPage = (page: number) => { activePage.value += page };
const isMaxYear = (year: number): Boolean => year === ACTUAL_DATE_YEAR;
const isNotMaxYear = (year: number): Boolean => year <= ACTUAL_DATE_YEAR;
const getMonthShortNameByIndex = (index: number) => new Date(2000, index)
    .toLocaleString('en-us', { month: 'short' });
const canShowYear: ComputedRef<boolean> = computed(() => props.disable.toString() !== 'year');
const canShowMonth: ComputedRef<boolean> = computed(() => props.disable.toString() !== 'month');

const months = new Array(12)
    ?.fill('')
    .map((_, index) => getMonthShortNameByIndex(index));

const yearsRange = computed(() => {
    const fromDate = activePage.value > DEFAULT_ACTTIVE_PAGE
        ? START_DATE + (activePage.value * QUANTITY_YEARS)
        : START_DATE;
    return range(
        fromDate,
        fromDate + QUANTITY_YEARS,
        DEFAULT_ACTTIVE_PAGE);
});

const existMaxYear = computed(() => yearsRange.value
    .find(isMaxYear));
const actualYearsRange = computed(() => yearsRange.value.filter(isNotMaxYear));

const present = ref(false);
const resetPresent = () => { present.value = false };
const setActiveYearFrom = (year: number) => {
    if (Number(data.value.year) !== Number(year)) resetPresent();;
    data.value.year = year.toString();
};
const setActiveMonthFrom = (month: string) => {
    if (data.value.month !== month) resetPresent();
    data.value.month = month;
};

watch(present, () => {
    if (!present) return;
    data.value = {
        year: ACTUAL_DATE_YEAR.toString(),
        month: getMonthShortNameByIndex(ACTUAL_DATE.getMonth())
    };
});
</script>

<template>
    <div class="">
        <label class="label cursor-pointer" v-show="props.present">
            <span class="label-text">Present</span>
            <input type="checkbox" v-model="present" class="checkbox checkbox-primary" />
        </label>
        <div class="grid grid-cols-4" v-show="canShowYear">
            <div class="flex">
                <div class="p-1">
                    <div class="rotate-90" @click="setPage(-1)" v-show="activePage > 1">
                        <unicon name="angle-down" class="text-xs" fill="black"></unicon>
                    </div>
                </div>
                <div class="p-1">
                    <div style="transform: rotate(-90deg);" @click="setPage(1)" v-show="!existMaxYear">
                        <unicon name="angle-down" class="text-xs" fill="black"></unicon>
                    </div>
                </div>
            </div>
            <div v-for="year in actualYearsRange" :key="year" @click="setActiveYearFrom(year)"
                class="p-1 cursor-pointer text-center" :class="{
                    'bg-primary text-white': +year === Number(data.year)
                }">
                {{ year }}
            </div>
        </div>
        <div class="grid grid-cols-3" v-show="canShowMonth">
            <div v-for="month in months" :key="month" @click="setActiveMonthFrom(month)" class="p-1" :class="{
                'bg-primary text-white': month === data.month
            }">
                <div class="cursor-pointer text-center">
                    {{ month }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>