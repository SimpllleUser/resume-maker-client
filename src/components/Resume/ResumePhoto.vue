<script setup lang="ts">
import { Ref, ref } from 'vue';
import myUpload from 'vue-image-crop-upload';

const show = ref(true);
const params = ref({
				token: '123456798',
				name: 'avatar'
			});
const imgDataUrl: Ref<string | undefined> = ref('');


const toggleShow = () => { show.value = !show.value };
const cropSuccess = (imgValue: string | undefined, field: any) => {
				imgDataUrl.value = imgValue;
			};
</script>

<template>
<a class="btn" @click="toggleShow">set avatar</a>
	<my-upload field="img"
        @crop-success="cropSuccess"
        v-model="show"
		:width="300"
		:height="300"
		url="/upload"
		:params="params"
        langType="eng"
		img-format="png"></my-upload>
	<img :src="imgDataUrl">
</template>

<style scoped>

</style>