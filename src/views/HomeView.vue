<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>
      <main-form/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainForm from '@/components/MainForm.vue';

export default {
  name: 'HomeView',
  components: {
    MainForm,
  },
};
</script>
