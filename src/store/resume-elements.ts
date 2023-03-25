import { Ref, ref } from "vue";
import { defineStore } from "pinia";
import { findIndex } from "lodash";

import ResumeElementService from "../services/resume-element";

export interface ResumeElement {
  name: string;
  component: string;
}

export type CurrenntResumeElement = ResumeElement & { id: string; title: string; }

const prefixName = "resume";

export const useResumeElements = defineStore("resume-elements", () => {
  const resumeElements: Ref<Array<ResumeElement>> = ref([
    {
      name: "Skills",
      component: `${prefixName}-skills`,
    },
    {
      name: "Education",
      component: `${prefixName}-education`,
    },
    {
      name: "Experiance",
      component: `${prefixName}-experiance`,
    },
    {
      name: "About",
      component: `${prefixName}-about`,
    },
  ]);
  const currentElements: Ref<Array<CurrenntResumeElement>> = ref([]);

  const resumeElementSerice = new ResumeElementService(currentElements.value);

  const addResumeElement = (element: ResumeElement): void => {
    resumeElementSerice.add(element);
  };
  const removeResumeElement = (id: string) => {
    resumeElementSerice.remove(id);
  };

  return {
    resumeElements,
    currentElements,
    addResumeElement,
    removeResumeElement,
  };
});
