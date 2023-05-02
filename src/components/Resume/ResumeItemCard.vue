<script setup lang="ts">
import { ResumeItem } from '@/types/data-managment.types';
import { computed } from 'vue';


interface Props {
    resume: ResumeItem;
}

interface Emits {
    (action: 'remove', payload: ResumeItem): void
    (action: 'redirect-to-detail', payload: string): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const resume = computed(() => ({
    ...props.resume.content.main, id: props.resume.id
})) 

</script>
        
<template>
    
            <div class="resume-card mr-4 mb-4 group relative">
                <div class="flex justify-end resume-item--actions">
                    <button class="action btn btn-square btn-warning btn-xs resume-item--actions__btn" @click="emits('remove', props.resume)">
                        <unicon name="multiply" class="text-xs" fill="black" hover-fill="white"></unicon>
                    </button>
                </div>
                <div class="card card-compact w-80 shadow-xl">
                    <div class="card-body">
                        <div class="flex justify-center h-48">
                            <img v-show="resume.img" :src="resume.img"
                                id="user-photo"
                                class="shadow-xl object-contain " />
                            <div v-show="!resume.img" 
                            class="opacity-75 bg-accent h-48 w-full">
                            </div>
                        </div>
                        <h2 class="card-title justify-center" id="full-name">{{ resume.fullName }}</h2>
                        <p class="text-center" id="position">{{ resume.position }}</p>
                        <div class="card-actions justify-center">
                            <button @click="emits('redirect-to-detail', resume.id)"
                                class="btn btn-accent btn-wide btn-sm text-white rounded">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
</template>


<style scoped></style>