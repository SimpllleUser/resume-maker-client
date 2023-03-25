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
