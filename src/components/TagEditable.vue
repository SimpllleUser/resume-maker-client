<template>
  <div>
      <component
      :is="tagType"
      contenteditable
      v-text="content"
      @blur="setContentHandler"
      @focus="focusHandler"
      :style="style"
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
      return this.placeholderIsActive ? 'color: gray;' : '';
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
    // isUpdatedContent: {
    //   immediate: true,
    //   handler: 'initPlaceholder',
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
      console.log(!this.isUpdatedContent && this.placeholderIsActive);
      if (!this.isUpdatedContent && this.placeholderIsActive) this.initPlaceholder();
      // console.log(value, this.placeholderIsActive);
      this.$emit('input', value);
    },
    initPlaceholder() {
      this.placeholderIsActive = !this.value?.length;
      if (!this.placeholderIsActive) return;
      this.setContent(this.placeholderValue);
    },
    initValue(value) {
      // this.placeholderIsActive = !value?.length;
      this.initPlaceholder();
      if (this.isInit) return;
      this.setContent(value);
      console.log(value);
      // this.isUpdatedContent = true;
      this.isInit = true;
    },
  },
};
</script>
