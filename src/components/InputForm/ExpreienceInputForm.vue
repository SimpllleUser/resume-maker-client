<template>
  <div class="expereiance-row" v-click-outside="onBlur">
    <div class="pb-2">
      <b-button size="sm" variant="primary" @click="addExperience"
        >add
        <b-icon icon="plus-lg" />
      </b-button>
    </div>
    <div
      class="experience-item company-template pb-2"
      v-for="(expirience, key) in expiriences[propertyName]"
      :key="`experience-key-${id}-${key}`"
    >
      <div>
        <div class="company-name">
          <b-form-input
          v-model="expiriences[propertyName][key].companyName"
           @change="updateInputValue" />
        </div>
        <div class="company-position">
          <b-form-input
          v-model="expiriences[propertyName][key].position"
           @change="updateInputValue" />
        </div>
        <div class="company-date-work d-flex align-items-center">
          <b-form-datepicker
            v-model="expiriences[propertyName][key].date.from"
            @context="updateInputValue"
            placeholder="from"
            size="sm"
          />
          <b-form-datepicker
            v-model="expiriences[propertyName][key].date.to"
            @context="updateInputValue"
            placeholder="to"
            size="sm"
          />
        </div>
      </div>
      <div>
        <b-textarea
          v-model="expiriences[propertyName][key].description"
          @change="updateInputValue"
          placeholder="Description about your expereince"
          rows="4"
        ></b-textarea>
        <b-button
          @click="deleteExpirience(key)"
          variant="outline-danger"
          size="sm"
          class="btn-delete"
        >
          <b-icon icon="trash" variant="danger" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import cloneDepp from 'lodash/cloneDeep';
import formMixin from '@/mixins/form';

const defaultExpereence = {
  companyName: '',
  position: '',
  date: { from: '', to: '' },
  description: '',
};

export default {
  name: 'ExpreienceInputForm',
  mixins: [formMixin],
  props: {
    id: {
      type: String,
      require: true,
      default: '',
    },
    value: {
      type: Array,
      default: () => [cloneDepp(defaultExpereence)],
    },
  },
  data() {
    return {
      expiriences: null,
      properties: null,
      propertyName: '',
    };
  },
  methods: {
    addExperience() {
      this.expiriences[this.propertyName] = [
        ...this.expiriences[this.propertyName],
        JSON.parse(JSON.stringify(defaultExpereence)),
      ];
    },
    deleteExpirience(key) {
      this.expiriences[this.propertyName] = this.expiriences[this.propertyName]
        .filter((_, index) => index !== key);
    },
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.propertyName = this.id;
        this.expiriences = { [this.propertyName]: [JSON.parse(JSON.stringify(defaultExpereence))] };
        this.properties = [`expiriences.${this.propertyName}`];
        this.updateInputValue();
      },
    },
    value: {
      immediate: true,
      handler() {
        this.expiriences[`${this.propertyName}`] = this.value;
      },
    },
    educations() {
      this.updateInputValue();
    },
  },
  mounted() {
    this.updateInputValue();
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
    right: -40px;
    top: 0px;
  }
}
</style>
