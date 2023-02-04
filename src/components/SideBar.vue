<template>
  <div>
    <div>
      <div>
        <div class="position-fixed px-3 py-2" style="max-width: 200px">
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
import resumeTypes from '@/store/modules/resume/types';
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
    ...mapGetters('resume', [
      'currentResume',
      'currentResumeInputs',
    ]),
  },
  methods: {
    ...mapMutations('form', {
      setFormValue: types.SET_INPUT_VALUE,
      updateInputs: types.SET_INPUT,
    }),
    ...mapMutations('resume', {
      updateResume: resumeTypes.UPDATE_RESUME,
    }),
    addInputHandle({ defaultValue }) {
      this.setFormValue(defaultValue);
      this.updateResume(this.formDataTest);
      this.updateInputs(this.currentResumeInputs(this.id));
    },
  },
};
</script>

<style lang="scss" scoped></style>
