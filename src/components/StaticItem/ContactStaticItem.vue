<template>
  <div class="row">
    <div class="col" v-for="(contact, index) in value" :key="`conatct-key-${index}`">
      <div class="d-flex justify-content-center">
        <div style="padding-right: 8px">
          <b-icon :icon="contact.icon" scale="1.2rem" :style="`color: ${currentColor.value}`" />
        </div>
        <div class="pl-5">
          <text-placeholder :value="contact.value" label="your contact" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
      default: () => [''],
    },
  },
  computed: {
    ...mapState('form', ['currentColor']),
  },
};
</script>

<style lang="scss" scoped></style>
