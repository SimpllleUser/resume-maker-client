<template>
  <div class="main-form">
    <b-form-group label="Enter full name">
      <b-form-input v-model="fullName" />
    </b-form-group>
    <b-form-group label="Enter position">
      <b-form-input v-model="position" />
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
      <b-form-textarea v-model="about" rows="4" />
    </b-form-group>
  </div>
</template>

<script>
import types from '@/store/modules/form/types';
import { mapMutations } from 'vuex';
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
  methods: {
    ...mapMutations('form', { setProperty: types.SET_FORM_PROPERTY }),
  },
  watch: {
    fullName(value) {
      this.setProperty({ fullName: value });
    },
    position(value) {
      this.setProperty({ position: value });
    },
    about(value) {
      this.setProperty({ about: value });
    },
  },
};
</script>

<style></style>
