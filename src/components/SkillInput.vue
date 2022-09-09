<template>
  <div class="conatct-input" v-click-outside="onBlur">
    <div class="d-flex align-items-center flex-wrap">
      <div v-for="(skill, index) in skills" :key="index" class="mx-2 mb-2">
        <div class="d-flex align-items-center">
          <div class="contatc-input">
            <b-form-input v-model="skills[index]" @change="updateInputValue" />
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
  name: 'SkillInput',
  mixins: [formMixin],
  data() {
    return {
      skills: ['some skill'],
      properties: ['skills'],
    };
  },
  methods: {
    addSkill() {
      this.skills = [...this.skills, 'some skill'];
    },
    deleteSkill(key) {
      this.skills = this.skills.filter((_, index) => index !== key);
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
};
</script>

<style></style>
