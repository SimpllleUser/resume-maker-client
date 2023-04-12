import { Ref, ref } from "vue";
import { defineStore } from "pinia";

import { ColorOption, Option } from "@/common/types";

import {
  CurrenntResumeElement,
  ResumeElement,
} from "@/types/data-managment.types";

import * as constants from '@/constants';

import getUniqId from "@/services/uuid-generator";
import { useStorage } from "@vueuse/core";
import swapOrderByKeys from "@/helpers";
import { COLORS, FONTS } from "@/constants";

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

  const setResumeElements = (elements: Array<CurrenntResumeElement>) => {
    currentElements.value = elements;
  };

  const swapOrder = (firstIndex: number, secondIndex: number) => {
    currentElements.value = swapOrderByKeys(
      currentElements.value,
      firstIndex,
      secondIndex,
    ) as Array<CurrenntResumeElement>;
  }
  const font = useStorage('font', FONTS.at(0));
  const setFont = (value: Option) => {
    font.value = value;
  }
  const color = useStorage('color', COLORS.at(0));
  const setColor = (value: ColorOption) => {
    color.value = value;
  }

  return {
    resumeElements,
    currentElements,
    addResumeElement,
    removeResumeElement,
    addResumeElements,
    swapOrder,
    font,
    fonts: FONTS,
    setFont,
    color,
    colors: COLORS,
    setColor,
    setResumeElements,
  };
});
