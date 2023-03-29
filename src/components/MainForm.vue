<script setup lang="ts">
import { computed, onMounted, watch } from "vue";

import ResumeMainInfo from "@/components/Resume/ResumeMainInfo.vue";
import FocusContainer from "@/components/FocusContainer.vue";
import InputTag from "@/components/Input/InputTag.vue";
import Sidebar from "@/components/Layout/Sidebar.vue";
import ElementActions from "@/components/Element/ElementActions.vue";

import { useResumeElements } from "../store/resume-elements";
import { useResumeContent } from "../store/resume-content";
import { getDeaultContentData } from "@/services/generate-default-data";
import { omit } from "lodash";

const resumeElementStore = useResumeElements();
const resumeContentStore = useResumeContent();

watch(() => resumeElementStore.currentElements, (currentElements, prev) => {
  if (currentElements.length <= prev.length) return;
  const createdElement = currentElements.at(-1);
  resumeContentStore.create(createdElement);
}, { deep: true });

const handleRemoveElement = (id: string) => {
  resumeElementStore.removeResumeElement(id);
  resumeContentStore.remove(id);
}


const handleRemoveItem = (index: number, elementId: string) => {
  resumeContentStore.removeContent({ index, id: elementId });
};

// onMounted(() => {
//   const { elements, contents } = getDeaultContentData();
//   resumeElementStore.addResumeElements(elements);
//   resumeContentStore.addContents(contents);
// })

</script>
<template>
  <div class="flex pb-12">
    <div class="mx-auto fixed top-0 left-24 print:hidden">
      <div>
        <sidebar />
      </div>
    </div>
    <div class="mx-auto">
      <div class="max-w-[990px] mx-auto border border-solid border-gray-300 p-4">
        <resume-main-info v-model="resumeContentStore.resumeContent['main']" />
        <div v-for="resumeElement in resumeElementStore.currentElements" :key="resumeElement.id" class="my-6">
          <focus-container>
            <template #header>
              <div class="flex justify-center items-center py-6 container-title-line">
                <div class="bg-white px-6">
                  <input-tag v-model="resumeContentStore.resumeContent[resumeElement.id].title"
                    class="container-title-input" />
                </div>
              </div>
            </template>
            <template #default="{ focus }">
              <div class="relative" :class="{ 'action-hide': !focus }">
                <div v-show="focus" class="element-actions absolute left-1/2 transform -translate-x-1/2">
                  <element-actions @remove="handleRemoveElement(resumeElement.id)" />
                </div>
                <component v-model="resumeContentStore.resumeContent[resumeElement.id].data" :is="resumeElement.component"
                  @add="resumeContentStore.addContent(resumeElement)"
                  @remove="handleRemoveItem($event, resumeElement.id)" />
              </div>
            </template>
          </focus-container>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>