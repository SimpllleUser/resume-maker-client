<template>
  <div>
    <div class="row">
      <div class="col-8 ml-auto mr-auto">{{ value || 'Enter some text about you' }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutStaticItem',
  props: {
    id: {
      type: String,
      require: true,
      default: '',
    },
    value: {
      type: String,
      require: true,
      default: '',
    },
  },

};
</script>

<style lang="scss" scoped></style>
