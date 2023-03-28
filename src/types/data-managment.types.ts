import { YearMonthRange } from "@/common/types";
import { Contact } from "@/components/Resume/ResumeContact.vue";

export interface ResumeElement {
    name: string;
    component: string;
}

export type CurrenntResumeElement = ResumeElement & { id: string; title: string; }


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

interface Experiance {
    place: string;
    position: string;
    date: YearMonthRange;
    description: string;
}

interface Education {
    place: string;
    date: YearMonthRange;
    description: string;
}

export type ResumeContentSkills = ResumeContent & {
    skills: Array<string>;
}

export type ResumeContentContact = ResumeContent & {
    contacts: Contact[];
}

export type ResumeContentAbout = ResumeContent & {
    description: string;
    about: string;
}

export type ResumeContentExperience = ResumeContent & {
    experiances: Array<Experiance>
}

export type ResumeContentEducation = ResumeContent & {
    educations: Array<Education>
}

export type ResumeContentItem =
    | ResumeContentSkills
    // | ResumeContentContact
    | ResumeContentAbout
    | ResumeContentExperience
    | ResumeContentEducation;



export interface IResumeContentService {
    resumeContent: { [key: string]: ResumeContentItem }
    add(content: ResumeContentItem): void
    remove(id: string): void
}

export interface ResumeContentsElement { [key: string]: ResumeContentItem }