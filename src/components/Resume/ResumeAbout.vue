<script setup lang="ts">
import { computed, Ref, ref } from 'vue';

import InputTag from '@/components/Input/InputTag.vue';
import BTemplate from '@/components/UI/BTemplate.vue';
import { useVModel } from '@vueuse/core';

interface AboutVModel {
    about: string;
    description: string;
};

interface Props {
    modelValue: AboutVModel;
}

interface Emits {
    (event: "update:modelValue", payload: Props): void;
}

const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

</script>

<template>
    <b-template>
        <template #details>
            <input-tag v-model="data.description" />
        </template>
        <template #description>
            <input-tag v-model="data.about" />
        </template>
    </b-template>
</template>

<style scoped></style>