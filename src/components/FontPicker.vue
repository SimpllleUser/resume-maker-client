<template>
  <div>
    <div v-for="font in fonts" :key="font.value"
    class="my-2"
    :class="{'sahdow-xl': currentFont.value === font.value}"
    >
      <b-button @click="setFont(font)" :class="`font-${font.value}`">
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
  },
};
</script>

<style lang="scss" scoped></style>
