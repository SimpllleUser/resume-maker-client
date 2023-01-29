import { mapGetters, mapMutations } from 'vuex';
import ClickOutside from 'vue-click-outside';

import types from '@/store/modules/form/types';

import constants from '@/constants';

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
      RESUME_PLACEHOLDER_TEXT: constants.RESUME_PLACEHOLDER_TEXT,
    };
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.initInputValue();
      },
    },
    inputProperty: {
      immediate: true,
      deep: true,
      handler: 'updateStateInput',
    },
    inputValue: {
      immediate: true,
      deep: true,
      handler: 'updateStateInput',
    },
  },
  computed: {
    ...mapGetters('form', ['inputValueByKey']),
    inputKey() {
      return `${this.inputType}.${this.id}`;
    },
    inputProperty() {
      return { key: this.inputKey, value: this.inputValue };
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
    initInputValue() {
      this.inputValue = this.inputValueFromStore || this.defaultInputValueInForm;
      if (this.isCustomInit) this.customInit(this.inputValueFromStore);
    },
  },
  directives: {
    ClickOutside,
  },
};
