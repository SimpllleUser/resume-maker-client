<template>
  <div class="d-flex justify-content-center align-items-center w-100"
  v-click-outside="blurHandle">
  <div class="calendar-container position-relative" style="z-index: 999">
    <div class="date-label">
      <div tabindex="0"
      @focus="setShowCalendar(true)"
      >{{ dateLabel }}</div>
    </div>
    <Transition>
    <div
    v-show="showCalendar"
     class="calendar-panel position-absolute bg-light" style="left: -183px;">
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
  </Transition>
  </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import Vue2DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: 'DatePicker',
  components: {
    CalendarPanel: Vue2DatePicker.CalendarRange,
  },
  data() {
    return {
      range: true,
      type: 'month',
      date: [new Date(), new Date()],
      showCalendar: false,
      isFoucs: false,
    };
  },
  computed: {
    dateLabel() {
      return this.date
        .map(this.getFormattedDate).join(' - ');
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
    },
    blurHandle() {
      if (!this.showCalendar) return;
      this.hideCalendar();
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
