<template>
  <div>
    <component
      :is="tagType"
      contenteditable
      v-text="content"
      @blur="setContentHandler"
      @focus="focusHandler"
      :style="contentStyle"
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
  },
  data() {
    return {
      content: '',
      isUpdatedContent: false,
    };
  },
  computed: {
    placeholderIsactive() {
      return !this.isUpdatedContent || !this.content.length;
    },
    contentStyle() {
      return this.placeholderIsactive ? 'color: gray;' : '';
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
    emitContent() {
      this.$emit('input', this.content);
      this.$emit('change', this.content);
    },
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
      this.isUpdatedContent = value.length;
      if (!this.isUpdatedContent) this.initPlaceholder();
      this.emitContent();
    },
    initPlaceholder() {
      this.content = this.placeholderValue;
    },
    initValue(value) {
      this.content = value;
    },
  },
};
</script>
