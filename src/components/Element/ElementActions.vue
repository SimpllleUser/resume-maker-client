<script setup lang="ts">
interface Emits {
  (event: "remove"): void;
}

const emit = defineEmits<Emits>();

const handleRemove = () => {
  emit("remove");
};
</script>

<template>
  <div class="flex">
    <button class="btn btn-sm btn-primary btn-wide" @click="handleRemove">
      Remove
    </button>
  </div>
</template>

<style scoped></style>
