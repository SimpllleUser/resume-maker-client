<template>
<component :is="tagType" contenteditable v-text="content" @blur="setContent">
  {{ content }}
</component>
</template>
<script>
export default {
  name: 'TagEditable',
  props: {
    value: {
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
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: 'initValue',
    },
  },
  methods: {
    emitContent() {
      this.$emit('input', this.content);
    },
    setContent(e) {
      const value = e.target.innerText;
      this.content = value;
      this.emitContent();
    },
    initValue(value) {
      this.content = value;
    },
  },
};
</script>
