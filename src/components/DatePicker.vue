<template>
  <v-popup
  titleClass="text-center"
  @focus="focusHandle">
    <template #title>
      <div :class="{ 'text-secondary': !existValue }">{{ label }}</div>
    </template>
    <template #body>
      <div>
        <div class="d-flex justify-content-around">
        <div class="border w-100 text-center">From</div>
        <div class="border w-100 text-center">To</div>
      </div>
      <calendar-panel
        :type="type"
        :range="range"
        :value="date"
        @select="setDate"
      />
      </div>
    </template>
  </v-popup>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import Vue2DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import constants from '@/constants';
import VPopup from '@/components/VPopup.vue';

export default {
  name: 'DatePicker',
  components: {
    CalendarPanel: Vue2DatePicker.CalendarRange,
    VPopup,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'from - to',
    },
  },
  data() {
    return {
      range: true,
      type: 'month',
      date: this.value,
      showCalendar: false,
      isFoucs: false,
    };
  },
  computed: {
    dateLabel() {
      return this.date
        .map(this.getFormattedDate).join(' - ');
    },
    existValue() {
      return this.date?.length && this.date?.every(Boolean);
    },
    label() {
      return this.existValue
        ? this.dateLabel
        : this.placeholder;
    },
    foucsStyle() {
      return `${this.showCalendar && `z-index: ${constants.EXTRA_Z_INDEX};`}`;
    },
  },
  watch: {
    showCalendar: {
      handler: 'focusHandle',
    },
  },
  methods: {
    getValidNumberDate(number) {
      return +number > 9 ? number : `0${number}`;
    },
    getFormattedDate(date) {
      const year = new Date(date).getFullYear();
      const month = this.getValidNumberDate(new Date(date).getMonth() + 1);
      return `${month}.${year}`;
    },
    setShowCalendar(state) {
      this.showCalendar = state;
    },
    hideCalendar() {
      this.setShowCalendar(false);
    },
    setDate(date) {
      this.date = date;
      setTimeout(this.hideCalendar, 400);
      this.$emit('input', date);
    },
    blurHandle() {
      if (!this.showCalendar) return;
      this.hideCalendar();
    },
    focusHandle() {
      this.$emit('foucs');
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss">
.calendar-panel {
  left: -135px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
