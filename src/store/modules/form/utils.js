import _ from 'lodash';
import SkillInputForm from '@/components/InputForm/SkillInputForm.vue';
import ExpreienceInputForm from '@/components/InputForm/ExpreienceInputForm.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';
import AboutInputForm from '@/components/InputForm/AboutInputForm.vue';
import EducationStaticItem from '@/components/StaticItem/EducationStaticItem.vue';
import ExpreienceStaticInput from '@/components/StaticItem/ExpreienceStaticInput.vue';
import SkillStaticItem from '@/components/StaticItem/SkillStaticItem.vue';
import AboutStaticItem from '@/components/StaticItem/AboutStaticItem.vue';
// import utils from './utils';

const inputsList = [
  {
    name: 'Skill',
    type: 'skill',
    component: SkillInputForm,
    componentStatic: SkillStaticItem,
  },
  {
    name: 'Experience',
    type: 'experience',
    component: ExpreienceInputForm,
    componentStatic: ExpreienceStaticInput,
  },
  {
    name: 'Education',
    type: 'education',
    component: EducationInputForm,
    componentStatic: EducationStaticItem,
  },
  {
    name: 'About',
    type: 'about',
    component: AboutInputForm,
    componentStatic: AboutStaticItem,
  },
];
const statuePropertyToLocalStorage = (key, value) => { localStorage[key] = JSON.stringify(value); };
const initStateProperty = (stateKey, defaultValue) => {
  if (!localStorage[stateKey]) {
    statuePropertyToLocalStorage(stateKey, defaultValue);
    return defaultValue;
  }
  return JSON.parse(localStorage[stateKey]);
};

export default {
  statuePropertyToLocalStorage,
  initStateProperty: (stateKey, defaultValue) => {
    if (!localStorage[stateKey]) {
      statuePropertyToLocalStorage(stateKey, defaultValue);
      return defaultValue;
    }
    return JSON.parse(localStorage[stateKey]);
  },
  getInitState(isDefault = false) {
    const defaultTitles = {};
    const defaultFormData = {
      fullName: '',
      position: '',
      contacts: [
        { icon: 'phone', value: '' },
      ],
    };
    const defaultInputs = [];

    const formTitles = initStateProperty('formTitles', {});
    const formData = initStateProperty('formData', defaultFormData);
    if (isDefault) {
      return {
        formTitles: defaultTitles,
        formData: defaultFormData,
        inputs: defaultInputs,
      };
    }
    const inputs = initStateProperty('inputs', defaultInputs).map((currentInput) => ({
      ...currentInput,
      ..._.find(inputsList, { name: currentInput.name }),
    }));
    return {
      formTitles,
      formData,
      inputs,
    };
  },
};
