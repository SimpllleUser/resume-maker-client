<template>
  <div class="main-form">
    <b-form-group class="mb-4">
      <PhotoInput />
    </b-form-group>
    <b-form-group label="Enter full name">
      <b-form-input v-model="fullName" @change="updateInputValue" />
    </b-form-group>
    <b-form-group label="Enter position">
      <b-form-input v-model="position" @change="updateInputValue" />
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
import PhotoInput from './PhotoInput.vue';

export default {
  name: 'MainForm',
  components: {
    ContactInput,
    SkillInput,
    ExpreienceInput,
    EducationInput,
    PhotoInput,
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
