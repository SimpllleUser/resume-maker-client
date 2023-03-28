
<script setup lang="ts">
import { ref, Ref } from 'vue';

import InputTag from '@/components/Input/InputTag.vue';
import { useVModel } from '@vueuse/core';

type Skill = string;


interface Props {
    modelValue: Array<Skill>;
}

interface Emits {
    (event: "update:modelValue", payload: Props): void;
    (event: "add"): void;
    (event: "remove", payload: number): void;
}

const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

// const skills: Ref<Skill[]> = ref(['HTML', 'CSS', 'JS']);

const addSkill = () => {
    emit('add');
};
const removeSkill = (skillIndex: number) => {
    emit('remove', skillIndex);
};
</script>

<template>
    <div class="grid grid-cols-3">
        <div v-for="(skill, index) in data" :key="index" class="flex items-center justify-between mb-2"
            style="width: calc(100% - 40px)">
            <input-tag v-model="data[index]" style="max-width: 290px; min-width: 190px;" class="min-w-full text-center" />
            <div class="action print:hidden">
                <button class="btn btn-active btn-primary btn-xs" @click="removeSkill(index)">
                    <unicon name="multiply" class="text-xs" fill="white"></unicon>
                </button>
            </div>
        </div>
    </div>
    <button class="action btn btn-primary btn-xs print:hidden" @click="addSkill">
        <unicon name="plus" class="text-xs" fill="white"></unicon>
    </button>
</template>

<style scoped></style>