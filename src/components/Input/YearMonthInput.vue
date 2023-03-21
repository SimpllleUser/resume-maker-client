<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { range } from 'lodash';

interface Props {
    present?: boolean;
    startFromEnd?: boolean;
}


const props = withDefaults(defineProps<Props>(), {
    present: false,
    startFromEnd: false,
});

const QUANTITY_YEARS = 11;
const DEFAULT_ACTTIVE_PAGE = 1;
const MAX_ACTTIVE_PAGE = 7;
const initActivePage = props.startFromEnd ? MAX_ACTTIVE_PAGE: DEFAULT_ACTTIVE_PAGE;
const START_DATE = 1939;
const activePage = ref(initActivePage);
const ACTUAL_DATE = new Date();
const ACTUAL_DATE_YEAR = new Date().getFullYear();

const setPage = (page: number) => { activePage.value += page };
const isMaxYear = (year: number): Boolean => year === ACTUAL_DATE_YEAR;
const isNotMaxYear = (year: number): Boolean => year <= ACTUAL_DATE_YEAR;
const getMonthShortNameByIndex = (index: number) => new Date(2000, index)
    .toLocaleString('en-us', { month: 'short' });

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

const current = ref({ year: '', month: '' });
const setActiveYearFrom = (year: number) => {
    current.value.year = year.toString();
};
const setActiveMonthFrom = (month: string) => {
    current.value.month = month;
};

const present = ref(false);
watch(present, () => {
    if (!present) return;
    current.value = {
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
        <div class="grid grid-cols-4">
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
                    'bg-primary text-white': +year === +current.year
                }">
                {{ year }}
            </div>
        </div>
        <div class="grid grid-cols-3">
            <div v-for="month in months" :key="month" @click="setActiveMonthFrom(month)" class="p-1" :class="{
                'bg-primary text-white': month === current.month
            }">
                <div class="cursor-pointer text-center">
                    {{ month }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>