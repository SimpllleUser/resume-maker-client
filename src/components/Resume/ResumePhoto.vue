<script setup lang="ts">
import { useToggle, useVModel } from '@vueuse/core';
import { computed, onMounted, Ref, ref, useSlots } from 'vue';
import myUpload from 'vue-image-crop-upload';

interface Props {
	label: string;
	modelValue: string
}

const slots = useSlots()

const props = withDefaults(defineProps<Props>(), {
  label: 'update',
});

const emit = defineEmits(['update:modelValue']);
const imgDataUrl = useVModel(props, 'modelValue', emit)

const params = ref({
	token: '123456798',
	name: 'avatar'
});
// const imgDataUrl: Ref<string | undefined> = ref('');

const [showPhotoUpdateModal, togglePhotoUpdate] = useToggle();

const cropSuccess = (imgValue: string | undefined, field: any) => {
	imgDataUrl.value = imgValue || '';
};

const existImageSlot = computed(() => slots.img);
const existButtonUpdateImgSlot = computed(() => slots['button-actions']);
const setPhotoData = (data) => {
	imgDataUrl.value = data;
};
const removePhoto = () => setPhotoData('');
</script>

<template>
	<my-upload field="img" v-model="showPhotoUpdateModal" :params="params" langType="eng" @crop-success="cropSuccess"
		img-format="png"></my-upload>
	<img v-show="!existImageSlot" :src="imgDataUrl">
	<button 
	v-show="!existButtonUpdateImgSlot"
	 class="btn btn-primary btn-sm"
	@click="togglePhotoUpdate()">{{ props.label }}</button>
	<slot name="img" :img="imgDataUrl"></slot>
	<slot name="button-actions"
	 :update="togglePhotoUpdate"
	 :remove="removePhoto"
	 ></slot>
</template>

<style scoped></style>