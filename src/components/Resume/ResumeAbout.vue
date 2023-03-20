<script setup lang="ts">
import { Ref, ref } from 'vue';
import InputTag from '../Input/InputTag.vue';

const testText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make 
      a type specimen book. It has survived not only five centuries,
       but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum`;
const about: Ref<string> = ref(testText)
const description: Ref<string> = ref('Description')
</script>

<template>
    <div class="flex justify-around items-start">
        <div>
            <input-tag v-model="description" />
        </div>
        <div>
            <input-tag v-model="about" />
        </div>
    </div>
</template>

<style scoped></style>