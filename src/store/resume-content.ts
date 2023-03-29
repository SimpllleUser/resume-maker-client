import { Ref, ref } from "vue";
import { omit } from "lodash";
import { defineStore } from "pinia";
import {
  ContentDataWithPlurar,
  ContentsWithPlurarData,
  ElementBase,
  RemovableContentItem,
  ResumeContentState
} from "@/types/data-managment.types";
import { COMPONENT_KEYS, MAIN_INFO, RESUME_CONTENTS_BY_ELEMENT } from "@/constants";

export const useResumeContent = defineStore("resume-content", () => {
  const resumeContent: Ref<ResumeContentState> = ref({
    main: MAIN_INFO,
  });

  const getContentByElement = (elementName: string): ContentDataWithPlurar | null => {
    if (!COMPONENT_KEYS.includes(elementName)) return null;
    console.log(RESUME_CONTENTS_BY_ELEMENT[elementName]);
    return RESUME_CONTENTS_BY_ELEMENT[elementName] as ContentDataWithPlurar;
  }

  const create = ({ id, name }: ElementBase) => {
    const contentTemplate = getContentByElement(name);
    if (!contentTemplate) return;
    resumeContent.value = { ...resumeContent.value, [id]: JSON.parse(JSON.stringify(contentTemplate)) };
  };

  const remove = (id: string) => {
    const updatedContent: ResumeContentState =  omit(resumeContent.value, [id]);
    resumeContent.value = updatedContent;
  };
  
  const addContent = ({ id, name }: ElementBase) => {
    const contentTemplate = getContentByElement(name)?.data;
    const currentContent = resumeContent.value[id] as ContentsWithPlurarData;
    if (!Array.isArray(contentTemplate) || !contentTemplate[0]) return;
    currentContent.data.push((JSON.parse(JSON.stringify(contentTemplate[0]))))
  };

  const removeContent = ({ id, index }: RemovableContentItem) => {
    const currentContent = resumeContent.value[id] as ContentsWithPlurarData
    currentContent.data.splice(index, 1);
  };

  const addContents = (contents: ResumeContentState) => {
    resumeContent.value = { ...resumeContent.value, ...contents };
  };

  
  return {
    resumeContent,
    create,
    remove,
    addContent,
    removeContent,
    addContents,
  };
});
