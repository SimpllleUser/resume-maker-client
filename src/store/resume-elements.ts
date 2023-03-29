import { Ref, ref } from "vue";
import { defineStore } from "pinia";
import { findIndex } from "lodash";

import {
  CurrenntResumeElement,
  ResumeElement,
} from "@/types/data-managment.types copy";

import * as constants from '@/constants.ts';

export const useResumeElements = defineStore("resume-elements", () => {
  const resumeElements: Ref<Array<ResumeElement>> = ref(constants.RESUME_ELEMENTS);
  const currentElements: Ref<Array<CurrenntResumeElement>> = ref([]);


  const addResumeElement = (element: ResumeElement): void => {
    currentElements.value = [ ...currentElements.value, { ...element, id: Date.now() }];
  };
  const removeResumeElement = (id: string) => {
    currentElements.value = currentElements.value
    .filter((element) => element.id !== id);
  };

  const addResumeElements = (elements: Array<ResumeElement>) => {
    currentElements.value = [ ...currentElements.value, ...elements ];
  };

  return {
    resumeElements,
    currentElements,
    addResumeElement,
    removeResumeElement,
    addResumeElements
  };
});
