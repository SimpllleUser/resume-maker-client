<template>
  <div>
      <component
      :is="tagType"
      contenteditable
      v-text="content"
      @blur="setContentHandler"
      @focus="focusHandler"
      :style="style"
      @keydown="keyPressHandle"
    >
      {{ content }}
    </component>
  </div>
</template>
<script>
export default {
  name: 'TagEditable',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholderValue: {
      type: String,
      default: '',
    },
    tagType: {
      type: String,
      default: 'div',
    },
    allowWhiteSpace: {
      type: Boolean,
      default: false,
    },
    disablePlaceholderStyle: {
      type: Boolean,
      default: false,
    },
    disabelEnter: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isInit: false,
      content: '',
      isUpdatedContent: false,
      placeholderIsActive: true,
    };
  },
  computed: {
    contentStyle() {
      return this.placeholderIsActive && !this.disablePlaceholderStyle ? 'color: gray;' : '';
    },
    whiteSpaceStyle() {
      return this.allowWhiteSpace ? 'white-space: pre' : '';
    },
    style() {
      return `${this.contentStyle} ${this.whiteSpaceStyle}`;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler: 'initValue',
    },
    placeholderValue: {
      immediate: true,
      handler: 'initPlaceholder',
    },
    // disabelEnter: {
    //   immediate: true,
    //   handler: 'initDisabelEnter',
    // },
  },
  methods: {
    focusHandler() {
      this.resetPlaceHolder();
      this.$emit('focus-input');
    },
    resetPlaceHolder() {
      if (this.isUpdatedContent) return;
      this.content = '';
    },
    setContent(value) {
      this.content = value;
    },
    setContentHandler(e) {
      if (!this.isInit) return;
      const value = e.target.innerText;
      this.setContent(value);
      this.isUpdatedContent = Boolean(value?.length);
      if (!this.isUpdatedContent && this.placeholderIsActive) this.initPlaceholder();
      this.$emit('input', value);
    },
    initPlaceholder() {
      this.placeholderIsActive = !this.value?.length;
      if (!this.placeholderIsActive) return;
      this.setContent(this.placeholderValue);
    },
    initValue(value) {
      this.initPlaceholder();
      if (this.isInit) return;
      this.setContent(value);
      this.isUpdatedContent = value.length;
      this.isInit = true;
    },
    keyPressHandle(event) {
      if (this.disabelEnter && event.keyCode === 13) event.preventDefault();
      return false;
    },
  },
};
</script>
