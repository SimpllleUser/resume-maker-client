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
  <div class="flex p-1 bg-white">
    <button class="btn btn-sm btn-outline btn-warning btn-wide" @click="handleRemove">
      <span class="text-black">Remove</span>
    </button>
  </div>
</template>

<style scoped></style>
