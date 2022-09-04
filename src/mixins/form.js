import { mapState, mapMutations } from 'vuex';
import types from '@/store/modules/form/types';

export default {
  computed: {
    ...mapState('form', ['formData']),
  },
  methods: {
    ...mapMutations('form', { setFormValue: types.SET_FORM_PROPERTY }),
    initDataForm(namePropetyValue) {
      this[namePropetyValue] = this.formData[namePropetyValue];
    },
    updateInputValue() {
      this.properties.map((propertyName) => this.setFormValue({
        [propertyName]: this[`${propertyName}`],
      }));
    },
  },
  mounted() {
    this.properties.map((propertyName) => this.initDataForm(propertyName));
  },
};
