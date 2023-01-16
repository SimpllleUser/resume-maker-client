import SkillInputForm from '@/components/InputForm/SkillInputForm.vue';
import ExpreienceInputForm from '@/components/InputForm/ExpreienceInputForm.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';
import AboutInputForm from '@/components/InputForm/AboutInputForm.vue';

const date = new Date().getFullYear();

const RESUME_PLACEHOLDER_TEXT = {
  ABOUT: `A few words about tasks
   you enjoy doing the most and people you would love to work with.`,
  EDUCATION: {
    NAME: 'School/University/Courses ',
    DESCRIPTION: 'Degree and field of study',
    FORM: date,
    TO: date + 1,
  },
  EXPERIANCE: {
    NAME: 'Company name ',
    POSITION: 'Position',
    DESCRIPTION: `Description (Try to list your achievements rather than
      just job responsibilities)`,
    FORM: date,
    TO: date + 1,
  },
  SKILL: 'Skill',
  MAIN_INPUT: {
    FULL_NAME: 'Your full name',
    POSITION: 'Your position',
  },
  CONTACT: 'Your contact',
};
const LOCAL_STORAGE_KEYS_RESUMES = 'ALL/RESUMES';
const INPUTS = {
  skills: {
    name: 'Skill',
    type: 'skill',
    component: SkillInputForm,
  },
  expreriance: {
    name: 'Experience',
    type: 'experience',
    component: ExpreienceInputForm,
  },
  educations: {
    name: 'Education',
    type: 'education',
    component: EducationInputForm,
  },
  ebout: {
    name: 'About',
    type: 'about',
    component: AboutInputForm,
  },
};

export default {
  RESUME_PLACEHOLDER_TEXT,
  LOCAL_STORAGE_KEYS_RESUMES,
  INPUTS,
};
