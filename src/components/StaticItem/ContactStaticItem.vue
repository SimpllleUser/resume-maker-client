<template>
  <div class="row">
    <div class="col" v-for="(contact, index) in value" :key="`conatct-key-${index}`">
      <div class="d-flex justify-content-center test">
        <div style="padding-right: 8px">
          <b-icon :icon="contact.icon"
          scale="1.2rem"
          :style="`min-height: 1.2rem; color: ${currentColor.value}`" />
        </div>
        <div class="pl-5">
          <text-placeholder :class="`contact-text font-${currentFont.value}`"
           :value="contact.value" label="your contact" />
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
    value: {
      type: [],
      require: true,
      default: () => [''],
    },
  },
  computed: {
    ...mapState('form', ['currentColor', 'currentFont']),
  },
};
</script>
