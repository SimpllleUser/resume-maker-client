import SkillInputForm from '@/components/InputForm/SkillInputForm.vue';
import ExpreienceInputForm from '@/components/InputForm/ExpreienceInputForm.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';
import AboutInputForm from '@/components/InputForm/AboutInputForm.vue';
import EducationStaticItem from '@/components/StaticItem/EducationStaticItem.vue';
import ExpreienceStaticInput from '@/components/StaticItem/ExpreienceStaticInput.vue';
import SkillStaticItem from '@/components/StaticItem/SkillStaticItem.vue';
import AboutStaticItem from '@/components/StaticItem/AboutStaticItem.vue';

export default {
  inputsList() {
    return [
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
  },
  getValue: ({ formData }) => (index) => {
    const createdInputKeys = Object
      ?.keys(formData)
      ?.filter((key) => key.split('.').length > 1);
    return createdInputKeys
      ?.map((key) => formData[key])
      ?.at(index);
  },
};
