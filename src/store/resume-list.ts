import { Ref, ref } from "vue";
import { defineStore } from "pinia";
import { ResumeItem } from "@/types/data-managment.types";
import { useStorage } from "@vueuse/core";
import { assign, differenceBy, find, findIndex } from "lodash";

export const useResumeList = defineStore("resume-list", () => {
    const resumes: Ref<Array<ResumeItem>> = useStorage('resumes', []) || [];

    const addResume = (resume: ResumeItem) => {
        resumes.value = [...resumes.value, resume];
    }

    const getResume = (id: string): ResumeItem | null => {
        return find(resumes.value, { id }) || null;
    }
    
    const setResume = (resumeItem: ResumeItem): void => {
        if (!resumeItem) return;
        const currentItemIndex = findIndex(resumes.value, { id: resumeItem.id });
        resumes.value = assign([], { ...resumes.value,  [currentItemIndex]: resumeItem});
    }

    const removeResume = (resumeItem: ResumeItem): void => {
        if (!resumeItem.id) return;
        resumes.value = differenceBy(resumes.value, [resumeItem]);
    }

    return {
        resumes,
        addResume,
        getResume,
        setResume,
        removeResume,
    };
});