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
                  <div class="h1 text-center">
                    <text-placeholder
                    :value="formData.fullName"
                     label="Your full name" />
                  </div>
                  <div class="h4 text-center">
                    <text-placeholder
                    :value="formData.position"
                     label="Your position" />
                  </div>
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
                placeholder="Your full name"
                @change="updateInputValue"
              />
              <b-form-input
                v-model="position"
                class="text-center"
                style="font-size: calc(1.275rem + 0.3vw); border-style: none"
                placeholder="Your position"
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
                  <text-placeholder
                    :value="contact.value"
                     label="your contact" />
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
      <div
        v-for="(input, inputKey) in inputs"
        :key="`input-${inputKey}`"
        style="position: relative"
      >
        <ContainerFocusItem name="about">
          <template>
            <title-container :text="input.name" />
          </template>
          <template #text>
            <div class="row">
              <component
                :id="input.id"
                :value="getValue(inputKey)"
                v-bind:is="input.componentStatic"
              />
            </div>
          </template>
          <template #input="{ actions }">
            <div v-click-outside="actions['about-on-blur']">
              <component :id="input.id" v-bind:is="input.component" />
              <b-button
                @click="deleteInputForm(input)"
                variant="danger"
                style="position: absolute; top: 0px; right: 0px"
              >
                <b-icon icon="trash" />
              </b-button>
            </div>
          </template>
        </ContainerFocusItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import formMixin from '@/mixins/form';
import TitleContainer from '@/components/TitleContainer.vue';
import types from '@/store/modules/form/types';
import TextPlaceholder from '@/components/TextPlaceholder.vue';
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
    TextPlaceholder,
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
    ...mapGetters('form', ['getValue']),
  },
  methods: {
    ...mapMutations('form', { deleteInputForm: types.DELETE_INPUT_FROM_AND_DATA }),
    async print() {
      await this.$htmlToPaper('resume-form');
    },
  },
};
</script>

<style></style>
