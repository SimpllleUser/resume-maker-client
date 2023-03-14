
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
    <div class="flex flex-wrap justify-around">
        <div 
        v-for="(skill, index) in skills" 
        :key="index" 
        class="flex justify-around w-64 mb-2">
            <input-tag v-model="skill.value" />
            <button class="btn btn-active btn-primary btn-xs" @click="removeSkill(index)">
                <unicon name="multiply" class="text-xs" fill="white"></unicon>
            </button>
        </div>
    </div>
    <button class="btn btn-primary btn-xs" @click="addSkill">
        <unicon name="plus" class="text-xs" fill="white"></unicon>
    </button>
</template>

<style scoped></style>