<script setup lang="ts">
import ResumeMainInfo from './Resume/ResumeMainInfo.vue';
import ResumeCalendar from './Resume/ResumeCalendar.vue';
import ResumePhoto from './Resume/ResumePhoto.vue';

</script>
<template>
    <div class="max-w-[990px] mx-auto border border-solid border-gray-300">
        <resume-main-info />
        <resume-calendar />
        <resume-photo />
        <h1 class="text-primary bg-dark-700">Main form</h1>
    </div>
</template>


<style lang="scss" scoped></style>