<template>
  <div class="expereiance-row">
    <div class="pb-2" v-show="showNavigation">
      <b-button size="sm" variant="primary" @click="addExperience"
        >add
        <b-icon icon="plus-lg" />
      </b-button>
    </div>
    <div
      class="experience-item company-template pb-2"
      v-for="(expirience, key) in valueTest"
      :key="`experience-key-${id}-${key}`"
    >
      <div>
        <div class="company-name">
          <tag-editable
          v-model="valueTest[key].companyName"
          placeholder-value="Complany name"
          @focus-input="focusHandler"
           @change="updateInputValue" />
        </div>
        <div class="company-position">
          <tag-editable
          v-model="valueTest[key].position"
          placeholder-value="Position name"
          @focus-input="focusHandler"
           @change="updateInputValue" />
        </div>
        <div class="company-date-work d-flex align-items-center">
          <b-form-datepicker
            v-model="valueTest[key].date.from"
            @context="updateInputValue"
            placeholder="from"
            style="border: none !important;"
            size="sm"
          />
          <b-form-datepicker
            v-model="valueTest[key].date.to"
            @context="updateInputValue"
            @input="() => allow = false"
            @hidden="() => allow = false"
            @shown="() => allow = false"
            style="border: none !important;"
            placeholder="to"
            size="sm"
          />
        </div>
      </div>
      <div>
        <tag-editable
        style="text-align: left; padding: 20px;white-space: pre;"
          v-model="valueTest[key].description"
          @change="updateInputValue"
          @focus-input="focusHandler"
          placeholder-value="Description about your expereince"
        ></tag-editable>
        <b-button
        v-show="showNavigation"
          @click="deleteExpirience(key)"
          variant="outline-danger"
          size="sm"
          class="btn-delete"
        >
          <b-icon icon="trash" variant="danger" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
// import cloneDepp from 'lodash/cloneDeep';
import inputMixin from '@/mixins/input';
import TagEditable from '../TagEditable.vue';

// const defaultExpereence = {
//   companyName: '',
//   position: '',
//   date: { from: '', to: '' },
//   description: '',
// };

export default {
  name: 'ExpreienceInputForm',
  components: { TagEditable },
  mixins: [inputMixin],
  data() {
    return {
      expiriences: null,
      properties: null,
      propertyName: '',
      allow: false,
      defaultInputItemValue: {
        companyName: '',
        position: '',
        date: { from: '', to: '' },
        description: '',
      },
      valueTest: null,
      inputType: 'expreriance',
      defaultInputValueInForm: [],
    };
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addExperience() {
      this.valueTest = [
        ...this.valueTest, this.defaultInputItemValue,
      ];
    },
    deleteExpirience(key) {
      this.valueTest = this.valueTest
        .filter((_, index) => index !== key);
    },
  },
  watch: {
    // id: {
    //   immediate: true,
    //   handler() {
    //     this.propertyName = this.id;
    //     this.valueTest = {
    //       [this.propertyName]: [
    //         JSON.parse(JSON.stringify(this.defaultInputItemValue))],
    //     };
    //     this.properties = [`expiriences.${this.propertyName}`];
    //     this.updateInputValue();
    //   },
    // },
    // value: {
    //   immediate: true,
    //   handler() {
    //     this.expiriences[`${this.propertyName}`] = this.value;
    //   },
    // },
    // educations() {
    //   this.updateInputValue();
    // },
  },
  // mounted() {
  //   this.updateInputValue();
  // },
};
</script>

<style lang="scss">
.company-template {
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
