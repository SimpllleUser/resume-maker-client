import SkillInput from '@/components/SkillInput.vue';
import ExpreienceInput from '@/components/ExpreienceInput.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';

export default {
  inputsList() {
    return [
      {
        name: 'Skill',
        type: 'skill',
        component: SkillInput,
      },
      {
        name: 'Experience',
        type: 'experience',
        component: ExpreienceInput,
      },
      {
        name: 'Education',
        type: 'education',
        component: EducationInputForm,
      },
    ];
  },
};
