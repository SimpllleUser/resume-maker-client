<template>
  <div class="color-list d-flex flex-wrap">
    <div
      v-for="color in colors"
      :key="color.style"
      class="my-2"
      :class="{ 'rounded-circle shadow-lg': currentColor.style === color.style }"
      style="width: 55px"
    >
      <div>
        <b-button
          class="p-4"
          :class="{ [`${activeClass}`]: currentColor.style === color.style }"
          :style="`background-color: ${color.style}`"
          @click="setColor(color)"
        >
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import types from '@/store/modules/form/types';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'ColorPicker',
  data() {
    return {
      activeClass: 'rounded-circle shadow-lg',
    };
  },
  computed: {
    ...mapState('form', ['colors', 'currentColor']),
  },
  methods: {
    ...mapMutations('form', {
      setColor: types.SET_COLOR,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
