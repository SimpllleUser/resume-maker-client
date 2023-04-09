<template>
<div id="toolbar"></div>
<div id="editor"></div>
  </template>
<script setup lang="js">
new Quill('#editor', {
  modules: {
    toolbar: '#toolbar'
  },
  theme: 'snow'
});
</script>