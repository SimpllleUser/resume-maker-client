<template>
  <div v-click-outside="onBlur" class="ml-auto mr-auto">
    <b-form-group style="max-width: 70%; width: 100%; display: block; margin: 0 auto">
      <b-form-textarea
        class="d-block ml-auto mr-auto"
        v-model="about[propertyName]"
        @change="updateInputValue"
        placeholder="Some about text"
        rows="4"
      />
    </b-form-group>
  </div>
</template>

<script>
import formMixin from '@/mixins/form';

export default {
  name: 'AboutInputForm',
  mixins: [formMixin],
  props: {
    id: {
      type: String,
      require: true,
      default: '',
    },
    value: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      about: null,
      properties: null,
      propertyName: '',
    };
  },
  methods: {
    onFocus() {
      this.$emit('on-focus');
    },
    onBlur() {
      this.$emit('on-blur');
    },
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.propertyName = this.id;
        this.about = { [this.propertyName]: '' };
        this.properties = [`about.${this.propertyName}`];
        this.updateInputValue();
      },
    },
    about() {
      if (!this.propertyName) return;
      this.updateInputValue();
    },
  },
  mounted() {
    if (!this.propertyName) return;
    this.updateInputValue();
  },
};
</script>

<style lang="scss" scoped></style>
