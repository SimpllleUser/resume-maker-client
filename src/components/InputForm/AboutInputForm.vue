<template>
  <div v-click-outside="onBlur" class="ml-auto mr-auto">
    <b-form-group style="width: 100%; display: block; margin: 0 auto">
      <tag-editable
      style="text-align: left; padding: 20px;"
        allow-white-space
        v-model="valueTest"
        @focus-input="focusHandler"
        placeholderValue="Some text about"
      />
    </b-form-group>
  </div>
</template>

<script>
import inputMixin from '@/mixins/input';
import TagEditable from '../TagEditable.vue';

export default {
  name: 'AboutInputForm',
  components: { TagEditable },
  mixins: [inputMixin],
  data() {
    return {
      about: null,
      properties: null,
      propertyName: '',
      inputType: 'about',
      defaultInputValueInForm: '',
      valueTest: null,
    };
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
