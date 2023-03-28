import { findIndex } from "lodash";
import { CurrenntResumeElement, ResumeElement } from "@/store/resume-elements";
import getUniqId from "@/services/uuid-generator";
import { IResumeContentService } from "@/types/data-managment.types copy";

export default class ResumeContentService implements IResumeContentService {
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