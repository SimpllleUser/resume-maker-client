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
      :key="key"
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
import { v4 as uuidv4 } from 'uuid';
import formMixin from '@/mixins/form';

const propertyName = `experience-${uuidv4()}`;
const defaultExpereence = {
  companyName: 'companyName',
  position: 'position',
  date: { from: 'from', to: 'to' },
  description: 'description',
};

export default {
  name: 'ExpreienceInputForm',
  mixins: [formMixin],
  data() {
    return {
      expiriences: { [propertyName]: [JSON.parse(JSON.stringify(defaultExpereence))] },
      properties: [`expiriences.${propertyName}`],
      propertyName,
    };
  },
  methods: {
    addExperience() {
      this.expiriences[propertyName] = [
        ...this.expiriences[propertyName],
        JSON.parse(JSON.stringify(defaultExpereence)),
      ];
    },
    deleteExpirience(key) {
      this.expiriences[propertyName] = this.expiriences[propertyName]
        .filter((_, index) => index !== key);
    },
  },
  watch: {
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
