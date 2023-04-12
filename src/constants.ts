import { keyBy, mapValues, property } from "lodash";
import { YearMonthRange, ColorOption, Option } from "@/common/types";


import {
    MainContent,
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


export const RESUME_ENTITIES: [
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
                data: ['Write example skill'],
            },
        },
        {
            element: {
                name: 'Education',
                component: `${PREFIX_NAME}-education`,
            },
            content: {
                title: 'Education',
                data: [
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
                data: [
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
                data: {
                    about: 'Some thing about you',
                    description: '',
                }
            },
        },
    ];

export const RESUME_ELEMENTS: Array<ResumeElement> = RESUME_ENTITIES.map((property('element')));
export const RESUME_CONTENTS_BY_ELEMENT: ResumeContentsElement = mapValues(keyBy(RESUME_ENTITIES, 'element.name'), 'content');
export const COMPONENT_KEYS = Object.keys(RESUME_CONTENTS_BY_ELEMENT);
export const MAIN_INFO: MainContent = {
    img: '',
    fullName: 'Your full name',
    position: 'Your position',
    contacts: [
        { icon: "phone", value: "phone" },
        { icon: "envelope", value: "email" },
        { icon: "github", value: "link" },
        { icon: "", value: "empty icon" },
    ]
};

export const PRIMARY = "#4B6BFB";
export const SECONDARY = "#7B92B2";
export const ACCENT = "#67CBA0";
export const NEUTRAL = "#181A2A";

export const FONTS: Array<Option> = [
    {
        label: 'Pop',
        value: 'font-pop',
    },
    {
        label: 'Lato',
        value: 'font-lato',
    },
    {
        label: 'Montserrat',
        value: 'font-montserrat',
    },
    {
        label: 'Lora',
        value: 'font-lora',
    }
];

export const COLORS: Array<ColorOption> = [
    {
        label: 'slate',
        bg: 'bg-slate-700',
        text: 'text-slate-700',
        code: '#334155',
    },
    {
        label: 'green',
        bg: 'bg-green-700',
        text: 'text-green-700',
        code: '#14532d',
    },
    {
        label: 'sky',
        bg: 'bg-sky-900',
        text: 'text-sky-900',
        code: '#0c4a6e',
    },
    {
        label: 'stone',
        bg: 'bg-stone-700',
        text: 'text-stone-700',
        code: '#44403c',
    },
    {
        label: 'indigo',
        bg: 'bg-indigo-700',
        text: 'text-indigo-700',
        code: '#3730a3',
    },
    {
        label: 'sky-500',
        bg: 'bg-sky-500',
        text: 'text-sky-500',
        code: '#0ea5e9',
    },
];
