<template>
  <div
  class="focus-container"
   :class="`${focus && classOnFocus}`"
    @focus="setFocus"
    tabindex="-1"
    v-click-outside="setUnfocus"
    >
    <template>
      <div v-show="focus">
        <slot
          :actions="getAction()"
          name="input"
        ></slot>
      </div>
      <div v-show="!focus">
        <slot
          :actions="getAction()"
        />
      </div>
    </template>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'ContainerFocusItem',
  props: {

    name: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      focus: false,
      classOnFocus: 'border border-primary shadow py-4 my-4 mb-2 bg-white rounded',
    };
  },
  computed: {
    actions() {
      return {
        [`${this.name}-on-focus`]: this.setFocus,
        [`${this.name}-on-blur`]: this.setUnfocus,
      };
    },
  },
  methods: {
    getAction() {
      return {
        [`${this.name}-on-focus`]: this.setFocus,
        [`${this.name}-on-blur`]: this.setUnfocus,
      };
    },
    setFocusState(state) {
      this.focus = state;
    },
    setUnfocus() {
      this.setFocusState(false);
    },
    setFocus() {
      setTimeout(() => { this.setFocusState(true); });
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped></style>
