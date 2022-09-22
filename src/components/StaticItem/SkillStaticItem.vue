<template>
  <div class="container">
    <div class="row">
      <div v-for="(skill, index) in value" :key="`skill-${id}-${index}`" class="col-4 text-center">
        <div class="d-flex align-items-center justify-content-center py-1">
          <div class="text-center">
            <text-placeholder :value="skill" label="Some skill" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextPlaceholder from '@/components/TextPlaceholder.vue';

export default {
  name: 'SkillStaticItem',
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
