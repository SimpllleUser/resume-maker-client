<template>
  <div class="conatct-input" v-click-outside="onBlur">
    <div class="d-flex align-items-center flex-wrap">
      <div
        v-for="(skill, index) in skills[propertyName]"
        :key="`skill-key-${id}-${index}`"
        class="mx-2 mb-2"
      >
        <div class="d-flex align-items-center">
          <div class="contatc-input" style="min-width: 100px">
            <tag-editable
                   tagType="div"
                   placeholderValue="Example skill"
                   @change="updateInputValue"
                   @focus-input="focusHandler"
            />
          </div>
          <div class="pl-2">
            <b-icon icon="trash-fill" @click="deleteSkill(index)" />
          </div>
        </div>
      </div>
      <div>
        <div class="d-flex align-item-center">
          <b-button size="sm" variant="dark-outline" @click="addSkill">
            add <b-icon icon="plus-lg" />
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formMixin from '@/mixins/form';
import TagEditable from '@/components/TagEditable.vue';

export default {
  name: 'SkillInputForm',
  components: { TagEditable },
  mixins: [formMixin],
  props: {
    id: {
      type: String,
      require: true,
      default: '',
    },
    value: {
      type: Array,
      require: true,
      default: () => [''],
    },
  },
  data() {
    return {
      skills: null,
      properties: null,
      propertyName: '',
    };
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addSkill() {
      this.skills[this.propertyName] = [...this.skills[this.propertyName], ' '];
    },
    deleteSkill(key) {
      this.skills[this.propertyName] = this.skills[this.propertyName].filter(
        (_, index) => index !== key,
      );
      this.onFocus();
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
      return Boolean(this.skills[`${this.propertyName}`]?.length);
    },
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.propertyName = this.id;
        this.skills = { [this.propertyName]: [''] };
        this.properties = [`skills.${this.propertyName}`];
        this.updateInputValue();
      },
    },
    value: {
      immediate: true,
      handler() {
        this.skills[`${this.propertyName}`] = this.value;
      },
    },
    skills() {
      this.updateInputValue();
    },
  },
  mounted() {
    this.updateInputValue();
  },
};
</script>

<style lang="scss" scoped></style>
