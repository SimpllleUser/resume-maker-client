<script setup lang="ts">
import { computed, ComputedRef, Ref, ref, useSlots } from "vue";

import { useToggle, useVModel } from "@vueuse/core";

import myUpload from "vue-image-crop-upload";

interface Props {
  label?: string;
  modelValue: string;
}

interface Emits {
  (event: "update:modelValue", payload: string): void;
}

interface PhotoUploadParams {
  token: string;
  name: string;
}

const slots = useSlots();

const props = withDefaults(defineProps<Props>(), {
  label: "update",
});

const emit = defineEmits<Emits>();
const imgDataUrl = useVModel(props, "modelValue", emit);

const params: Ref<PhotoUploadParams> = ref({
  token: "123456798",
  name: "avatar",
});

const [showPhotoUpdateModal, togglePhotoUpdate] = useToggle();

const cropSuccess = (imgValue: string | undefined): void => {
  imgDataUrl.value = imgValue || "";
};

const existImageSlot: ComputedRef<boolean> = computed(() => Boolean(slots.img));
const existButtonUpdateImgSlot: ComputedRef<boolean> = computed(() =>
  Boolean(slots["button-actions"])
);
const setPhotoData = (data: string): void => {
  imgDataUrl.value = data;
};
</script>

<template>
  <my-upload
    field="img"
    v-model="showPhotoUpdateModal"
    :params="params"
    langType="eng"
    @crop-success="cropSuccess"
    img-format="png"
  ></my-upload>
  <img v-show="!existImageSlot" :src="imgDataUrl" />
  <button
    v-show="!existButtonUpdateImgSlot"
    class="btn btn-primary btn-sm"
    @click="togglePhotoUpdate()"
  >
    {{ props.label }}
  </button>
  <slot name="img" :img="imgDataUrl"></slot>
  <slot
    name="button-actions"
    :update="togglePhotoUpdate"
    :remove="setPhotoData('')"
  ></slot>
</template>

<style scoped></style>