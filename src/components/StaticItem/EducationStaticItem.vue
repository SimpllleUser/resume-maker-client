<template>
  <div>
    <div v-for="(education, index) in value" :key="`conatct-key-${id}-${index}`">
      <div class="container">
        <div class="row row-cols-2">
          <div class="text-center">
            <div class="col">
              <b>
                <text-placeholder :value="education.educationName" label="Education name" />
              </b>
            </div>
            <div class="col d-flex justify-content-center">
              <text-placeholder :value="education.date.from" label="from" />
              <div class="px-2">-</div>
              <text-placeholder :value="education.date.to" label="to" />
            </div>
          </div>
          <div class="col">
            <text-placeholder :value="education.description" label="description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextPlaceholder from '@/components/TextPlaceholder.vue';

export default {
  name: 'EducationStaticItem',
  components: {
    TextPlaceholder,
  },
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
