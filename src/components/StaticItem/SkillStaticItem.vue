<template>
  <div>
    <div class="row">
      <div
      v-for="(skill, index) in value"
       :key="`skill-${id}-${index}`"
        class="col-4 text-center">
        <div class="d-flex align-items-center justify-content-center py-1">
          <div class="text-center">{{ skill }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SkillStaticItem',
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
