<template>
    <div class="expereiance-row">
        <div class="pb-2" v-show="showNavigation">
          <b-button size="sm" variant="primary" @click="addExperience"
            >add
            <b-icon icon="plus-lg" />
          </b-button>
        </div>
        <div
          class="experience-item education-template pb-2"
          v-for="(education, key) in valueTest"
          :key="key"
        >
          <div>
            <div class="education-name">
              <tag-editable
              v-model="valueTest[key].educationName"
              placeholder-value="Name"
              @focus-input="focusHandler"/>
            </div>
            <div class="education-date-work d-flex align-items-center">
              <b-form-datepicker
              v-model="valueTest[key].date.from"
              placeholder="from"
                size="sm"
                style="border: none !important;"
                />
                <b-form-datepicker
                v-model="valueTest[key].date.to"
                placeholder="to"
                size="sm"
                style="border: none !important;"
              />
            </div>
          </div>
          <div>
            <tag-editable
            allow-white-space
            v-model="valueTest[key].description"
            @focus-input="focusHandler"
            placeholder-value="Description"
             rows="4" />
            <b-button
            v-show="showNavigation"
              @click="deleteExpirience(key)"
              variant="outline-danger"
              size="sm"
              class="btn-delete"
              placeholder="Description about your education"
            >
              <b-icon icon="trash" variant="danger" />
            </b-button>
          </div>
        </div>
      </div>
</template>

<script>
// import cloneDepp from 'lodash/cloneDeep';
import input from '@/mixins/input';
import TagEditable from '../TagEditable.vue';

export default {
  name: 'EducationInputForm',
  components: { TagEditable },
  mixins: [input],
  // props: {
  //   id: {
  //     type: String,
  //     require: true,
  //     default: '',
  //   },
  //   value: {
  //     type: Array,
  //     default: () => [cloneDepp(defaultEducation)],
  //   },
  // },
  data() {
    return {
      educations: null,
      properties: null,
      propertyName: '',
      defaultInputItemValue: {
        educationName: '',
        date: { from: '', to: '' },
        description: '',
      },
      valueTest: null,
      inputType: 'educations',
      defaultInputValueInForm: [],
    };
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addExperience() {
      this.valueTest = [
        ...this.valueTest,
        JSON.parse(JSON.stringify(this.defaultInputItemValue))];
    },
    deleteExpirience(key) {
      this.valueTest = this.valueTest
        ?.filter((_, index) => index !== key);
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
        right: -40px;
        top: 0px;
      }
    }
    </style>
