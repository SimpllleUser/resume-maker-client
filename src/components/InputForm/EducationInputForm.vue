<template>
    <div class="expereiance-row" v-click-outside="onBlur">
        <div class="pb-2" v-show="showNavigation">
          <b-button size="sm" variant="primary" @click="addExperience"
            >add
            <b-icon icon="plus-lg" />
          </b-button>
        </div>
        <div
          class="experience-item education-template pb-2"
          v-for="(education, key) in educations[propertyName]"
          :key="key"
        >
          <div>
            <div class="education-name">
              <tag-editable
              v-model="educations[propertyName][key].educationName"
              placeholder-value="Name"
              @focus-input="focusHandler"
              @change="updateInputValue" />
            </div>
            <div class="education-date-work d-flex align-items-center">
              <b-form-datepicker
              v-model="educations[propertyName][key].date.from"
              @change="updateInputValue"
              placeholder="from"
                size="sm"
                style="border: none !important;"
                />
                <b-form-datepicker
                v-model="educations[propertyName][key].date.to"
                @change="updateInputValue"
                placeholder="to"
                size="sm"
                style="border: none !important;"
              />
            </div>
          </div>
          <div>
            <tag-editable
            allow-white-space
            v-model="educations[propertyName][key].description"
            @focus-input="focusHandler"
            placeholder-value="Description"
            @change="updateInputValue" rows="4" />
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
import cloneDepp from 'lodash/cloneDeep';
import formMixin from '@/mixins/form';
import TagEditable from '../TagEditable.vue';

const defaultEducation = {
  educationName: '',
  date: { from: '', to: '' },
  description: '',
};

export default {
  name: 'EducationInputForm',
  components: { TagEditable },
  mixins: [formMixin],
  props: {
    id: {
      type: String,
      require: true,
      default: '',
    },
    value: {
      type: Array,
      default: () => [cloneDepp(defaultEducation)],
    },
  },
  data() {
    return {
      educations: null,
      properties: null,
      propertyName: '',
    };
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addExperience() {
      this.educations[this.propertyName] = [
        ...this.educations[this.propertyName],
        JSON.parse(JSON.stringify(defaultEducation))];
    },
    deleteExpirience(key) {
      this.educations[this.propertyName] = this.educations[this.propertyName]
        ?.filter((_, index) => index !== key);
    },
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.propertyName = this.id;
        this.educations = { [this.propertyName]: [JSON.parse(JSON.stringify(defaultEducation))] };
        this.properties = [`educations.${this.propertyName}`];
        this.updateInputValue();
      },
    },
    value: {
      immediate: true,
      handler() {
        this.educations[`${this.propertyName}`] = this.value;
      },
    },
    educations() {
      this.updateInputValue();
    },
  },
  mounted() {
    this.updateInputValue();
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
