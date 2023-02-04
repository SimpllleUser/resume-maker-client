<template>
  <div
  class="focus-container"
   :class="containerClass"
    @focus="setFocus"
    style="margin: 16px 0px;"
    tabindex="-1"
    >
    <template>
      <div v-b-hover="hoverHandler">
        <div>
          <slot :focus="focus" />
        </div>
        <div v-show="!focus">
          <div>
            <slot name="text" />
          </div>
        </div>
      </div>

      <div v-show="focus" class="p-2">
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
      hover: false,
      focus: false,
      classOnFocus: 'border shadow py-4 my-4 mb-2 bg-white rounded',
      classOnHover: 'border border-secondary bg-white rounded',
    };
  },
  computed: {
    actions() {
      return {
        [`${this.name}-on-focus`]: this.setFocus,
        [`${this.name}-on-blur`]: this.setUnfocus,
      };
    },
    containerClass() {
      return `border-style ${this.focus && this.classOnFocus} ${this.hover && this.classOnHover}`;
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
    hoverHandler(value) {
      this.hover = value;
    },
  },
};
</script>

<style lang="scss" scoped>
  .border {
    transition: border-color .3s ease;
  }
  .border-style {
    border: 1px solid white
  }
  .border-primary {
    border-color: var(--bs-primary)
  }
  .border-secondary {
    border-color: var(--bs-secondary)
  }
</style>
