<template>
  <div class="main-form">
    <b-form-group label="Enter full name">
      <b-form-input v-model="name" />
    </b-form-group>
    <b-form-group label="Enter position">
      <b-form-input v-model="position" />
    </b-form-group>
    <div class="p-3">
      <InputContact />
    </div>
    <div class="p-3">
      <ExpreienceInput />
    </div>
  </div>
</template>

<script>
import InputContact from './InputContact.vue';
import ExpreienceInput from './ExpreienceInput.vue';

export default {
  name: 'MainForm',
  components: { InputContact, ExpreienceInput },
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
