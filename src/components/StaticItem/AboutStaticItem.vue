<template>
  <div>
    <div>
      <div
        style="
          max-width: 70%;
          width: 100%;
          display: block;
          margin: 0 auto;
          white-space: pre;
          text-align: justify;
        "
        :class="{ 'text-center': !value }"
      >
        <text-placeholder :value="value" label="Enter some text about you" />
      </div>
    </div>
  </div>
</template>

<script>
import TextPlaceholder from '@/components/TextPlaceholder.vue';

export default {
  name: 'AboutStaticItem',
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
      type: String,
      require: true,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
