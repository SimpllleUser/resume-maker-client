<template>
    <div class="expereiance-row">
      <span v-html="`<style>${styleFormPrint}</style>`" />
        <div class="pb-2" v-show="showNavigation">
          <b-button size="sm" variant="dark" @click="addExperience"
            >
            <b-icon icon="plus" />
          </b-button>
        </div>
        <div
          class="experience-item education-template pb-2"
          v-for="(education, key) in inputValue"
          :key="key"
        >
          <div>
            <div class="education-name">
              <tag-editable
              v-model="inputValue[key].educationName"
              placeholder-value="Name"
              @focus-input="focusHandler"
              style="text-align: center;"
              />
            </div>
            <div class="education-date-work d-flex align-items-center">
              <b-form-datepicker
              v-model="inputValue[key].date.from"
              placeholder="from"
                size="sm"
                style="border: none !important;"
                />
                <b-form-datepicker
                v-model="inputValue[key].date.to"
                placeholder="to"
                size="sm"
                style="border: none !important;"
              />
            </div>
          </div>
          <div>
            <tag-editable
            style="text-align: left; padding: 20px; white-space: pre"
            allow-white-space
            v-model="inputValue[key].description"
            @focus-input="focusHandler"
            placeholder-value="Description"
             rows="4" />
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
import input from '@/mixins/input';
import TagEditable from '../TagEditable.vue';

export default {
  name: 'EducationInputForm',
  components: { TagEditable },
  mixins: [input],
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
      inputValue: null,
      inputType: 'educations',
      defaultInputValueInForm: [],
      styleFormPrint: `
      .education-template {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
      }`,
    };
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
