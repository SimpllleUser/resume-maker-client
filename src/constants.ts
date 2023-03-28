import { keyBy, mapValues, property } from "lodash";
import { YearMonthRange } from "./common/types";
import {
    ResumeContentAbout,
    ResumeContentEducation,
    ResumeContentExperience,
    ResumeContentsElement,
    ResumeContentSkills,
    ResumeElement
} from "./types/data-managment.types";


const PREFIX_NAME = "resume";

const mockDate: YearMonthRange = {
    from: {
        month: "",
        year: "",
    },
    to: {
        month: "",
        year: "",
    },
};


const RESUME_ENTITIES: [
    { element: ResumeElement, content: ResumeContentSkills },
    { element: ResumeElement, content: ResumeContentEducation },
    { element: ResumeElement, content: ResumeContentExperience },
    { element: ResumeElement, content: ResumeContentAbout },
] = [
        {
            element: {
                name: 'Skill',
                component: `${PREFIX_NAME}-skills`,
            },
            content: {
                title: 'Skills',
                skills: ['Write example skill'],
            },
        },
        {
            element: {
                name: 'Education',
                component: `${PREFIX_NAME}-education`,
            },
            content: {
                title: 'Education',
                educations: [
                    {
                        place: 'Where are you studied',
                        date: mockDate,
                        description: 'Write about your study',
                    }
                ],
            },
        },
        {
            element: {
                name: 'Experiance',
                component: `${PREFIX_NAME}-experiance`,
            },
            content: {
                title: 'Experiance',
                experiances: [
                    {
                        place: 'Where are you worked',
                        position: 'Wath did was your postion',
                        date: mockDate,
                        description: 'Write about your experiance',
                    },
                ],
            },
        },
        {
            element: {
                name: 'About',
                component: `${PREFIX_NAME}-about`,
            },
            content: {
                title: 'About',
                about: 'Some thing about you',
                description: '',
            },
        },
    ];

export const RESUME_ELEMENTS: Array<ResumeElement> = RESUME_ENTITIES.map((property('element')));
export const RESUME_CONTENTS_BY_ELEMENT: ResumeContentsElement = mapValues(keyBy(RESUME_ENTITIES, 'element.name'), 'content');
export const COMPONENT_KEYS = Object.keys(RESUME_CONTENTS_BY_ELEMENT);
