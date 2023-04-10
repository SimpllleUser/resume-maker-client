<script setup lang="ts">
import { Ref, watch, ref } from "vue";

import { useResumeElements } from "@/store/resume-elements";
import { Option } from "@/common/types";

const resumeElementsStore = useResumeElements();

const font: Ref<Option> = ref(resumeElementsStore?.font);

watch(font, resumeElementsStore.setFont, { deep: true })

</script>

<template>
    <div>
        <select className="select select-bordered w-full max-w-xs" v-model="font">
            <option v-for="font in resumeElementsStore.fonts" :key="font.value" :value="font">{{ font.label }}</option>
        </select>
    </div>
</template>

<style scoped></style>