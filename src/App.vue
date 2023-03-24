<script setup lang="ts">
import MainForm from "@/components/MainForm.vue";

import usePrint from '@/composables/print-dom.ts'

const { printElement } = usePrint();
</script>

<template>
  <div>
    <div class="resume-content">
      <main-form />
    </div>
    <button class="btn-primary" @click="printElement('.resume-content')">
      Print
    </button>
  </div>
</template>

<style scoped>
</style>
