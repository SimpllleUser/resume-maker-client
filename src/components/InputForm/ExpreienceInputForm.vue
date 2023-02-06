<template>
  <div class="expereiance-row">
    <span v-html="`<style>${styleFormPrint}</style>`" />
    <div class="pb-2" v-show="showNavigation">
      <b-button size="sm" variant="dark" @click="addExperience">
        <b-icon icon="plus" />
      </b-button>
    </div>
    <div
      class="experience-item company-template pb-2"
      v-for="(expirience, key) in inputValue"
      :key="`experience-key-${id}-${key}`"
    >
      <div style="margin: 0 auto">
        <div class="company-name">
          <tag-editable
            v-model="inputValue[key].companyName"
            :placeholder-value="RESUME_PLACEHOLDER_TEXT.EXPERIANCE.NAME"
            @focus-input="focusHandler"
            style="text-align: center;
             min-width: 10rem; max-width: 20rem; maring: 0 auto; white-space: auto"
            :disabel-enter="false"
          />
        </div>
        <div class="company-position">
          <tag-editable
            v-model="inputValue[key].position"
            :placeholder-value="RESUME_PLACEHOLDER_TEXT.EXPERIANCE.POSITION"
            @focus-input="focusHandler"
            :disabel-enter="false"
            style="text-align: center;
             min-width: 10rem; max-width: 20rem; maring: 0 auto; white-space: auto"
          />
        </div>
        <div class="company-date-work d-flex align-items-center">
          <date-picker
          v-model="inputValue[key].date"
          :placeholder="RESUME_PLACEHOLDER_TEXT.EXPERIANCE.DATE"
          @foucs="focusHandler"
          />
        </div>
      </div>
      <div>
        <tag-editable
          style="text-align: left; padding: 20px; white-space: pre"
          v-model="inputValue[key].description"
          @focus-input="focusHandler"
          :placeholder-value="RESUME_PLACEHOLDER_TEXT.EXPERIANCE.DESCRIPTION"
          :disabel-enter="false"
        ></tag-editable>
        <b-button
          v-show="showNavigation"
          @click="deleteExpirience(key)"
          variant="outline-dark"
          size="sm"
          class="btn-delete"
        >
          <b-icon icon="trash" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import constants from '@/constants';
import inputMixin from '@/mixins/input';
import datePicker from '@/mixins/date-picker';
import DatePicker from '@/components/DatePicker.vue';
import TagEditable from '../TagEditable.vue';

export default {
  name: 'ExpreienceInputForm',
  components: {
    DatePicker,
    TagEditable,
  },
  mixins: [inputMixin, datePicker],
  data() {
    return {
      value: '',
      open: true,
      dates: [],
      expiriences: null,
      properties: null,
      propertyName: '',
      allow: false,
      defaultInputItemValue: {
        companyName: '',
        position: '',
        date: [],
        description: '',
      },
      inputValue: null,
      inputType: constants.INPUT_KEYS.EXPERIENCE,
      defaultInputValueInForm: [],
      styleFormPrint: `
      .company-template {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
      }`,
      isCustomInit: true,
    };
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addExperience() {
      this.inputValue = [...this.inputValue, this.defaultInputItemValue];
    },
    deleteExpirience(key) {
      this.inputValue = this.inputValue.filter((_, index) => index !== key);
    },
    customInit(inputsValue) {
      this.dates = this.getValidDateForInput(inputsValue) || [];
    },
    selectDate({ date, key }) {
      this.dates = Object.values({ ...this.dates || [], [key]: date });
    },
  },
};
</script>

<style lang="scss">
.company-template {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
}
.btn-delete {
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>
