<template>
  <div class="main-form">
    <div>
      <ContainerFocusItem name="main-info">
        <template>
          <h1>Main info</h1>
        </template>
        <template #input="{ actions }">
          <div tabindex="-1" v-click-outside="actions['main-info-on-blur']"
          @focus="actions['main-info-on-focus']">
            <b-form-group class="mb-4">
              <PhotoInput @on-focus="actions['main-info-on-focus']" />
            </b-form-group>
            <b-form-group label="Enter full name">
              <b-form-input v-model="fullName" @change="updateInputValue" />
            </b-form-group>
            <b-form-group label="Enter position">
              <b-form-input v-model="position" @change="updateInputValue" />
            </b-form-group>
          </div>
        </template>
      </ContainerFocusItem>
    </div>
    <div class="p-2">
      <ContainerFocusItem name="contact">
        <template>
          <h1>Contact text</h1>
        </template>
        <template #input="{ actions }">
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
          <h1>Skill text</h1>
        </template>
        <template #input="{ actions }">
          <SkillInput @on-focus="actions['skill-on-focus']" @on-blur="actions['skill-on-blur']" />
        </template>
      </ContainerFocusItem>
    </div>
    <div class="p-2">
      <ContainerFocusItem name="expreience">
        <template>
          <h1>Expreience text</h1>
        </template>
        <template #input="{ actions }">
          <ExpreienceInput
            @on-focus="actions['expreience-on-focus']"
            @on-blur="actions['expreience-on-blur']"
          />
        </template>
      </ContainerFocusItem>
    </div>
    <div class="p-2">
      <ContainerFocusItem name="education">
        <template>
          <h1>Education text</h1>
        </template>
        <template #input="{ actions }">
          <EducationInput
            @on-focus="actions['education-on-focus']"
            @on-blur="actions['education-on-blur']"
          />
        </template>
      </ContainerFocusItem>
    </div>
    <div class="p-2">
      <ContainerFocusItem name="about">
        <template>
          <h1>About text</h1>
        </template>
        <template #input="{ actions }">
          <div v-click-outside="actions['about-on-blur']">
            <b-form-group label="Enter about you">
              <b-form-textarea
                v-model="about"
                @focus="actions['about-on-focus']"
                rows="4"
                @change="updateInputValue"
              />
            </b-form-group>
          </div>
        </template>
      </ContainerFocusItem>
    </div>
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
    testFocus() {
      console.log('!');
    },
  },
};
</script>

<style></style>
