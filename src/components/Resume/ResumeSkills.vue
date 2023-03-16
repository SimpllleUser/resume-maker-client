
<script setup lang="ts">
import { ref, Ref } from 'vue';

import InputTag from '../Input/InputTag.vue';

interface Skill {
    value: string;
}

const skills: Ref<Skill[]> = ref([
    { value: 'HTML' },
    {  value: 'CSS' },
    { value: 'JS' },
]);

const addSkill = () => {
    skills.value.push({ value: 'TypeScript' });
};
const removeSkill = (skillIndex: number) => {
    skills.value = skills.value.filter((_, index) => skillIndex !== index);
};
</script>

<template>
    <div class="grid grid-cols-3">
        <div 
        v-for="(skill, index) in skills" 
        :key="index" 
        class="flex items-center justify-between mb-2" style="width: calc(100% - 40px)">
            <input-tag v-model="skill.value" style="max-width: 290px; min-width: 190px;" 
             class="min-w-full text-center" />
            <div class="print:hidden">
                <button class="btn btn-active btn-primary btn-xs" @click="removeSkill(index)">
                <unicon name="multiply" class="text-xs" fill="white"></unicon>
            </button>
            </div>
        </div>
    </div>
    <button class="btn btn-primary btn-xs print:hidden" @click="addSkill">
        <unicon name="plus" class="text-xs" fill="white"></unicon>
    </button>
</template>

<style scoped></style>