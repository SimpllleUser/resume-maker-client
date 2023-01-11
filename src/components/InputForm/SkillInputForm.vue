<template>
  <div class="conatct-input" v-click-outside="onBlur">
    {{ id }}
    <div class="d-flex justify-content-center align-items-center flex-wrap">
      <div
        v-for="(skill, index) in valueTest"
        :key="`skill-key-${id}-${index}`"
        class="mx-2 mb-2"
      >        <div class="d-flex align-items-center">
          <div class="contatc-input" style="min-width: 100px">
            <tag-editable
              v-model="valueTest[index]"
              allow-white-space
              tagType="div"
              placeholderValue="Example skill"
              @focus-input="focusHandler"
            />
          </div>
          <div class="pl-2" v-show="showNavigation">
            <b-icon icon="trash-fill" @click="deleteSkill(index)" />
          </div>
        </div>
      </div>
      <div v-show="showNavigation">
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
// import formMixin from '@/mixins/form';
import inputMixin from '@/mixins/input';
import TagEditable from '@/components/TagEditable.vue';

export default {
  name: 'SkillInputForm',
  components: { TagEditable },
  mixins: [inputMixin],
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
      test: '',
      skills: null,
      properties: null,
      propertyName: '',
      valueTest: null,
      inputType: 'skills',
      defaultInputValueInForm: [],
    };
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addSkill() {
    // this.skills[this.propertyName] = [...this.skills[this.propertyName], ' '];
      this.valueTest = [...this.valueTest || [''], ''] || [''];
    },
    deleteSkill(key) {
      this.valueTest = this.valueTest.filter(
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
    // valueTestHandle() {
    //   const key = `test.${this.type}.${this.id}`;
    //   // console.log(key, JSON.stringify(this.valueTest));
    //   localStorage.setItem(key, JSON.stringify(this.valueTest || []));
    // },
  },
  computed: {
    canUpdate() {
      return Boolean(this.valueTest?.length);
    },
  },
  watch: {
    // value: {
    //   immediate: true,
    //   handler() {
    //     this.skills[`${this.propertyName}`] = this.value;
    //     // this.valueTestInit(this.value);
    //   },
    // },
    skills() {
      // this.updateInputValue();
    },
  },
  mounted() {
    // eslint-disable-next-line no-underscore-dangle
    // console.log(this._data);
    // this.updateInputValue();
  },
};
</script>

<style lang="scss" scoped></style>
