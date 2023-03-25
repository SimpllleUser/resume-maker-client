import { defineStore } from "pinia";
import { Ref, ref } from "vue";

import getUniqId from "@/services/uuid-generator";

export interface ResumeElement {
  name: string;
  component: string;
}

export type CurrenntResumeElement = ResumeElement & { id: string; title: string; }

const preficName = "resume";

export const useResumeElements = defineStore("resume-elements", () => {
  const resumeElements: Ref<Array<ResumeElement>> = ref([
    {
      name: "Skills",
      component: `${preficName}-skills`,
    },
    {
      name: "Education",
      component: `${preficName}-education`,
    },
    {
      name: "Experiance",
      component: `${preficName}-experiance`,
    },
    {
      name: "About",
      component: `${preficName}-about`,
    },
  ]);
  const currentElements: Ref<Array<CurrenntResumeElement>> = ref([]);

  const addResumeElement = (element: ResumeElement): void => {
    const createdElement = {
      ...element,
      id: getUniqId(),
      title: element.name,
    }
    currentElements.value.push(createdElement);
    console.log(currentElements);
  };
  const removeResumeElement = () => {};

  return {
    resumeElements,
    currentElements,
    addResumeElement,
    removeResumeElement,
  };
});
