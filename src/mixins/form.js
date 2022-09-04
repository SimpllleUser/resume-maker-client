import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('form', ['formData']),
  },
  methods: {
    initDataForm(namePropetyValue) {
      this[namePropetyValue] = this.formData[namePropetyValue];
    },
  },
  mounted() {
    this.properties.map((propertyName) => this.initDataForm(propertyName));
  },
};
