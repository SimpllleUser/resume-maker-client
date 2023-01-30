export default {
  watch: {
    dates: {
      deep: true,
      handler: 'dateHandle',
    },
  },
  computed: {
    prefixClass() {
      return `${!this.showNavigation && 'hide'} mx`;
    },
  },
  methods: {
    dateHandle(dates) {
      this.inputValue = this.inputValue
        .map(this.getInputValueWithDate(dates));
    },
    getInputValueWithDate: (dates) => (inputValue, index) => ({
      ...inputValue,
      date: dates[index],
    }),
    getFormattedDate(date) {
      if (!date) return '';
      return new Date(date);
    },
    getValidDateForInput(inputsValue = []) {
      if (!Array.isArray(inputsValue)) return [];
      return inputsValue
        ?.map((valueItem) => valueItem?.date
          ?.map(this.getFormattedDate)) || [];
    },
  },
};
