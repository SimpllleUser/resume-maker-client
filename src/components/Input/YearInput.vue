<script setup lang="ts">
import { computed, ref } from "vue";
import { useVModel } from "@vueuse/core";
import { range } from 'lodash';

interface Props {
    modelValue: string | undefined;
    startFromEnd: boolean,
}


const props = withDefaults(defineProps<Props>(), {
    startFromEnd: false,
    disable: '',
});

const ACTUAL_DATE_YEAR = new Date().getFullYear();
const START_DATE = 1939;
const QUANTITY_YEARS = 11;
const DEFAULT_ACTTIVE_PAGE = 1;
const MAX_ACTTIVE_PAGE = 7;
const initActivePage = props.startFromEnd ? MAX_ACTTIVE_PAGE : DEFAULT_ACTTIVE_PAGE;
const activePage = ref(initActivePage);


const emit = defineEmits<{
    (event: 'update:modelValue', payload: string): void
}>()
const data = useVModel(props, 'modelValue', emit)

const setActiveYearFrom = (year: number) => {
    data.value = year.toString();
};

const setPage = (page: number) => { activePage.value += page };

const isMaxYear = (year: number): Boolean => year === ACTUAL_DATE_YEAR;
const isNotMaxYear = (year: number): Boolean => year <= ACTUAL_DATE_YEAR;
const existMaxYear = computed(() => yearsRange.value
    .find(isMaxYear));

const yearsRange = computed(() => {
    const fromDate = activePage.value > DEFAULT_ACTTIVE_PAGE
        ? START_DATE + (activePage.value * QUANTITY_YEARS)
        : START_DATE;
    return range(
        fromDate,
        fromDate + QUANTITY_YEARS,
        DEFAULT_ACTTIVE_PAGE);
});
const actualYearsRange = computed(() => yearsRange.value.filter(isNotMaxYear));
const isCurrentedDate = (date: string) => date === data.value?.toString(); 

</script>

<template>
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
                    'bg-primary text-white': isCurrentedDate(year.toString())
                }">
                {{ year }}
            </div>
        </div>
</template>

<style scoped>

</style>