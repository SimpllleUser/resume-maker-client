<script setup lang="ts">
import { useRouter } from 'vue-router';

import ResumeItemCard from '@/components/Resume/ResumeItemCard.vue';

import { getDataForNewResume } from '@/services/generate-default-data';
import { useResumeList } from '@/store/resume-list';
import { ResumeItem } from '@/types/data-managment.types';

const $router = useRouter();

const resumeListStore = useResumeList();

const createResume = () => {
    const createdResume: ResumeItem = getDataForNewResume();
    resumeListStore.addResume(createdResume);
    $router.push({ path: `/detail/${createdResume.id}` });
};

const goToDetail = (id: string) => {
    $router.push({ path: `/detail/${id}` });
}

</script>

<template>
    <div>
        <div class="hero bg-base-200 py-4">
            <h1 class="text-5xl font-bold">Resume maker</h1>
        </div>
        <div class="resumes flex flex-wrap justify-center bg-base-100 mb-4">
            <resume-item-card
            v-for="resume in resumeListStore.resumes" :key="resume.id"
            :resume="resume"
            @redirect-to-detail="goToDetail"
            @remove="resumeListStore.removeResume"
            />
            <div class="card card-compact w-80 bg-base-100 shadow-xl my-auto">
                <div class="flex justify-center items-center">
                    <button class="btn btn-primary size-lg h-24 w-full" @click="createResume">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>