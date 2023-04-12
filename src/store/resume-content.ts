import { Ref } from "vue";
import { omit } from "lodash";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import {
  ContentDataWithPlurar,
  ContentsWithPlurarData,
  DynamicContents,
  ElementBase,
  RemovableContentItem,
  ResumeContentState
} from "@/types/data-managment.types";

import { COMPONENT_KEYS, MAIN_INFO, RESUME_CONTENTS_BY_ELEMENT } from "@/constants";

const getCopyObject = (obj: any) => JSON.parse(JSON.stringify(obj));

export const useResumeContent = defineStore("resume-content", () => {

  const resumeContentState: Ref<ResumeContentState> = useStorage('resume-content-state', {
    main: MAIN_INFO,
    dynamic: {},
  });

  const getContentByElement = (elementName: string): ContentDataWithPlurar | null => {
    if (!COMPONENT_KEYS.includes(elementName)) return null;
    return RESUME_CONTENTS_BY_ELEMENT[elementName] as ContentDataWithPlurar;
  }

  const create = ({ id, name }: ElementBase) => {
    const contentTemplate = getContentByElement(name);
    if (!contentTemplate) return;
    resumeContentState.value.dynamic = {
      ...resumeContentState.value.dynamic,
      [id]: JSON.parse(JSON.stringify(contentTemplate)),
    };
  };

  const remove = (id: string) => {
    const updatedContent: DynamicContents = omit(resumeContentState.value.dynamic, [id]);
    resumeContentState.value = {
      ...resumeContentState.value,
      ...updatedContent,
    };
  };

  const addContent = ({ id, name }: ElementBase) => {
    const contentTemplate = getContentByElement(name)?.data;
    const currentContent = resumeContentState.value.dynamic[id] as ContentsWithPlurarData;
    if (!Array.isArray(contentTemplate) || !contentTemplate[0]) return;
    currentContent.data.push(getCopyObject(contentTemplate[0]));
  };

  const removeContent = ({ id, index }: RemovableContentItem) => {
    const currentContent = resumeContentState.value.dynamic[id] as ContentsWithPlurarData
    currentContent.data.splice(index, 1);
  };

  const addContents = (contents: ResumeContentState) => {
    resumeContentState.value = { ...resumeContentState.value.dynamic, ...contents };
  };

  const setContents = (contents: ResumeContentState) => {
    resumeContentState.value = contents;
  };


  return {
    resumeContentState,
    create,
    remove,
    addContent,
    removeContent,
    addContents,
    setContents,
  };
});
