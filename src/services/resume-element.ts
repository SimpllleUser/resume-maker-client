import { findIndex } from "lodash";
import getUniqId from "@/services/uuid-generator";
import { IResumeElementService, CurrenntResumeElement, ResumeElement } from "@/types/data-managment.types";

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