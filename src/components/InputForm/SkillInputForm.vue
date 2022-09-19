<template>
  <div class="conatct-input" v-click-outside="onBlur">
    <div class="d-flex align-items-center flex-wrap">
      <div
        v-for="(skill, index) in skills[propertyName]"
        :key="`skill-key-${id}-${index}`"
        class="mx-2 mb-2"
      >
        <div class="d-flex align-items-center">
          <div class="contatc-input">
            <b-form-input
              v-model="skills[propertyName][index]"
              @change="updateInputValue"
              placeholde="some skill"
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

export default {
  name: 'SkillInputForm',
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
      default: () => [],
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
    skills() {
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
