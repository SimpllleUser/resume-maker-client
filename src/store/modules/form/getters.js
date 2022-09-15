import SkillInputForm from '@/components/InputForm/SkillInputForm.vue';
import ExpreienceInputForm from '@/components/InputForm/ExpreienceInputForm.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';
import EducationStaticItem from '@/components/StaticItem/EducationStaticItem.vue';
import ExpreienceStaticInput from '@/components/StaticItem/ExpreienceStaticInput.vue';
import SkillStaticItem from '@/components/StaticItem/SkillStaticItem.vue';

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
