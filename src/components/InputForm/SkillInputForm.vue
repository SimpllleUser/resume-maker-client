<template>
    <div class="conatct-input" v-click-outside="onBlur">
        <div class="d-flex align-items-center flex-wrap">
          <div v-for="(skill, index) in skills[propertyName]" :key="index" class="mx-2 mb-2">
            <div class="d-flex align-items-center">
              <div class="contatc-input">
                <b-form-input v-model="skills[propertyName][index]" @change="updateInputValue" />
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
import { v4 as uuidv4 } from 'uuid';
import formMixin from '@/mixins/form';

const propertyName = `experience-${uuidv4()}`;
export default {
  name: 'SkillInputForm',
  mixins: [formMixin],
  data() {
    return {
      skills: { [propertyName]: ['some skill'] },
      properties: [`skills.${propertyName}`],
      propertyName,
    };
  },
  methods: {
    addSkill() {
      this.skills[propertyName] = [
        ...this.skills[propertyName],
        'some skill'];
    },
    deleteSkill(key) {
      this.skills[propertyName] = this.skills[propertyName]
        .filter((_, index) => index !== key);
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
    skills() {
      this.updateInputValue();
    },
  },
  mounted() {
    this.updateInputValue();
  },
};
</script>

<style lang="scss" scoped>

</style>
