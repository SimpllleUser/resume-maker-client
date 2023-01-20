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
             @click="addInputHandle(input)"
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
import { mapGetters, mapMutations, mapState } from 'vuex';
import types from '@/store/modules/form/types';
import ColorPicker from '@/components/ColorPicker.vue';
import FontPicker from '@/components/FontPicker.vue';

export default {
  name: 'SideBar',
  components: {
    ColorPicker,
    FontPicker,
  },
  props: {
    id: {
      type: String,
      require: true,
    },
  },
  computed: {
    ...mapGetters('form', ['inputsList']),
    ...mapState('form', ['formDataTest']),
  },
  methods: {
    ...mapMutations('form', { setFormValue: types.SET_INPUT_VALUE }),
    addInputHandle({ defaultValue }) {
      this.setFormValue(defaultValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
