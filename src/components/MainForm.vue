<script setup lang="ts">
import ResumeMainInfo from './Resume/ResumeMainInfo.vue';
import ResumeSkills from './Resume/ResumeSkills.vue';
import FocusContainer from './FocusContainer.vue';
import InputTag from './Input/InputTag.vue';
import { ref } from 'vue';
// import ResumeCalendar from './Resume/ResumeCalendar.vue';
// import ResumePhoto from './Resume/ResumePhoto.vue';
const skillTitle = ref('Skill')

</script>
<template>
    <div class="max-w-[990px] mx-auto border border-solid border-gray-300">
        <resume-main-info />
        <focus-container>
            <template #header>
                <div class="flex justify-center items-center py-6 container-title-line">
                <div class="bg-white px-6">
                    <input-tag v-model="skillTitle" style="min-width: 10rem;" class="text-center text-2xl font-semibold bg-white" />
                </div>
                </div>
            </template>
            <resume-skills />
        </focus-container>
        <!-- <resume-calendar /> -->
    </div>
</template>


<style lang="scss" scoped></style>