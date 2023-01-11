import { mapGetters, mapMutations } from 'vuex';
import ClickOutside from 'vue-click-outside';

import types from '@/store/modules/form/types';

export default {
  props: {
    id: {
      type: String,
      require: true,
    },
    showNavigation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // defaultValue: 'value',
    };
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        // this.propertyName = this.id;
        // this.skills = { [this.propertyName]: [''] };
        // this.properties = [`skills.${this.propertyName}`];
        this.initValueTest();
        // const key = `test.${this.type}.${this.id}`;
        // const storageValue = JSON.parse(localStorage.getItem(key));
        // this.valueTestInit(storageValue);
        // this.updateInputValue();
      },
    },
    inputProperty: {
      immediate: true,
      deep: true,
      handler: 'updateStateInput',
    },
    // valueTest(value) {
    //   console.log(value);
    //   this.updateStateInput();
    // },
  },
  computed: {
    ...mapGetters('form', ['inputValueByKey']),
    inputKey() {
      return `${this.inputType}.${this.id}`;
    },
    inputProperty() {
      return { key: this.inputKey, value: this.valueTest };
    },
    inputValueFromStore() {
      return this.inputValueByKey(this.inputKey);
    },
  },
  methods: {
    ...mapMutations('form', { setFormValue: types.SET_INPUT_VALUE }),
    updateStateInput() {
      this.setFormValue(this.inputProperty);
    },
    initValueTest() {
      this.valueTest = this.inputValueFromStore || this.defaultInputValueInForm;
    },
  },
  directives: {
    ClickOutside,
  },
};
