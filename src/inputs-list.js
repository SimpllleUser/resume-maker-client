import { v4 as uuidv4 } from 'uuid';
import SkillInputForm from '@/components/InputForm/SkillInputForm.vue';
import ExpreienceInputForm from '@/components/InputForm/ExpreienceInputForm.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';
import AboutInputForm from '@/components/InputForm/AboutInputForm.vue';
import constants from '@/constants';

const getValue = ({ type, quantity = 0, value }) => ({
  key: `${type}.${uuidv4()}`,
  value: quantity
    ? new Array(quantity).fill(value)
    : value,
});

const inputList = {
  [constants.INPUT_KEYS.SKILL]: {
    name: 'Skill',
    type: constants.INPUT_KEYS.SKILL,
    component: SkillInputForm,
    defaultValue: getValue({
      type: constants.INPUT_KEYS.SKILL,
      quantity: 3,
      value: constants.DEFAULT_INPUT_VALUE.SKILL,
    }),
  },
  [constants.INPUT_KEYS.EXPERIENCE]: {
    name: 'Experience',
    type: constants.INPUT_KEYS.EXPERIENCE,
    component: ExpreienceInputForm,
    defaultValue: getValue({
      type: constants.INPUT_KEYS.EXPERIENCE,
      quantity: 3,
      value: constants.DEFAULT_INPUT_VALUE.EXPRERIANCE,
    }),
  },
  [constants.INPUT_KEYS.EDUCATION]: {
    name: 'Education',
    type: constants.INPUT_KEYS.EDUCATION,
    component: EducationInputForm,
    defaultValue: getValue({
      type: constants.INPUT_KEYS.EDUCATION,
      quantity: 3,
      value: constants.DEFAULT_INPUT_VALUE.EDUCATION,
    }),
  },
  [constants.INPUT_KEYS.ABOUT]: {
    name: 'About',
    type: constants.INPUT_KEYS.ABOUT,
    component: AboutInputForm,
    defaultValue: getValue({
      type: constants.INPUT_KEYS.ABOUT,
      value: constants.DEFAULT_INPUT_VALUE.ABOUT,
    }),
  },
};

export default inputList;
