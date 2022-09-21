<template>
  <div class="home" style="height: 80vh;">
    <b-container class="bv-example-row">
        <main-form/>
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
