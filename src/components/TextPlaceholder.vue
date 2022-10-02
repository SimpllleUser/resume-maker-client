<template>
  <div
    :class="`font-${currentFont.class} color-${currentColor.class}`"
    :style="`color: ${currentColor.style}`"
  >
    <div v-show="value.length">{{ value }}</div>
    <div v-show="!value.length" class="text-secondary opacity-4">{{ label }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TextPlaceholder',
  props: {
    value: {
      type: String,
      require: true,
      default: '',
    },
    label: {
      type: String,
      require: true,
      default: '',
    },
  },
  computed: {
    ...mapState('form', ['currentFont', 'currentColor']),
  },
};
</script>

<style lang="scss" scoped>
.opacity-0 {
  opacity: 0 !important;
}
.opacity-1 {
  opacity: 0.2 !important;
}
.opacity-2 {
  opacity: 0.4 !important;
}
.opacity-3 {
  opacity: 0.6 !important;
}
.opacity-4 {
  opacity: 0.8 !important;
}
.opacity-5 {
  opacity: 1 !important;
}
</style>
