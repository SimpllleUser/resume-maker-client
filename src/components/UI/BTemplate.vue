<template>
    <div class="flex justify-around items-start">
        <div class="mx-auto w-80 text-center">
            <slot name="details" />
        </div>
        <div>
            <slot name="description" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>