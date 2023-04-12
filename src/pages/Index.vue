<script setup lang="ts">
import { getDataForNewResume } from '@/services/generate-default-data';
import { useResumeList } from '@/store/resume-list';
import { ResumeItem } from '@/types/data-managment.types';
import { useRouter } from 'vue-router';

const $router = useRouter();

const resumeListStore = useResumeList();

const createResume = () => {
    const createdResume: ResumeItem = getDataForNewResume();
    resumeListStore.addResume(createdResume);
    $router.push({ path: `/detail/${createdResume.id}` });
};

</script>

<template>
    <div>
        <div class="hero bg-base-200 py-4">
            <h1 class="text-5xl font-bold">Resume maker</h1>
        </div>
        <div class="resumes flex flex-wrap justify-center bg-base-100 mb-4">
            <div class="resume-card mr-4 mb-4" v-for="resume in resumeListStore.resumes" :key="resume.id">
                <div class="card card-compact w-80 shadow-xl">
                    <div class="card-body">
                        <div class="flex justify-center h-48">
                            <img v-show="resume.content.main.img" :src="resume.content.main.img"
                                class="shadow-xl object-contain " />
                            <div v-show="!resume.content.main.img" 
                            class="opacity-75 bg-accent h-48 w-full">
                            </div>
                        </div>
                        <h2 class="card-title justify-center">{{ resume.content.main.fullName }}</h2>
                        <p class="text-center">{{ resume.content.main.position }}</p>
                        <div class="card-actions justify-center">
                            <button @click="$router.push({ path: `/detail/${resume.id}` })"
                                class="btn btn-accent btn-wide btn-sm text-white rounded">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-80 bg-base-100 shadow-xl my-auto">
                <div class="flex justify-center items-center">
                    <button class="btn btn-primary size-lg h-24 w-full" @click="createResume">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>