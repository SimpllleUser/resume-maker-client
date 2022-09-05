<template>
  <div
  class="focus-container"
  :class="`${focus && classOnFocus}`"
   @focus="setFocus"
    tabindex="-1"
    >
    <template>
      <div v-show="focus">
        <slot :onFocus="setFocus" :onBlur="setUnfocus" name="input"></slot>
      </div>
      <div v-show="!focus">
        <slot :onFocus="setFocus" :onBlur="setUnfocus" />
      </div>
    </template>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'ContainerFocusItem',
  props: {
    focusChildren: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  data() {
    return {
      focus: false,
      classOnFocus: 'border border-primary shadow py-4 my-4 mb-2 bg-white rounded',
    };
  },
  watch: {
    focusChildren(state) {
      this.setFocusState(state);
    },
  },
  methods: {
    setFocusState(state) {
      this.focus = state;
    },
    setUnfocus() {
      this.setFocusState(false);
    },
    setFocus() {
      this.setFocusState(true);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped></style>
