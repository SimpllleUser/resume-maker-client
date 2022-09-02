<template>
  <div class="main-form">
    <b-form-group label="Enter full name">
      <b-form-input v-model="name" />
    </b-form-group>
    <b-form-group label="Enter position">
      <b-form-input v-model="position" />
    </b-form-group>
    <div class="p-2">
      <ContactInput />
    </div>
    <div class="p-2">
      <SkillInput />
    </div>
    <div class="p-2">
      <ExpreienceInput />
    </div>
      <div class="p-2">
      <EducationInput />
    </div>
    <b-form-group label="Enter about you">
      <b-form-textarea v-model="about"  rows="4"/>
    </b-form-group>
  </div>
</template>

<script>
import ContactInput from './ContactInput.vue';
import SkillInput from './SkillInput.vue';
import ExpreienceInput from './ExpreienceInput.vue';
import EducationInput from './EducationInput.vue';

export default {
  name: 'MainForm',
  components: {
    ContactInput, SkillInput, ExpreienceInput, EducationInput,
  },
  data() {
    return {
      fullName: '',
      position: '',
      skills: ['name - skill'],
      expirience: [{ companyName: '', date: 'YYYY-MM', description: '' }],
      education: [{ placeName: '', date: 'YYYY', description: '' }],
      about: '',
    };
  },
};
</script>

<style></style>
