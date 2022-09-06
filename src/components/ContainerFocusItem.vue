<template>
  <div
  class="focus-container"
   :class="`${focus && classOnFocus}`"
    @focus="setFocus"
    tabindex="-1"
    >
    <template>
      <div>
        <slot/>
      </div>
      <div v-show="!focus">
        <slot name="text" />
      </div>
      <div v-show="focus">
        <slot
          :actions="actions"
          name="input"
        ></slot>
      </div>
    </template>
  </div>
</template>

<script>

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
      setTimeout(() => { this.setFocusState(true); }, 100);
    },
  },
};
</script>

<style lang="scss" scoped></style>
