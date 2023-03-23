<script setup lang="ts">
import MainForm from '@/components/MainForm.vue';

  function getStyle() {
    return document.querySelectorAll('style')[0].innerHTML;
}

function getElementHtml(selector: string) {
  const element = document.querySelector(selector);
  if (!element) {
    throw new Error(`Element with selector "${selector}" not found`);
  }
  return element.outerHTML;
}

function printElement(selector: string) {
  const elementHtml = getElementHtml(selector);
  const printWindow = window.open('', '_blank');
  printWindow?.document.write(`
     <html><head><title>${123123}</title>
       <style>${getStyle()}</style>
       </head>
       <body>
         ${elementHtml}
       </body>
       </html>
     `);
  printWindow?.document.close();
  printWindow?.focus();
  printWindow?.print();
  setTimeout(() => { printWindow?.close(); }, 50)
}

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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
