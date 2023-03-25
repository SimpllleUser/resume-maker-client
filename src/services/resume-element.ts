import { findIndex } from "lodash";
import { CurrenntResumeElement, ResumeElement } from "@/store/resume-elements";
import getUniqId from "@/services/uuid-generator";

 interface IResumeElementService {
    resumeElements: Array<CurrenntResumeElement>
    add(element: ResumeElement): void
    remove(id: string): void
    getAll(): Array<CurrenntResumeElement>
 }
 

export default class ResumeElementService implements IResumeElementService {
    resumeElements: Array<CurrenntResumeElement> = [];

    constructor(resumeElements: Array<CurrenntResumeElement>) {
        this.resumeElements = resumeElements;
    }

     add (element: ResumeElement): void {
        const createdElement = {
            ...element,
            id: getUniqId(),
            title: element.name,
          }
          this.resumeElements.push(createdElement);

    }
     remove (id: string): void {
        const currentIndexElement: number = findIndex(this.resumeElements, { id });
        if (currentIndexElement < 0) return;
        this.resumeElements.splice(currentIndexElement, 1);
     }
     getAll(): Array<CurrenntResumeElement> {
        return this.resumeElements;
     }
  }