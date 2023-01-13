<template>
  <div class="expereiance-row">
    <div class="pb-2" v-show="showNavigation">
      <b-button size="sm" variant="dark" @click="addExperience"
        >
        <b-icon icon="plus" />
      </b-button>
    </div>
    <div
      class="experience-item company-template pb-2"
      v-for="(expirience, key) in inputValue"
      :key="`experience-key-${id}-${key}`"
    >
      <div>
        <div class="company-name">
          <tag-editable
            v-model="inputValue[key].companyName"
            placeholder-value="Complany name"
            @focus-input="focusHandler"
          />
        </div>
        <div class="company-position">
          <tag-editable
            v-model="inputValue[key].position"
            placeholder-value="Position name"
            @focus-input="focusHandler"
          />
        </div>
        <div class="company-date-work d-flex align-items-center">
          <b-form-datepicker
            v-model="inputValue[key].date.from"
            placeholder="from"
            style="border: none !important"
            size="sm"
          />
          <b-form-datepicker
            v-model="inputValue[key].date.to"
            @input="() => (allow = false)"
            @hidden="() => (allow = false)"
            @shown="() => (allow = false)"
            style="border: none !important"
            placeholder="to"
            size="sm"
          />
        </div>
      </div>
      <div>
        <tag-editable
          style="text-align: left; padding: 20px; white-space: pre"
          v-model="inputValue[key].description"
          @focus-input="focusHandler"
          placeholder-value="Description about your expereince"
        ></tag-editable>
        <b-button
          v-show="showNavigation"
          @click="deleteExpirience(key)"
          variant="outline-dark"
          size="sm"
          class="btn-delete"
        >
          <b-icon icon="trash"/>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import inputMixin from '@/mixins/input';
import TagEditable from '../TagEditable.vue';

export default {
  name: 'ExpreienceInputForm',
  components: { TagEditable },
  mixins: [inputMixin],
  data() {
    return {
      expiriences: null,
      properties: null,
      propertyName: '',
      allow: false,
      defaultInputItemValue: {
        companyName: '',
        position: '',
        date: { from: '', to: '' },
        description: '',
      },
      inputValue: null,
      inputType: 'expreriance',
      defaultInputValueInForm: [],
    };
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addExperience() {
      this.inputValue = [...this.inputValue, this.defaultInputItemValue];
    },
    deleteExpirience(key) {
      this.inputValue = this.inputValue.filter((_, index) => index !== key);
    },
  },
};
</script>

<style lang="scss">
.company-template {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  .btn-delete {
    position: absolute;
    right: 0px;
    top: 0px;
  }
}
</style>
