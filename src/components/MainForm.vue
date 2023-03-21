<script setup lang="ts">
import ResumeMainInfo from "./Resume/ResumeMainInfo.vue";
import ResumeSkills from "./Resume/ResumeSkills.vue";
import FocusContainer from "./FocusContainer.vue";
import InputTag from "./Input/InputTag.vue";
import ResumeAbout from "./Resume/ResumeAbout.vue";
import ResumeEducation from "./Resume/ResumeEducation.vue";
import ResumeExperiance from "./Resume/ResumeExperiance.vue";
import { ref } from "vue";
// import ResumeCalendar from './Resume/ResumeCalendar.vue';
// import ResumePhoto from './Resume/ResumePhoto.vue';
const skillTitle = ref("Skill");
const aboutTitle = ref("About");
const educationTitle = ref("Education");
const experianceTitle = ref("Experiance");
</script>
<template>
  <div class="max-w-[990px] mx-auto border border-solid border-gray-300">
    <resume-main-info />
    <focus-container>
      <template #header>
        <div class="flex justify-center items-center py-6 container-title-line">
          <div class="bg-white px-6">
            <input-tag v-model="skillTitle" class="container-title-input" />
          </div>
        </div>
      </template>
      <template #default="{ focus }">
        <div :class="{ 'action-hide': !focus }">
          <resume-skills />
        </div>
      </template>
    </focus-container>
    <focus-container>
      <template #header>
        <div class="flex justify-center items-center py-6 container-title-line">
          <div class="bg-white px-6">
            <input-tag v-model="aboutTitle" class="container-title-input" />
          </div>
        </div>
      </template>
      <resume-about />
    </focus-container>
    <focus-container>
      <template #header>
        <div class="flex justify-center items-center py-6 container-title-line">
          <div class="bg-white px-6">
            <input-tag v-model="educationTitle" class="container-title-input" />
          </div>
        </div>
      </template>
      <resume-education />
    </focus-container>
    <focus-container>
      <template #header>
        <div class="flex justify-center items-center py-6 container-title-line">
          <div class="bg-white px-6">
            <input-tag
              v-model="experianceTitle"
              class="container-title-input"
            />
          </div>
        </div>
      </template>
      <resume-experiance />
    </focus-container>
  </div>
</template>


<style lang="scss" scoped></style>