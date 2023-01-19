import SkillInputForm from '@/components/InputForm/SkillInputForm.vue';
import ExpreienceInputForm from '@/components/InputForm/ExpreienceInputForm.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';
import AboutInputForm from '@/components/InputForm/AboutInputForm.vue';

const inputList = {
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

export default inputList;
