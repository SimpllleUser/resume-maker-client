<template>
  <div class="about-static" style="margin: 0 auto; width: 80px; display: contents;">
    <div style="width: 100%;">
      <div
        style="
        margin: 0 auto;
        width: 80%;
          white-space: pre;
          text-align: justify;
        "
        :class="{ 'text-center': !value }"
      >
        <text-placeholder class="text-color-blue"
         :value="value" label="Enter some text about you" />
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
