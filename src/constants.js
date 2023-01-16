const date = new Date().getFullYear();

export const RESUME_PLACEHOLDER_TEXT = {
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
export const LOCAL_STORAGE_KEYS_RESUMES = 'ALL/RESUMES';
