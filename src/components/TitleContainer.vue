<template>
  <div
    class="title position-relative my-4 py-2"
    style="width: 90%; margin-left: auto; margin-right: auto"
    tabindex="-1"
    @blur="focus = false"
    @focus="onFocus()"
  >
    <div
      class="position-absolute"
      style="
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        font-size: 32px;
        width: fit-content;
        top: -15px;
      "
    >
      <b-input
        :ref="refName"
        v-model="value"
        :placeholder="text"
        style="
          font-size: 24px;
          font-weight: bold;
          border: none;
          text-align: center;
          padding: 0px;
          margin: 0 auto;
        "
      />
    </div>
    <div class="w-100" style="border: 2px solid grey; height: 2px"></div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

const refName = `title-container-ref-${uuidv4()}`;
export default {
  name: 'TitleContainer',
  props: {
    text: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      value: '',
      focus: false,
      refName,
    };
  },
  methods: {
    onFocus() {
      this.focus = true;
      this.$refs[this.refName]?.focus();
    },
  },
  watch: {
    text: {
      immediate: true,
      handler() {
        this.value = this.text;
      },
    },
  },
};
</script>
