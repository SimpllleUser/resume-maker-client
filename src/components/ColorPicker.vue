<template>
  <div class="color-list d-flex flex-wrap">
    <div
      v-for="color in colors"
      :key="color.value"
      class="my-2"
      :class="{ 'rounded-circle shadow-lg': currentColor.value === color.value }"
      style="width: 55px"
    >
      <div>
        <b-button
          class="p-4"
          :class="{ [`${activeClass}`]: currentColor.value === color.value }"
          :style="`background-color: ${color.value}`"
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
