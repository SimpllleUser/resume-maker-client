<template>
    <div class="flex justify-around items-start">
        <div class="mx-auto b-template-details-w text-center">
            <slot name="details" />
        </div>
        <div class="pl-4 b-template-description-w">
            <slot name="description" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>