<template>
  <div class="conatct-input" v-click-outside="onBlur">
    <div class="d-flex justify-content-center align-items-center flex-wrap">
      <div
        v-for="(skill, index) in inputValue"
        :key="`skill-key-${id}-${index}`"
        class="mx-2 mb-2"
      >
      <div
      :class="`font-${currentFont.class}`"
      class="d-flex justify-content-center align-items-center">
          <div class="contatc-input" style="min-width: 100px; max-width: 50% !important;">
            <tag-editable
              v-model="inputValue[index]"
              allow-white-space
              tagType="div"
              :placeholderValue="RESUME_PLACEHOLDER_TEXT.SKILL"
              @focus-input="focusHandler"
              :disabel-enter="false"
            />
          </div>
          <div class="pl-2" v-show="showNavigation">
            <b-icon icon="trash-fill" @click="deleteSkill(index)" />
          </div>
        </div>
      </div>
      <div v-show="showNavigation">
        <div class="d-flex align-item-center">
          <b-button size="sm" variant="outline-dark" @click="addSkill">
            <b-icon icon="plus" />
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import constants from '@/constants';
import inputMixin from '@/mixins/input';
import TagEditable from '@/components/TagEditable.vue';

export default {
  name: 'SkillInputForm',
  components: { TagEditable },
  mixins: [inputMixin],
  data() {
    return {
      test: '',
      skills: null,
      properties: null,
      propertyName: '',
      inputValue: null,
      inputType: constants.INPUT_KEYS.SKILL,
      defaultInputValueInForm: [],
    };
  },
  computed: {
    ...mapState('form', ['currentFont']),
    canUpdate() {
      return Boolean(this.inputValue?.length);
    },
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addSkill() {
      this.inputValue = [...this.inputValue || [''], ''] || [''];
    },
    deleteSkill(key) {
      this.inputValue = this.inputValue.filter(
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
};
</script>

<style lang="scss" scoped></style>
