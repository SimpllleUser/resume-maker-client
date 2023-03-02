
<script setup lang="ts">
import { ref, Ref } from 'vue';

import InputTag from '../Input/InputTag.vue';

interface Skill {
    icon: string;
    value: string;
}

const skills: Ref<Skill[]> = ref([
    { icon: '', value: 'JavaScript' },
    { icon: '', value: 'TypeScript' },
    { icon: '', value: 'TypeScript' },
]);

const addSkill = () => {
    skills.value.push({ icon: '', value: 'TypeScript' });
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
        class="flex justify-around w-64 border-2 border-primary mb-2">
            <input-tag v-model="skill.value" />
            <button class="btn-primary px-2 py-1" @click="removeSkill(index)">
                <unicon name="multiply" class="text-xs" fill="white"></unicon>
            </button>
        </div>
    </div>
    <button class="btn-primary px-2 py-1" @click="addSkill">
        <unicon name="plus" class="text-xs" fill="white"></unicon>
    </button>
</template>

<style scoped></style>