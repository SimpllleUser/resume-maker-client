import { Ref, ref } from "vue";
import { omit } from "lodash";
import { defineStore } from "pinia";
import {
  ContentDataPlurar,
  ContentsWithPlurarData,
  ElementBase,
  RemovableContentItem,
  ResumeContentState
} from "@/types/data-managment.types";
import { COMPONENT_KEYS, RESUME_CONTENTS_BY_ELEMENT } from "@/constants";


export const useResumeContent = defineStore("resume-content", () => {
  const resumeContent: Ref<ResumeContentState> = ref({
    ['main']: {
      fullName: 'Your full name',
      position: 'Your position',
      contacts: [
        { icon: "phone", value: "phone" },
        { icon: "envelope", value: "email" },
        { icon: "github", value: "link" },
        { icon: "", value: "empty icon" },
      ]
    },
  });

  const getContentByElement = (elementName: string) => {
    if (!COMPONENT_KEYS.includes(elementName)) return null;
    return RESUME_CONTENTS_BY_ELEMENT[elementName];
  }

  const create = ({ id, name }: ElementBase) => {
    const contentTemplate = getContentByElement(name);
    if (!contentTemplate) return;
    resumeContent.value = { ...resumeContent.value, [id]: JSON.parse(JSON.stringify(contentTemplate)) };
  };

  const remove = (id: string) => {
    resumeContent.value = omit(resumeContent.value, [id]);
  };
  
  const addConten = ({ id, name }: ElementBase) => {
    const contentTemplate = getContentByElement(name)?.data as ContentDataPlurar;
    const currentContent = resumeContent.value[id] as ContentsWithPlurarData
    currentContent.data.push((JSON.parse(JSON.stringify(contentTemplate.at(0)))))
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
    addConten,
    removeContent,
    addContents,
  };
});
