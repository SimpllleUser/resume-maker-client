<template>
  <div class="expereiance-row">
    <div class="pb-2">
      <b-button size="sm" variant="primary" @click="addExperience"
        >add
        <b-icon icon="plus-lg" />
      </b-button>
    </div>
    <div
      class="experience-item education-template pb-2"
      v-for="(education, key) in educations"
      :key="key"
    >
      <div>
        <div class="education-name">
          <b-form-input v-model="educations[key].educationName" @change="updateInputValue" />
        </div>
        <div class="education-date-work d-flex align-items-center">
          <b-form-datepicker
            v-model="educations[key].date.from"
            @change="updateInputValue"
            placeholder="from"
            size="sm"
          />
          <b-form-datepicker
            v-model="educations[key].date.to"
            @change="updateInputValue"
            placeholder="to"
            size="sm"
          />
        </div>
      </div>
      <div>
        <b-textarea v-model="educations[key].description" @change="updateInputValue" rows="4" />
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
import formMixin from '@/mixins/form';

const defaultEducation = {
  educationName: 'Education place',
  date: { from: 'from', to: 'to' },
  description: 'description',
};

export default {
  name: 'EducationInput',
  mixins: [formMixin],
  data() {
    return {
      educations: [JSON.parse(JSON.stringify(defaultEducation))],
      properties: ['educations'],
    };
  },
  methods: {
    addExperience() {
      this.educations = [...this.educations, JSON.parse(JSON.stringify(defaultEducation))];
    },
    deleteExpirience(key) {
      this.educations = this.educations.filter((_, index) => index !== key);
    },
  },
  watch: {
    educations() {
      this.updateInputValue();
    },
  },
};
</script>

<style lang="scss">
.education-template {
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
