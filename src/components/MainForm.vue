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
      <ContainerFocusItem name="contact">
        <template>
          <h1>
            Contact text
          </h1>
        </template>
        <template #input="{actions}">
          <ContactInput
            @on-focus="actions['contact-on-focus']"
            @on-blur="actions['contact-on-blur']"
          />
        </template>
      </ContainerFocusItem>
    </div>
    <div class="p-2">
      <ContainerFocusItem name="skill">
        <template>
          <h1>
            Skill text
          </h1>
        </template>
        <template #input="{actions}">
          <SkillInput
            @on-focus="actions['skill-on-focus']"
            @on-blur="actions['skill-on-blur']"
          />
        </template>
      </ContainerFocusItem>
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
import ContainerFocusItem from './ContainerFocusItem.vue';

export default {
  name: 'MainForm',
  components: {
    ContactInput,
    SkillInput,
    ExpreienceInput,
    EducationInput,
    PhotoInput,
    ContainerFocusItem,
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
  methods: {
    testFocus(actions) {
      actions['contact-on-blur']();
    },
  },
};
</script>

<style></style>
