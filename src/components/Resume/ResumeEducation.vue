<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import InputTag from "@/components/Input/InputTag.vue";
import YearMonthInputRange from "@/components/Input/YearMonthInputRange.vue";
import BTemplate from "@/components/UI/BTemplate.vue";
import BDuplicator from "@/components/UI/BDuplicator.vue";
import FocusContainer from "@/components/FocusContainer.vue";

import { Education } from "@/types/data-managment.types";


interface Props {
    modelValue: Array<Education>;
}

interface Emits {
    (event: "update:modelValue", payload: Props): void;
    (event: "add"): void;
    (event: "remove", payload: number): void;
}

const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

const handleAdd = () => {
    emit('add');
};

const handleRemove = (index: number) => {
    emit('remove', index);
};
</script>

<template>
    <focus-container #default="{ focus }">
        <b-duplicator :properties="data" :allow-editable="focus" @add="handleAdd" @remove="handleRemove"
            #default="{ index }">
            <div class="my-6">
                <b-template>
                    <template #details>
                        <input-tag v-model="data[index].place" />
                        <year-month-input-range v-model="data[index].date" disable="month" />
                    </template>
                    <template #description>
                        <input-tag v-model="data[index].description" />
                    </template>
                </b-template>
            </div>
        </b-duplicator>
    </focus-container>
</template>

<style scoped></style>