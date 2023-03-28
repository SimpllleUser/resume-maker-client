import { Ref, ref } from "vue";
import { defineStore } from "pinia";
import {
  ContentDataPlurar,
  ContentsWithPlurarData,
  CreaeteContentElement,
  ElementBase,
  RemovableContentItem,
  ResumeContentItem
} from "@/types/data-managment.types";
import { COMPONENT_KEYS, RESUME_CONTENTS_BY_ELEMENT } from "@/constants";
import { omit } from "lodash";

interface ResumeContent {
  [key: string]: ResumeContentItem
}
export const useResumeContent = defineStore("resume-content", () => {
  const resumeContent: Ref<ResumeContent> = ref({
    ['somedID']: {
      id: 'test-1',
      title: 'Experiance',
      data: [
        {
          date: {
            from: {
              year: '2023',
              month: 'Jun',
            },
            to: {
              year: '2023',
              month: 'Jun',
            },
          },
          place: 'Google',
          position: 'Front end',
          description: 'Test description',
        }
      ]
    }
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
  
  const addContentItem = ({ id, name }: ElementBase) => {
    const contentTemplate = getContentByElement(name)?.data as ContentDataPlurar;
    const currentContent = resumeContent.value[id] as ContentsWithPlurarData
    currentContent.data.push((JSON.parse(JSON.stringify(contentTemplate.at(0)))))
  };

  const removeContentItem = ({ id, index }: RemovableContentItem) => {
    const currentContent = resumeContent.value[id] as ContentsWithPlurarData
    currentContent.data.splice(index, 1);
  };
  return {
    resumeContent,
    create,
    remove,
    addContentItem,
    removeContentItem,
  };
});
