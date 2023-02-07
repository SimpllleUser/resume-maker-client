<template>
  <div
    class="h1 text-center"
    :class="`full-name-color-${currentColor.class} font-${currentFont.class}`"
  >
    <tag-editable
      v-model="inputValue.fullName"
      @focus-input="focusHandler"
      tagType="h1"
      :placeholderValue="RESUME_PLACEHOLDER_TEXT.MAIN_INPUT.FULL_NAME"
    />
    <tag-editable
      v-model="inputValue.position"
      @focus-input="focusHandler"
      tagType="h4"
      :placeholderValue="RESUME_PLACEHOLDER_TEXT.MAIN_INPUT.POSITION"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import inputMixin from '@/mixins/input';
import TagEditable from '../TagEditable.vue';

export default {
  name: 'MainInfoInputForm',
  components: { TagEditable },
  mixins: [inputMixin],
  data() {
    return {
      inputType: 'mainInfo',
      defaultInputValueInForm: { fullName: '', position: '' },
      inputValue: null,
    };
  },
  computed: {
    ...mapState('form', ['inputs', 'formData', 'currentColor', 'currentFont']),
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    onFocus() {
      this.$emit('on-focus');
    },
    onBlur() {
      this.$emit('on-blur');
    },
  },
};
</script>

<style lang="scss" scoped></style>
