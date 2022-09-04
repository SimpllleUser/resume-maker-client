<template>
  <div class="main-form">
    <b-form-group label="Enter full name">
      <b-form-input v-model="fullName" @change="updateInputValue" />
    </b-form-group>
    <b-form-group label="Enter position">
      <b-form-input v-model="position" @change="updateInputValue" />
    </b-form-group>
    <div class="p-2">
      <ContactInput :set-form-value="setProperty" />
    </div>
    <div class="p-2">
      <SkillInput :set-form-value="setProperty" />
    </div>
    <div class="p-2">
      <ExpreienceInput :set-form-value="setProperty" />
    </div>
    <div class="p-2">
      <EducationInput :set-form-value="setProperty" />
    </div>
    <b-form-group label="Enter about you">
      <b-form-textarea v-model="about" rows="4" @change="updateInputValue" />
    </b-form-group>
  </div>
</template>

<script>
import formMixin from '@/mixins/form';
import ContactInput from './ContactInput.vue';
import SkillInput from './SkillInput.vue';
import ExpreienceInput from './ExpreienceInput.vue';
import EducationInput from './EducationInput.vue';

export default {
  name: 'MainForm',
  components: {
    ContactInput,
    SkillInput,
    ExpreienceInput,
    EducationInput,
  },
  mixins: [formMixin],
  data() {
    return {
      fullName: '',
      position: '',
      skills: ['name - skill'],
      expirience: [{ companyName: '', date: 'YYYY-MM', description: '' }],
      education: [{ placeName: '', date: 'YYYY', description: '' }],
      about: '',
      properties: ['fullName', 'position', 'about'],
    };
  },
};
</script>

<style></style>
