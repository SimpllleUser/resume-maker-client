<template>
    <div class="input-container d-flex">
        <div :style="leftStyle" :class="leftClass">
            <slot name="left"/>
        </div>
        <div :style="rightStyle" :class="rightClass">
            <slot name="right"/>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MultiInputContainer',
  props: {
    leftWidth: {
      type: String,
      default: 'auto',
    },
    rightWidth: {
      type: String,
      default: 'auto',
    },
    leftClass: {
      type: String,
      default: '',
    },
    rightClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    leftStyle() {
      return `width: ${this.leftWidth}`;
    },
    rightStyle() {
      return `width: ${this.rightWidth}`;
    },
  },
};
</script>
