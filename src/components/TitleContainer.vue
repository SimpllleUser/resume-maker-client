<template>
  <div class="title position-relative my-4 py-2" style="width: 90%;margin-left: auto;
  margin-right: auto;">
    <div class="position-absolute bg-white"
    style="margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    font-size: 32px;
    width: fit-content;
    padding: 0px 20px;
    top: -15px;">{{ text }}</div>
    <div class="w-100" style="border: 2px solid grey; height: 2px;"></div>
  </div>
</template>

<script>
export default {
  name: 'TitleContainer',
  props: {
    text: {
      type: String,
      require: true,
      default: '',
    },
  },
};
</script>
