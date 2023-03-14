<script setup lang="ts">
import { ref } from 'vue';
import InputTag from '../Input/InputTag.vue';
import ResumeContact from './ResumeContact.vue';

const fullName = ref('User full name');
const position = ref('User position');
</script>

<template>
    <div class="text-center" tabindex="0">
        <input-tag v-model="fullName" class="text-2xl font-bold"/>
        <input-tag v-model="position" class="text-xl"/>
    </div>
    <div>
        <resume-contact/>
    </div>
    <!-- <div>
        <resume-skills/>
    </div> -->
</template>

<style lang="scss" scoped>

</style>