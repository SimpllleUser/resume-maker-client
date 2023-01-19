<template>
  <div>
    <div>
      <div>
        <div class="px-3 py-2">
          <div
            v-for="input in inputsList"
           :key="input.name"
            class="w-100 py-1">
            <b-button
            variant="outline-dark"
             @click="addInput(input)"
              class="d-block w-100">
              {{ input.name }}
            </b-button>
          </div>
          <div class="py-2">
            <color-picker/>
          </div>
          <div class="py-2">
            <font-picker/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import types from '@/store/modules/form/types';
import ColorPicker from '@/components/ColorPicker.vue';
import FontPicker from '@/components/FontPicker.vue';

export default {
  name: 'SideBar',
  components: {
    ColorPicker,
    FontPicker,
  },
  computed: {
    ...mapGetters('form', ['inputsList']),
  },
  methods: {
    ...mapMutations('form', { addInput: types.ADD_INPUT }),
  },
};
</script>

<style lang="scss" scoped></style>
