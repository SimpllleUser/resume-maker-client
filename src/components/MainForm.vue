<template>
  <div>
    <div>
      <b-button @click="print"> Print </b-button>
    </div>
    <div class="main-form" id="resume-form">
      <div>
        <ContainerFocusItem name="main-info">
          <template #text>
            <div class="row row-cols-2">
              <div :class="`col-${formData.imgDataUrl ? 9 : 12}`">
                <div class="col">
                  <h1 class="text-center">{{ formData.fullName }}</h1>
                  <h4 class="text-center">{{ formData.position }}</h4>
                </div>
              </div>
              <div v-if="formData.imgDataUrl" class="col-2">
                <div class="d-flex justify-content-center align-items-center">
                  <img :src="formData.imgDataUrl" alt="photo" width="190px" height="190px" />
                </div>
              </div>
            </div>
          </template>
          <template #input="{ actions }">
            <div
              tabindex="-1"
              v-click-outside="actions['main-info-on-blur']"
              @focus="actions['main-info-on-focus']"
            >
              <b-form-group class="mb-4">
                <PhotoInput @on-focus="actions['main-info-on-focus']" />
              </b-form-group>
              <b-form-input
                class="text-center"
                style="font-size: calc(1.375rem + 1.5vw); border-style: none"
                v-model="fullName"
                @change="updateInputValue"
              />
              <b-form-input
                v-model="position"
                class="text-center"
                style="font-size: calc(1.275rem + 0.3vw); border-style: none"
                @change="updateInputValue"
              />
            </div>
          </template>
        </ContainerFocusItem>
      </div>
      <div class="my-2">
        <ContainerFocusItem name="contact">
          <template #text>
            <div class="row">
              <div
                class="col"
                v-for="(contact, index) in formData.contacts"
                :key="`conatct-key-${index}`"
              >
                <div class="d-flex align-items-center justify-content-center">
                  <div class="pr-2">
                    <b-icon :icon="contact.icon" />
                  </div>
                  <div class="pl-2">{{ contact.value }}</div>
                </div>
              </div>
            </div>
          </template>
          <template #input="{ actions }">
            <ContactInput
              @on-focus="actions['contact-on-focus']"
              @on-blur="actions['contact-on-blur']"
            />
          </template>
        </ContainerFocusItem>
      </div>
      <div class="my-2">
        <ContainerFocusItem name="skill">
          <template>
            <title-container text="Skills" />
          </template>
          <template #text>
            <div class="row">
              <div v-for="(skill, index) in formData.skills" :key="index" class="col-4 text-center">
                <div class="d-flex align-items-center justify-content-center py-1">
                  <div class="text-center">{{ skill }}</div>
                </div>
              </div>
            </div>
          </template>
          <template #input="{ actions }">
            <SkillInput @on-focus="actions['skill-on-focus']" @on-blur="actions['skill-on-blur']" />
          </template>
        </ContainerFocusItem>
      </div>
      <div class="my-2">
        <ContainerFocusItem name="expreience">
          <template>
            <title-container text="Experience" />
          </template>
          <template #text>
            <div v-for="(experience, index) in formData.expiriences" :key="`conatct-key-${index}`">
              <div class="container">
                <div class="row row-cols-2">
                  <div class="text-center">
                    <div class="col">
                      <b>{{ experience.companyName }}</b>
                    </div>
                    <div class="col">{{ experience.position }}</div>
                    <div class="col">{{ experience.date.from }} - {{ experience.date.to }}</div>
                  </div>
                  <div class="col">{{ experience.description }}</div>
                </div>
              </div>
            </div>
          </template>
          <template #input="{ actions }">
            <ExpreienceInput
              @on-focus="actions['expreience-on-focus']"
              @on-blur="actions['expreience-on-blur']"
            />
          </template>
        </ContainerFocusItem>
      </div>
      <div class="my-2">
        <ContainerFocusItem name="education">
          <template>
            <title-container text="Education" />
          </template>
          <template #text>
            <div v-for="(education, index) in formData.educations" :key="`conatct-key-${index}`">
              <div class="container">
                <div class="row row-cols-2">
                  <div class="text-center">
                    <div class="col">
                      <b>{{ education.educationName }}</b>
                    </div>
                    <div class="col">{{ education.date.from }} - {{ education.date.to }}</div>
                  </div>
                  <div class="col">{{ education.description }}</div>
                </div>
              </div>
            </div>
          </template>
          <template #input="{ actions }">
            <EducationInput
              @on-focus="actions['education-on-focus']"
              @on-blur="actions['education-on-blur']"
            />
          </template>
        </ContainerFocusItem>
      </div>

      <div class="my-2">
        <ContainerFocusItem name="about">
          <template>
            <title-container text="About" />
          </template>
          <template #text>
            <div class="row">
              <div class="col-8 ml-auto mr-auto">{{ formData.about }}</div>
            </div>
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
      <div v-for="(input, inputKey) in inputs" :key="`input-${inputKey}`">
        {{ input }}
        <component v-bind:is="input.component" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import formMixin from '@/mixins/form';
import TitleContainer from '@/components/TitleContainer.vue';
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
    TitleContainer,
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
  computed: {
    ...mapState('form', ['inputs']),
  },
  methods: {
    async print() {
      await this.$htmlToPaper('resume-form');
    },
  },
};
</script>

<style></style>
