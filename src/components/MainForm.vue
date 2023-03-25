<script setup lang="ts">
import { Ref, ref } from "vue";

import FocusContainer from "@/components/FocusContainer.vue";
import InputTag from "@/components/Input/InputTag.vue";
import ResumeMainInfo from "@/components/Resume/ResumeMainInfo.vue";
import ResumeSkills from "@/components/Resume/ResumeSkills.vue";
import ResumeAbout from "@/components/Resume/ResumeAbout.vue";
import ResumeEducation from "@/components/Resume/ResumeEducation.vue";
import ResumeExperiance from "@/components/Resume/ResumeExperiance.vue";
import Sidebar from "@/components/Layout/Sidebar.vue";
import ElementFactory from "@/components/ElementFactory.vue";

import { useResumeElements } from "@/store/resume-elements";

const resumeElementStore = useResumeElements();

const skillTitle: Ref<string> = ref("Skill");
const aboutTitle: Ref<string> = ref("About");
const educationTitle: Ref<string> = ref("Education");
const experianceTitle: Ref<string> = ref("Experiance");
</script>
<template>
  <div class="flex">
    <div class="pl-9">
      <sidebar />
    </div>
    <div class="mx-auto">
      <div class="max-w-[990px] mx-auto border border-solid border-gray-300">
        <resume-main-info />
        <focus-container>
          <template #header>
            <div
              class="flex justify-center items-center py-6 container-title-line"
            >
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
            <div
              class="flex justify-center items-center py-6 container-title-line"
            >
              <div class="bg-white px-6">
                <input-tag v-model="aboutTitle" class="container-title-input" />
              </div>
            </div>
          </template>
          <resume-about />
        </focus-container>
        <focus-container>
          <template #header>
            <div
              class="flex justify-center items-center py-6 container-title-line"
            >
              <div class="bg-white px-6">
                <input-tag
                  v-model="educationTitle"
                  class="container-title-input"
                />
              </div>
            </div>
          </template>
          <resume-education />
        </focus-container>
        <focus-container>
          <template #header>
            <div
              class="flex justify-center items-center py-6 container-title-line"
            >
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

        <focus-container
          v-for="resumeElement in resumeElementStore.currentElements"
          :key="resumeElement.id"
        >
          <template #header>
            <div
              class="flex justify-center items-center py-6 container-title-line"
            >
              <div class="bg-white px-6">
                <input-tag
                  v-model="resumeElement.title"
                  class="container-title-input"
                />
              </div>
            </div>
          </template>
          <template #default="{ focus }">
            <div :class="{ 'action-hide': !focus }">
              <element-factory :resume-element="resumeElement" />
            </div>
          </template>
        </focus-container>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>