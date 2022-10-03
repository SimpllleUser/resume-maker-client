<template>
  <div>
    <div v-show="value.length" :class="`font-${currentFont.class}`">{{ value }}</div>
    <div
      v-show="!value.length"
      :class="`font-${currentFont.class}`"
      class="text-secondary opacity-4"
    >
      {{ label }}
    </div>
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
    customClass: {
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

<style lang="scss">
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
