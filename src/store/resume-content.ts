import { Ref, ref } from "vue";
import { defineStore } from "pinia";
import { ResumeContentItem } from "../types/data-managment.types";
import { RESUME_CONTENTS_BY_ELEMENT } from "../constants";

interface ResumeContent {
  [key: string]: ResumeContentItem
}
export const useResumeContent = defineStore("resume-content", () => {
  const resumeContent: Ref<ResumeContent> = ref({
    ['somedID']: {
      id: 'test-1',
      title: 'Experiance',
      experiances: [
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

  

const create = ({ id: string, name: string }) => {
  
  const currentTemplate = RESUME_CONTENTS_BY_ELEMENT[name] || {};
  const contentTemplate = 
}

  return {
    resumeContent,
  };
});
