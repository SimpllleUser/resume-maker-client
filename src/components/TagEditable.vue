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
      content: '',
      isUpdatedContent: false,
      placeholderIsactive: true,
    };
  },
  computed: {
    contentStyle() {
      return this.placeholderIsactive ? 'color: gray;' : '';
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
      const value = e.target.innerText;
      this.setContent(value);
      this.isUpdatedContent = Boolean(value?.length);
      // eslint-disable-next-line no-unused-expressions
      this.isUpdatedContent ? this.$emit('input', value) : this.initPlaceholder();
      this.placeholderIsactive = !this.isUpdatedContent;
    },
    initPlaceholder() {
      this.setContent(this.placeholderValue);
    },
    initValue(value) {
      if (!this.value && this.content) return;
      this.setContent(value);
    },
  },
};
</script>
