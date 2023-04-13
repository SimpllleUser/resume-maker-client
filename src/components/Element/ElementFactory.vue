

<script setup lang="ts">
import { CurrenntResumeElement } from "@/types/data-managment.types";

type Props = {
    resumeElement: CurrenntResumeElement
}
const props = defineProps<Props>();

</script>

<template>
    <div>
        <component :is="props.resumeElement.component" />
    </div>
</template>

<style scoped></style>