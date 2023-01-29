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
    getValidDateForInput(inputsValue) {
      return inputsValue
        ?.map(({ date }) => date
          ?.map(this.getFormattedDate)) || [];
    },
  },
};
