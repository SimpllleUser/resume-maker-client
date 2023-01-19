import { v4 as uuidv4 } from 'uuid';
import SkillInputForm from '@/components/InputForm/SkillInputForm.vue';
import ExpreienceInputForm from '@/components/InputForm/ExpreienceInputForm.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';
import AboutInputForm from '@/components/InputForm/AboutInputForm.vue';
import constants from '@/constants';

const getValue = ({ type, quantity = 0, value }) => ({
  [`${type}.${uuidv4()}`]: quantity
    ? new Array(quantity).fill(value)
    : value,
});

const inputList = {
  skills: {
    name: 'Skill',
    type: 'skill',
    component: SkillInputForm,
    defaultValue: getValue({
      type: 'skills',
      quantity: 3,
      value: constants.DEFAULT_INPUT_VALUE.SKILL,
    }),
  },
  expreriance: {
    name: 'Experience',
    type: 'experience',
    component: ExpreienceInputForm,
    defaultValue: getValue({
      type: 'expreriance',
      quantity: 3,
      value: constants.DEFAULT_INPUT_VALUE.EXPRERIANCE,
    }),
  },
  educations: {
    name: 'Education',
    type: 'education',
    component: EducationInputForm,
    defaultValue: getValue({
      type: 'educations',
      quantity: 3,
      value: constants.DEFAULT_INPUT_VALUE.EDUCATION,
    }),
  },
  ebout: {
    name: 'About',
    type: 'about',
    component: AboutInputForm,
    defaultValue: getValue({
      type: 'ebout',
      value: constants.DEFAULT_INPUT_VALUE.ABOUT,
    }),
  },
};

export default inputList;
