<script setup lang="ts">
const defaultIcon = '',

const props = defineProps<{
  icons: string[];
  icon: string,
}>();
</script>

<template>
    <div>
        <div>
            <unicon name="multiply" class="text-xs" fill="white"></unicon>
        </div>
    </div>
</template>


<style scoped></style>