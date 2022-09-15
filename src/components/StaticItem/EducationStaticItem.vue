<template>
  <div>
    <div v-for="(education, index) in value" :key="`conatct-key-${id}-${index}`">
      <div class="container">
        <div class="row row-cols-2">
          <div class="text-center">
            <div class="col">
              <b>{{ education.educationName }}</b>
            </div>
            <div class="col">{{ education.date.from }} - {{ education.date.to }}</div>
          </div>
          <div class="col">{{ education.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EducationStaticItem',
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

};
</script>

<style lang="scss" scoped></style>
