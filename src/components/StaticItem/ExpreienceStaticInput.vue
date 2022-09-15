<template>
  <div>
    <div v-for="(experience, index) in value" :key="`conatct-key-${index}`">
      <div class="container">
        <div class="row row-cols-2">
          <div class="text-center">
            <div class="col">
              <b>{{ experience.companyName }}</b>
            </div>
            <div class="col">{{ experience.position }}</div>
            <div class="col">{{ experience.date.from }} - {{ experience.date.to }}</div>
          </div>
          <div class="col">{{ experience.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExpreienceStaticInput',
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
