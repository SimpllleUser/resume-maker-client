<template>
  <div
  class="v-popup w-100 position-relative"
  :class="popupClass"
   v-click-outside="blurHandle"
   :style="foucsStyle"
>
    <div
      class="v-popup__title"
      :class="titleClass"
      :style="titleStyle"
      tabindex="0"
      @focus="setShowBody(true)"
    >
    <slot name="title"></slot>
  </div>
  <Transition>
    <div
    class="v-popup__body w-100 position-absolute bg-light"
    :class="bodyClass"
    :style="bodyStyle"
     v-show="showBody"
     >
      <slot name="body"></slot>
    </div>
  </Transition>
  </div>
</template>
<script>
import ClickOutside from 'vue-click-outside';

import constants from '@/constants';

const PROP_STRING_PROPERTY = {
  type: String,
  default: '',
};

const PROPS_CLASS_OPTION = {
  ...PROP_STRING_PROPERTY,
};

const PROPS_STYLE_OPTION = {
  ...PROP_STRING_PROPERTY,
};

const DEFAUL_CLASS_STYLE = '';

export default {
  name: 'VPopup',
  props: {
    customClass: PROPS_CLASS_OPTION,
    titleClass: PROPS_CLASS_OPTION,
    bodyClass: PROPS_CLASS_OPTION,
    customStyle: PROPS_STYLE_OPTION,
    titleStyle: PROPS_STYLE_OPTION,
    bodyStyle: PROPS_STYLE_OPTION,
    disabelDefaulClasses: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showBody: false,
    };
  },
  computed: {
    foucsStyle() {
      return `${this.showBody && `z-index: ${constants.EXTRA_Z_INDEX};`} ${this.customStyle}`;
    },
    popupDefaultStyle() {
      return this.disabelDefaulClasses ? '' : DEFAUL_CLASS_STYLE;
    },
    popupClass() {
      return `${this.popupDefaultStyle} ${this.customClass}`;
    },
  },
  watch: {
    showBody: {
      handler: 'focusHandle',
    },
  },
  methods: {
    setShowBody(state) {
      this.showBody = state;
    },
    blurHandle() {
      if (!this.showBody) return;
      this.setHideBody();
      this.$emit('blur');
    },
    focusHandle() {
      this.$emit('focus');
    },
    setHideBody() {
      this.setShowBody(false);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
