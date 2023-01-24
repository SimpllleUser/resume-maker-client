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
      class="experience-item company-template pb-2"
      v-for="(expirience, key) in inputValue"
      :key="`experience-key-${id}-${key}`"
    >
      <div>
        <div class="company-name">
          <tag-editable
            v-model="inputValue[key].companyName"
            :placeholder-value="RESUME_PLACEHOLDER_TEXT.EXPERIANCE.NAME"
            @focus-input="focusHandler"
            style="text-align: center;"
          />
        </div>
        <div class="company-position">
          <tag-editable
            v-model="inputValue[key].position"
            :placeholder-value="RESUME_PLACEHOLDER_TEXT.EXPERIANCE.POSITION"
            @focus-input="focusHandler"
            style="text-align: center;"
          />
        </div>
        <div class="company-date-work d-flex align-items-center">
          <date-picker
          v-model="dates[key]"
          type="month"
          :range="true" />
        </div>
      </div>
      <div>
        <tag-editable
          style="text-align: left; padding: 20px; white-space: pre"
          v-model="inputValue[key].description"
          @focus-input="focusHandler"
          :placeholder-value="RESUME_PLACEHOLDER_TEXT.EXPERIANCE.DESCRIPTION"
        ></tag-editable>
        <b-button
          v-show="showNavigation"
          @click="deleteExpirience(key)"
          variant="outline-dark"
          size="sm"
          class="btn-delete"
        >
          <b-icon icon="trash"/>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import constants from '@/constants';
import inputMixin from '@/mixins/input';
import DatePicker from 'vue2-datepicker';
import TagEditable from '../TagEditable.vue';
import 'vue2-datepicker/index.css';

export default {
  name: 'ExpreienceInputForm',
  components: { TagEditable, DatePicker },
  mixins: [inputMixin],
  data() {
    return {
      dates: [[new Date(), new Date()]],
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
  watch: {
    dates: {
      deep: true,
      handler(dates) {
        this.inputValue = this.inputValue
          .map((inputValue, index) => ({ ...inputValue, date: dates[index] }));
      },
    },
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
      this.dates = inputsValue
        .map((inputValue) => inputValue)
        .map(({ date }) => date.map((d) => new Date(d)));
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
