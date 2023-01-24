export default {
  watch: {
    dates: {
      deep: true,
      handler: 'dateHandle',
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
      return new Date(date);
    },
    getValidDateForInput(inputsValue) {
      return inputsValue
        .map(({ date }) => date.map(this.getFormattedDate));
    },
  },
};
