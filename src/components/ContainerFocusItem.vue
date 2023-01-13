<template>
  <div
    class="focus-container"
    :class="containerClass"
    @focus="setFocus"
    v-click-outside="setUnfocus"
    style="margin: 16px 0px"
    tabindex="-1"
  >
    <div v-b-hover="hoverHandler">
      <div
        v-if="showTitle"
        style="position: relative"
        :class="`
        full-name-color-${currentColor.class}
        font-${currentFont.value}`"
      >
        <div class="middle-line" :class="`bg_color-${currentColor.class}`"></div>
        <div class="title-wrapper-container">
          <div class="title-wrapper">
            <tag-editable
              v-model="inputValue"
              @focus-input="setFocus"
              tagType="h2"
              :placeholderValue="title"
              :disable-placeholder-style="true"
              style="min-width: 100px;"
            />
          </div>
        </div>
      </div>
      <div>
        <slot name="main" :actions="actions" :focus="focus" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import input from '@/mixins/input';
import TagEditable from './TagEditable.vue';

export default {
  name: 'ContainerFocusItem',
  mixins: [input],
  components: {
    TagEditable,
  },
  props: {
    name: {
      type: String,
      require: true,
      default: '',
    },
    showTitle: {
      type: Boolean,
      defaut: false,
    },
    title: {
      type: String,
      defaut: '',
    },
  },
  data() {
    return {
      hover: false,
      focus: false,
      classOnFocus: 'border shadow py-4 my-4 mb-2 bg-white rounded',
      classOnHover: 'border border-secondary bg-white rounded',
      inputType: 'title',
      defaultInputValueInForm: '',
      inputValue: null,
    };
  },
  computed: {
    ...mapState('form', ['inputs', 'formData', 'currentColor', 'currentFont', 'requireFocus']),
    actions() {
      return {
        [`${this.name}`]: {
          focus: this.setFocus,
          unFocus: this.setUnfocus,
        },
      };
    },
    containerClass() {
      return `border-style ${this.focus && this.classOnFocus} ${this.hover && this.classOnHover}`;
    },
  },
  watch: {
    requireFocus() {
      this.setUnfocus();
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
      setTimeout(() => {
        this.setFocusState(true);
      }, 100);
    },
    hoverHandler(value) {
      this.hover = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.border {
  transition: border-color 0.3s ease;
}
.border-style {
  border: 1px solid white;
}
.border-primary {
  border-color: var(--bs-primary);
}
.border-secondary {
  border-color: var(--bs-secondary);
}

.middle-line {
  z-index: 1;
    position: relative;
    // background-color: red;
  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: red;
    top: 17px;
    z-index: -1;
    left: 0px;
  }
}
.title-wrapper {
  z-index: 999;
  background-color: white !important;
  width: fit-content !important;
  padding: 0px 25px !important;
}
.title-wrapper-container {
  width: auto;
  display: flex;
  justify-content: center;
}
</style>
