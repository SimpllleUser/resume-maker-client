<template>
    <div class="expereiance-row">
      <!-- <span v-html="`<style>${styleFormPrint}</style>`" /> -->
        <div class="pb-2" v-show="showNavigation">
          <b-button size="sm" variant="dark" @click="addExperience"
            >
            <b-icon icon="plus" />
          </b-button>
        </div>
        <div
          class="row container pb-2"
          v-for="(education, key) in inputValue"
          :key="key"
        >
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="education-name" :class="`font-${currentFont.class}`">
              <tag-editable
              v-model="inputValue[key].educationName"
              :placeholder-value="RESUME_PLACEHOLDER_TEXT.EDUCATION.NAME"
              @focus-input="focusHandler"
              :disabel-enter="false"
              style="text-align: center; margin: 0 auto;
             min-width: 10rem; max-width: 20rem; white-space: auto"
              />
            </div>
            <div
            class="education-date-work d-flex align-items-center"
            :class="`font-${currentFont.class}`"
            >
              <date-picker
          v-model="inputValue[key].date"
          :placeholder="RESUME_PLACEHOLDER_TEXT.EDUCATION.DATE"
          @foucs="focusHandler"
          />
            </div>
          </div>
          <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12
          d-flex align-items-center justify-content-center"
           :class="`font-${currentFont.class}`">
            <tag-editable
             v-model="inputValue[key].description"
            :placeholder-value="RESUME_PLACEHOLDER_TEXT.EDUCATION.DESCRIPTION"
            @focus-input="focusHandler"
            :disabel-enter="false"
            style="text-align: left;
             min-width: 10rem; max-width: 20rem; maring: 0 auto; white-space: pre"
             />
            <b-button
            v-show="showNavigation"
              @click="deleteExpirience(key)"
              variant="outline-dark"
              size="sm"
              class="btn-delete"
              placeholder="Description about your education"
            >
              <b-icon icon="trash" />
            </b-button>
          </div>
        </div>
      </div>
</template>

<script>
import { mapState } from 'vuex';
import constants from '@/constants';
import input from '@/mixins/input';
import datePicker from '@/mixins/date-picker';
import DatePicker from '@/components/DatePicker.vue';
import TagEditable from '../TagEditable.vue';

export default {
  name: 'EducationInputForm',
  components: { TagEditable, DatePicker },
  mixins: [input, datePicker],
  data() {
    return {
      dates: [],
      educations: null,
      properties: null,
      propertyName: '',
      defaultInputItemValue: {
        educationName: '',
        date: [],
        description: '',
      },
      inputValue: null,
      inputType: constants.INPUT_KEYS.EDUCATION,
      defaultInputValueInForm: [],
      // styleFormPrint: `
      // .education-template {
      //   display: grid;
      //   grid-template-columns: repeat(2, 1fr);
      //   position: relative;
      // }`,
      isCustomInit: true,
    };
  },
  computed: {
    ...mapState('form', ['currentFont']),
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addExperience() {
      this.inputValue = [
        ...this.inputValue,
        JSON.parse(JSON.stringify(this.defaultInputItemValue))];
    },
    deleteExpirience(key) {
      this.inputValue = this.inputValue
        ?.filter((_, index) => index !== key);
    },
    customInit(inputsValue) {
      this.dates = this.getValidDateForInput(inputsValue);
    },
  },
};
</script>

<style lang="scss">
    .education-template {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      position: relative;
      .btn-delete {
        position: absolute;
        right: 0px;
        top: 0px;
      }
    }
    </style>
