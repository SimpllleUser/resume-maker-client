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
    DATE: 'from - to',
  },
  SKILL: 'Skill',
  MAIN_INPUT: {
    FULL_NAME: 'Your full name',
    POSITION: 'Your position',
  },
  CONTACT: 'Your contact',
};
const LOCAL_STORAGE_KEYS_RESUMES = 'ALL/RESUMES';

const DEFAULT_INPUT_VALUE = {
  CONTACT: {
    icon: 'phone',
    value: '',
  },
  SKILL: '',
  EXPRERIANCE: {
    companyName: '',
    position: '',
    date: {
      from: '',
      to: '',
    },
    description: '',
  },
  EDUCATION: {
    educationName: '',
    date: {
      from: '',
      to: '',
    },
    description: '',
  },
  ABOUT: '',
};

const INPUT_KEYS = {
  ABOUT: 'about',
  SKILL: 'skill',
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
};

export default {
  RESUME_PLACEHOLDER_TEXT,
  LOCAL_STORAGE_KEYS_RESUMES,
  DEFAULT_INPUT_VALUE,
  INPUT_KEYS,
};
