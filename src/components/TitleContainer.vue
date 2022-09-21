<template>
  <div
    class="title position-relative py-2"
    style="width: 90%; margin-left: auto; margin-right: auto; margin-bottom: 50px"
    tabindex="-1"
    @blur="focus = false"
    @focus="onFocus()"
  >
    <div
      class="position-absolute"
      style="
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        font-size: 32px;
        width: fit-content;
        top: -7px;
      "
    >
      <b-input
        :ref="refName"
        v-model="value"
        :placeholder="placeholder"
        @change="onChange"
        v-autowidth="{maxWidth: '960px', minWidth, comfortZone: 0}"
        style="
          font-size: 24px;
          font-weight: bold;
          border: none;
          text-align: center;
          padding: 0px 20px;
          margin: 0 auto;
        "
      />
    </div>
    <div class="w-100" style="border: 2px solid grey; height: 2px"></div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapMutations } from 'vuex';
import types from '@/store/modules/form/types';

const refName = `title-container-ref-${uuidv4()}`;
export default {
  name: 'TitleContainer',
  props: {
    id: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      value: '',
      focus: false,
      refName,
    };
  },
  methods: {
    ...mapMutations('form', { updateTitleContainer: types.UPDATE_TITLE_CONTAINER }),
    onFocus() {
      this.focus = true;
      this.$refs[this.refName]?.focus();
    },
    onChange(value) {
      this.updateTitleContainer({ id: this.id, value });
    },
  },
  computed: {
    minWidth() {
      const text = this.value || this.placeholder;
      return `${text.length * 15}px`;
    },
  },
  watch: {
    text: {
      immediate: true,
      handler() {
        this.value = this.text;
      },
    },
  },
};
</script>
