<template>
  <div class="row">
    <div
      class="col"
      v-for="(contact, index) in value"
      :key="`conatct-key-${index}`"
    >
      <div class="d-flex align-items-center justify-content-center">
        <div class="pr-2">
          <b-icon :icon="contact.icon" />
        </div>
        <text-placeholder
          :value="contact.value"
           label="your contact" />
      </div>
    </div>
  </div>
</template>

<script>
import TextPlaceholder from '@/components/TextPlaceholder.vue';

export default {
  name: 'ContactStaticItem',
  components: {
    TextPlaceholder,
  },
  props: {
    // id: {
    //   type: String,
    //   require: true,
    //   default: '',
    // },
    value: {
      type: [],
      require: true,
      default: () => (['']),
    },
  },
};
</script>

<style lang="scss" scoped></style>
