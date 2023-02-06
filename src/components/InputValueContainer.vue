<script>
import { mapGetters, mapMutations } from 'vuex';

import types from '@/store/modules/form/types';

export default {
  name: 'InputValueContainer',
  props: {
    id: {
      type: String,
      require: true,
    },
    inputType: {
      type: String,
      require: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('form', ['inputValueByKey']),
    inputKey() {
      return `${this.inputType}.${this.id || this.keyId}`;
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
  created() {},
  rendere() {
    return this.$scopedSlots.default({
      exampleProp: 'universe',
    });
  },
};
</script>
