import { ColorOption, Option, YearMonthRange } from "@/common/types";

export interface MainContent {
    fullName: string;
    position: string;
    img: string;
    contacts: Array<Contact>,
}

export interface MainContentState {
    main: MainContent;
}

export interface ResumeElement {
    name: string;
    component: string;
}
export interface Contact {
    icon: string;
    value: string;
}

export type CurrenntResumeElement = ResumeElement & { id: string; }


export interface IResumeElementService {
    resumeElements: Array<CurrenntResumeElement>
    add(element: ResumeElement): void
    remove(id: string): void
    getAll(): Array<CurrenntResumeElement>
}


interface ResumeContent {
    // id: string;
    title: string;
}

export interface Experiance {
    place: string;
    position: string;
    date: YearMonthRange;
    description: string;
}

export interface Education {
    place: string;
    date: YearMonthRange;
    description: string;
}

export type ResumeContentSkills = ResumeContent & {
    data: Array<string>;
}

export type ResumeContentContact = ResumeContent & {
    data: Array<Contact>;
}

export type ResumeContentAbout = ResumeContent & {
    data: {
        description: string;
        about: string;
    }
}


export type ResumeContentExperience = ResumeContent & {
    data: Array<Experiance>
}

export type ResumeContentEducation = ResumeContent & {
    data: Array<Education>
}

export type ResumeContentItem =
    | ResumeContentSkills
    | ResumeContentAbout
    | ResumeContentExperience
    | ResumeContentEducation


export interface DynamicContents { [key: string]: { title: string; } & ResumeContentItem };

export type ResumeContentState = {
    ['main']: MainContent;
    dynamic: DynamicContents;
};

export type MainResumeVModel = MainContent;

export interface IResumeContentService {
    resumeContent: { [key: string]: ResumeContentItem }
    add(content: ResumeContentItem): void
    remove(id: string): void
}

export interface ResumeContentsElement { [key: string]: ResumeContentItem }

export interface ElementBase {
    id: string;
    name: string;
}
export interface RemovableContentItem {
    id: string;
    index: number;
}

export type ContentsWithPlurarData =
    | ResumeContentEducation
    | ResumeContentExperience
    | ResumeContentSkills


export type ContentDataWithPlurar =
    | ResumeContentSkills
    | ResumeContentAbout
    | ResumeContentExperience
    | ResumeContentEducation;

export interface ResumeStyle { color: ColorOption, font: Option };

export interface ResumeStyleElement {
    color: ColorOption;
    font: Option;
}

export type ResumeItem =
    & ResumeStyleElement
    & { elements: Array<CurrenntResumeElement>; }
    & { content: ResumeContentState }
    & { id: string };