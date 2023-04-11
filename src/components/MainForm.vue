<script setup lang="ts">
import { watch } from "vue";

import ResumeMainInfo from "@/components/Resume/ResumeMainInfo.vue";
import FocusContainer from "@/components/FocusContainer.vue";
import InputTag from "@/components/Input/InputTag.vue";
import Sidebar from "@/components/Layout/Sidebar.vue";
import ElementActions from "@/components/Element/ElementActions.vue";

import { useResumeElements } from "@/store/resume-elements";
import { useResumeContent } from "@/store/resume-content";

const resumeElementStore = useResumeElements();
const resumeContentStore = useResumeContent();

watch(() => resumeElementStore.currentElements, (currentElements, prev) => {
  if (currentElements.length <= prev.length) return;
  const createdElement = currentElements.at(-1);
  if (!createdElement) return;
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

const canShowUpButton = (index: number): boolean => index !== 0;

const canShowDownButton = (index: number): boolean => index !== (resumeElementStore.currentElements.length - 1);

</script>
<template>
  <div class="flex max-w-[1240px] mx-auto pb-12 bg-slate-100">
    <div class="mx-auto bg-white print:hidden">
      <div>
        <sidebar />
      </div>
    </div>
    <div class="mx-auto h-[90vh] overflow-y-auto overflow-x-hidden scrollbar scrollbar-thumb-primary scrollbar-track-white bg-white print:h-auto">
      <div class="max-w-[990px] mx-auto border border-solid border-gray-300 p-4">
        <resume-main-info v-model="resumeContentStore.resumeContentState.main" />
        <div v-for="(resumeElement, index) in resumeElementStore.currentElements" :key="resumeElement.id" class="my-6">
          <focus-container>
            <template #header>
              <div class="flex justify-center items-center py-8 my-2 container-title-line" :class="`variant-${resumeElementStore.color.label}`">
                <div class="bg-white px-6 z-10">
                  <!-- variant-${resumeElementStore.color.label} -->
                  <input-tag v-model="resumeContentStore.resumeContentState.dynamic[resumeElement.id].title"
                    class="container-title-input" :class="resumeElementStore.color.text" />
                </div>
              </div>
            </template>
            <template #default="{ focus }">
              <div class="relative p-3" :class="{ 'action-hide': !focus, 'shadow-2xl': focus }" style="z-index: 999999999999999999 !important;">
                <div class="w-1 absolute right-0" v-show="focus" style="right: -25px;">
                  <button v-show="canShowUpButton(index)" @click="resumeElementStore.swapOrder(Number(index), index - 1)"
                    class="btn btn-primary rotate-180 btn-sm mb-1">
                    <unicon name="angle-double-down" fill="white"></unicon>
                  </button>
                  <button v-show="canShowDownButton(index)"
                    @click="resumeElementStore.swapOrder(Number(index), index + 1)" class="btn btn-primary btn-sm">
                    <unicon name="angle-double-down" fill="white"></unicon>
                  </button>
                </div>
                <div v-show="focus" class="element-actions absolute left-1/2 transform -translate-x-1/2">
                  <element-actions @remove="handleRemoveElement(resumeElement.id)" />
                </div>
                <component v-model="resumeContentStore.resumeContentState.dynamic[resumeElement.id].data"
                  :is="resumeElement.component" @add="resumeContentStore.addContent(resumeElement)"
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