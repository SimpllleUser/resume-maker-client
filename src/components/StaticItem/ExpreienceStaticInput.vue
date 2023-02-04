<template>
  <div>
    <div v-for="(experience, index) in value" :key="`conatct-key-${index}`">
      <div class="container">
        <div class="row row-cols-2">
          <div class="text-center">
            <div class="col">
              <b>
                <text-placeholder :value="experience.companyName" label="Company name" />
              </b>
            </div>
            <div class="col">
              <text-placeholder :value="experience.position" label="position" />
            </div>
            <div class="col d-flex justify-content-center">
              <div>
                <text-placeholder :value="experience.date.from" label="from" />
              </div>
              <div class="px-2">-</div>
              <div>
                <text-placeholder :value="experience.date.to" label="to" />
              </div>
            </div>
          </div>
          <div class="col">
            <text-placeholder :value="experience.description" label="description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextPlaceholder from '@/components/TextPlaceholder.vue';

export default {
  name: 'ExpreienceStaticInput',
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
