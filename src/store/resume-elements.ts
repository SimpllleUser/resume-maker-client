import { Ref, ref } from "vue";
import { defineStore } from "pinia";

import { Option } from "@/common/types";

import {
  CurrenntResumeElement,
  ResumeElement,
} from "@/types/data-managment.types";

import * as constants from '@/constants';

import getUniqId from "@/services/uuid-generator";
import { useStorage } from "@vueuse/core";
import swapOrderByKeys from "@/helpers";

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

  const swapOrder = (firstIndex: number, secondIndex: number) => {
    currentElements.value = swapOrderByKeys(
      currentElements.value,
      firstIndex,
      secondIndex,
    ) as Array<CurrenntResumeElement>;
  }

  const fonts: Array<Option> = [
    {
        label: 'Pop',
        value: 'pop',
    },
    {
        label: 'Lato',
        value: 'lato',
    },
    {
        label: 'Montserrat',
        value: 'montserrat',
    },
    {
        label: 'Lora',
        value: 'lora',
    }
];

const font = useStorage('font', fonts.at(0));

const setFont = (value: Option) => {
  font.value = value;
}

  return {
    resumeElements,
    currentElements,
    addResumeElement,
    removeResumeElement,
    addResumeElements,
    swapOrder,
    font,
    fonts,
    setFont,
  };
});
