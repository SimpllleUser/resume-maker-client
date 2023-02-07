<template>
  <div :class="{ 'focus-style': focus }">
    <span v-html="`<style>${styleFormPrint}</style>`" />
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
      font-${currentFont.class}`"
        >
          <div class="middle-line" :class="`bg_color-${currentColor.class}`"></div>
          <div class="title-wrapper-container">
            <div class="title-wrapper" :style="dynamicTitleStyle">
              <tag-editable
                v-model="inputValue"
                @focus-input="setFocus"
                tagType="h2"
                :placeholderValue="title"
                :disable-placeholder-style="true"
                max-length="50"
                style="min-width: 100px; font-weight: 700; text-align: center"
              />
            </div>
          </div>
        </div>
        <div>
          <slot name="main" :actions="actions" :focus="focus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';

import input from '@/mixins/input';
import types from '@/store/modules/form/types';
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
    activeIndex: {
      type: Number,
      defaut: NaN,
    },
    index: {
      type: Number,
      defaut: NaN,
    },
  },
  data() {
    return {
      hover: false,
      focus: false,
      classOnFocus: 'py-4 my-4 mb-2 bg-white rounded shadow-lg',
      classOnHover: 'border border-primary rounded',
      inputType: 'title',
      defaultInputValueInForm: '',
      inputValue: null,
      styleFormPrint: `
      .middle-line {
        z-index: 3;
        position: relative;
      }
      .middle-line:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 4px;
    top: 17px;
    z-index: -1;
    left: 0px;
  }
  .title-wrapper {
  z-index: 3;
  background-color: white;
  width: fit-content !important;
  padding: 0px 25px !important;
}
.title-wrapper-container {
  width: auto;
  display: flex;
  justify-content: center;
}
.focus-style {
  position: relative;
  z-index: 9;
}
}`,
    };
  },
  computed: {
    ...mapState('form', ['inputs', 'formData', 'currentColor', 'currentFont', 'requireFocus']),
    ...mapGetters('form', ['existFocusOnInput']),
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
    isDraggable() {
      return this.index === this.activeIndex;
    },
    dynamicTitleStyle() {
      const canAddStyle = this.existFocusOnInput && !this.focus;
      return canAddStyle && 'background-color: rgb(213 213 213)';
    },
  },
  watch: {
    requireFocus() {
      this.setUnfocus();
    },
    isDraggable(isDraggable) {
      if (!isDraggable) return;
      setTimeout(() => this.setFocus(), 100);
    },
  },
  methods: {
    ...mapMutations('form', {
      setExistFocus: types.SET_EXIST_FOCUS,
      setContainerInputState: types.SET_CONTAINER_INPUT_BY_KEY,
    }),
    getAction() {
      return {
        [`${this.name}-on-focus`]: this.setFocus,
        [`${this.name}-on-blur`]: this.setUnfocus,
      };
    },
    existFocusHandler(state) {
      this.setContainerInputState({ key: this.name, value: state });
    },
    setFocusState(state) {
      this.existFocusHandler(state);
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
.focus-container {
  border: 1px solid rgba(255, 0, 0, 0);
}
.border {
  transition: border-color 0.3s ease;
}
.border-primary {
  border-color: var(--bs-primary);
}
.border-secondary {
  border-color: var(--bs-secondary);
}

// .middle-line {
//   z-index: 3;
//   position: relative;
//   // background-color: red;
//   &:after {
//     content: " ";
//     position: absolute;
//     width: 100%;
//     height: 4px;
//     top: 17px;
//     z-index: -1;
//     left: 0px;
//   }
// }
// .title-wrapper {
//   z-index: 3;
//   background-color: white;
//   width: fit-content !important;
//   padding: 0px 25px !important;
// }
// .title-wrapper-container {
//   width: auto;
//   display: flex;
//   justify-content: center;
// }
// .focus-style {
//   position: relative;
//   z-index: 9;
// }
</style>
