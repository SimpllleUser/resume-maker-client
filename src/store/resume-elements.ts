import { Ref, ref } from "vue";
import { defineStore } from "pinia";
import { findIndex } from "lodash";

import ResumeElementService from "@/services/resume-element";
import {
  CurrenntResumeElement,
  ResumeElement,
} from "@/types/data-managment.types copy";

import * as constants from '@/constants.ts';

export const useResumeElements = defineStore("resume-elements", () => {
  const resumeElements: Ref<Array<ResumeElement>> = ref(constants.RESUME_ELEMENTS);
  const currentElements: Ref<Array<CurrenntResumeElement>> = ref([]);

  const resumeElementSerice = new ResumeElementService(currentElements.value);

  const addResumeElement = (element: ResumeElement): void => {
    currentElements.value = [ ...currentElements.value, { ...element, id: Date.now() }];
    // resumeElementSerice.add(element);
  };
  const removeResumeElement = (id: string) => {
    currentElements.value = currentElements.value
    .filter((element) => element.id !== id);
    // resumeElementSerice.remove(id);
  };

  return {
    resumeElements,
    currentElements,
    addResumeElement,
    removeResumeElement,
  };
});
