<template>
  <div class="w-100">
    <div v-for="font in fonts"
    :key="font.value"
    class="my-2 w-100"
    :class="{'sahdow-xl': currentFont.value === font.value}"
    >
      <b-button @click="setFont(font)"
      class="w-100"
      :variant="`${isActive(font) ? 'primary' : 'outline-dark'}`"
      :style="`font-family: ${font.style}`"
      :class="`font-${font.value}`">
        {{ font.name }}
    </b-button>
    </div>
  </div>
</template>

<script>
import types from '@/store/modules/form/types';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'FontPicker',

  data() {
    return {
      activeClass: 'rounded-circle shadow-lg',
    };
  },

  computed: {
    ...mapState('form', ['fonts', 'currentFont']),
  },
  methods: {
    ...mapMutations('form', {
      setFont: types.SET_FONT,
    }),
    isActive({ style }) {
      return this.currentFont.style === style;
    },
  },
};
</script>

<style lang="scss" scoped></style>
