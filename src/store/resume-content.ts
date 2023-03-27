import { Ref, ref } from "vue";
import { defineStore } from "pinia";

interface ResumeContent {
  [key: string]: any
}
export const useResumeContent = defineStore("resume-content", () => {
  const resumeContent: Ref<ResumeContent> = ref({});

  return {
    resumeContent,
  };
});
