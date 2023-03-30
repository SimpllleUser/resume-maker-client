import { Ref, ref } from "vue";
import { defineStore } from "pinia";

import {
  CurrenntResumeElement,
  ResumeElement,
} from "@/types/data-managment.types";

import * as constants from '@/constants';

import getUniqId from "@/services/uuid-generator";
import { useStorage } from "@vueuse/core";

export const useResumeElements = defineStore("resume-elements", () => {

  const resumeElements: Ref<Array<ResumeElement>> = ref(constants.RESUME_ELEMENTS);

  const currentElements: Ref<Array<CurrenntResumeElement>> = useStorage('resume-element', []);

  const addResumeElement = (element: ResumeElement): void => {
    currentElements.value = [...currentElements.value, { ...element, id: getUniqId() }];
  };
  const removeResumeElement = (id: string) => {
    currentElements.value = currentElements.value
      .filter((element) => element.id !== id);
  };

  const addResumeElements = (elements: Array<CurrenntResumeElement>) => {
    currentElements.value = [...currentElements.value, ...elements];
  };


  return {
    resumeElements,
    currentElements,
    addResumeElement,
    removeResumeElement,
    addResumeElements
  };
});
