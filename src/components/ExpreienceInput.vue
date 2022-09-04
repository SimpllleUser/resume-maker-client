<template>
  <div class="expereiance-row">
    <div class="pb-2">
      <b-button size="sm" variant="primary" @click="addExperience"
        >add
        <b-icon icon="plus-lg" />
      </b-button>
    </div>
    <div
      class="experience-item company-template pb-2"
      v-for="(expirience, key) in expiriences"
      :key="key"
    >
      <div>
        <div class="company-name">
          <b-form-input v-model="expiriences[key].companyName" @change="onUpdateInput" />
        </div>
        <div class="company-position">
          <b-form-input v-model="expiriences[key].position" @change="onUpdateInput" />
        </div>
        <div class="company-date-work d-flex align-items-center">
          <b-form-datepicker
            v-model="expiriences[key].date.from"
            @context="onUpdateInput"
            placeholder="from"
            size="sm"
          />
          <b-form-datepicker
            v-model="expiriences[key].date.to"
            @context="onUpdateInput"
            placeholder="to"
            size="sm"
          />
        </div>
      </div>
      <div>
        <b-textarea
          v-model="expiriences[key].description"
          @change="onUpdateInput"
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
import props from '@/props';
import formMixin from '@/mixins/form';

const defaultExpereence = {
  companyName: 'companyName',
  position: 'position',
  date: { from: 'from', to: 'to' },
  description: 'description',
};

export default {
  name: 'ExpreienceInput',
  props: {
    setFormValue: props.setFormValue,
  },
  mixins: [formMixin],
  data() {
    return {
      expiriences: [JSON.parse(JSON.stringify(defaultExpereence))],
      properties: ['expiriences'],
    };
  },
  methods: {
    addExperience() {
      this.expiriences = [...this.expiriences, JSON.parse(JSON.stringify(defaultExpereence))];
    },
    deleteExpirience(key) {
      this.expiriences = this.expiriences.filter((_, index) => index !== key);
    },
    onUpdateInput() {
      this.setFormValue({ expiriences: this.expiriences });
    },
  },
  watch: {
    educations() {
      this.onUpdateInput();
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
    right: -40px;
    top: 0px;
  }
}
</style>
