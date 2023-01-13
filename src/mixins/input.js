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
    },
  },
  directives: {
    ClickOutside,
  },
};
