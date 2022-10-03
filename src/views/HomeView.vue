<template>
    <div class="template">
      <div class="sidebar shadow">
        <side-bar />
      </div>
      <div class="main-contant px-3 mx-3">
        <main-form />
      </div>
    </div>
</template>

<script>
import MainForm from '@/components/MainForm.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'HomeView',
  components: {
    MainForm,
    SideBar,
  },
};
</script>
<style lang="scss" scoped>
  .template {
    display: flex;
    .sidebar {
      width: 200px;
    }
    .main-contant {
      width: calc(100% - 200px);
    }
  }
</style>
