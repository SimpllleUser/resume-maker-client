import { COLORS, FONTS, MAIN_INFO, RESUME_CONTENTS_BY_ELEMENT, RESUME_ELEMENTS, RESUME_ENTITIES } from "@/constants";
import {  CurrenntResumeElement, ResumeContentState, ResumeElement, ResumeItem, ResumeStyle } from "@/types/data-managment.types";
import getUniqId from "./uuid-generator";
import { ColorOption, Option } from "@/common/types";

export interface ResumeGeneratedData {
    contents: ResumeContentState;
    elements: Array<CurrenntResumeElement>;
}

export const getDeaultContentData = (): ResumeGeneratedData & { id: string } => {
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
    return { id: getUniqId(), contents, elements };
};

export const getDataForNewResume = (): ResumeItem => {
    const elements: Array<CurrenntResumeElement> = [];
    const content: ResumeContentState = { 
        main: MAIN_INFO,
        dynamic: {},
    };
    RESUME_ELEMENTS.forEach((element) => {
        const id: string = getUniqId();
        content.dynamic[id] = RESUME_CONTENTS_BY_ELEMENT[element.name];
        elements.push({
            ...element, id,
            title: ""
        });
    });

    const style: ResumeStyle = { font: FONTS[0], color: COLORS[0] };

    return { id: getUniqId(), content, elements, ...style };
};