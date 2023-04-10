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

  // const colors = [ '#2a2d31', '#6c7f93', '#799acc', '#005842' ];
  const colors: Array<ColorOption> = [
    {
      label: 'slate',
      bg: 'bg-slate-700',
      text: 'text-slate-700',
      code: '#334155',
    },
    {
      label: 'green',
      bg: 'bg-green-700',
      text: 'text-green-700',
      code: '#14532d',
    },
    {
      label: 'sky',
      bg: 'bg-sky-900',
      text: 'text-sky-900',
      code: '#0c4a6e',
    },
    {
      label: 'stone',
      bg: 'bg-stone-700',
      text: 'text-stone-700',
      code: '#44403c',
    },
    {
      label: 'indigo',
      bg: 'bg-indigo-700',
      text: 'text-indigo-700',
      code: '#3730a3',
    },
    {
      label: 'sky-500',
      bg: 'bg-sky-500',
      text: 'text-sky-500',
      code: '#0ea5e9',
    },
  ];
  const color: Ref<ColorOption> = useStorage('color', colors.at(0));
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
    fonts,
    setFont,
    color,
    colors,
    setColor,
  };
});
