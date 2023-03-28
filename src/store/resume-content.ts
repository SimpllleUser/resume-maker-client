import { Ref, ref } from "vue";
import { defineStore } from "pinia";
import { ResumeContentItem } from "../types/data-managment.types";
import { COMPONENT_KEYS, RESUME_CONTENTS_BY_ELEMENT } from "../constants";

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



  const create = ({ id, name }: { id: string; name: string; }) => {
    if (!COMPONENT_KEYS.includes(name)) return;
    const contentTemplate = RESUME_CONTENTS_BY_ELEMENT[name] || {};
    resumeContent.value = { ...resumeContent.value, [id]: JSON.parse(JSON.stringify(contentTemplate)) };
  };

  return {
    resumeContent,
    create,
  };
});
