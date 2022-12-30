<template>
  <div v-click-outside="onBlur" class="ml-auto mr-auto">
    <b-form-group style="width: 100%; display: block; margin: 0 auto">
      <tag-editable
      style="text-align: left; padding: 20px;white-space: pre;"
        v-model="about[propertyName]"
        @change="updateInputValue"
        @focus-input="focusHandler"
        placeholderValue="Some text about"
      />
    </b-form-group>
  </div>
</template>

<script>
import formMixin from '@/mixins/form';
import TagEditable from '../TagEditable.vue';

export default {
  name: 'AboutInputForm',
  components: { TagEditable },
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
  computed: {
    canUpdate() {
      return Boolean(this.about[`${this.propertyName}`]?.length);
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
    value: {
      immediate: true,
      handler() {
        this.about[`${this.propertyName}`] = this.value;
      },
    },
    about() {
      this.updateInputValue();
    },
  },
  mounted() {
    this.updateInputValue();
  },
};
</script>

<style lang="scss" scoped></style>
