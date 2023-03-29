import { RESUME_CONTENTS_BY_ELEMENT, RESUME_ELEMENTS, RESUME_ENTITIES } from "@/constants";
import {  CurrenntResumeElement, ResumeContentState, ResumeElement } from "@/types/data-managment.types";
import getUniqId from "./uuid-generator";

interface ResumeGeneratedData {
    contents: ResumeContentState;
    elements: Array<CurrenntResumeElement>;
}

export const getDeaultContentData = (): ResumeGeneratedData => {
    const elements: Array<CurrenntResumeElement> = [];
    const contents: ResumeContentState = {};
    RESUME_ELEMENTS.forEach((element) => {
        const id: string = getUniqId();
        contents[id] = RESUME_CONTENTS_BY_ELEMENT[element.name];
        elements.push({
            ...element, id,
            title: ""
        });

    })
    return { contents, elements };
};