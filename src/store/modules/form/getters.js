import SkillInputForm from '@/components/InputForm/SkillInputForm.vue';
import ExpreienceInputForm from '@/components/InputForm/ExpreienceInputForm.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';

export default {
  inputsList() {
    return [
      {
        name: 'Skill',
        type: 'skill',
        component: SkillInputForm,
      },
      {
        name: 'Experience',
        type: 'experience',
        component: ExpreienceInputForm,
      },
      {
        name: 'Education',
        type: 'education',
        component: EducationInputForm,
      },
    ];
  },
};
