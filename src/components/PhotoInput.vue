<template>
  <div class="photo-input">
    <div class="mb-2">
      <my-upload
        v-if="show"
        field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        v-model="show"
        :width="250"
        :height="250"
        :params="params"
        :headers="headers"
        img-format="png"
        langType="ru"
      ></my-upload>
      <img v-show="imgDataUrl" :src="imgDataUrl" alt="photo" />
    </div>
    <div>
      <b-button variant="primary" @click="toggleShow">Select photo</b-button>
      <b-button
      v-show="imgDataUrl"
      @click="resetPhoto"
      variant="outline-danger"
      class="btn-delete"
    >
      <b-icon icon="trash" variant="danger" />
    </b-button>
    </div>
  </div>
</template>

<script>
import myUpload from 'vue-image-crop-upload';
import formMixin from '@/mixins/form';

export default {
  name: 'PhotoInput',
  components: {
    'my-upload': myUpload,
  },
  mixins: [formMixin],
  data() {
    return {
      show: false,
      params: {
        token: '123456798',
        name: 'avatar',
      },
      headers: {
        smail: '*_~',
      },
      imgDataUrl: '',
      properties: ['imgDataUrl'],
    };
  },
  watch: {
    imgDataUrl() {
      this.updateInputValue();
    },
  },
  methods: {
    activateFocus() {
      this.$emit('on-focus');
    },
    toggleShow() {
      this.show = true;
    },
    resetPhoto() {
      this.show = false;
      this.imgDataUrl = null;
    },
    cropSuccess(imgDataUrl) {
      console.log('-------- crop success --------');
      this.imgDataUrl = imgDataUrl;
      this.activateFocus();
      this.show = false;
      this.activateFocus();
    },

    cropUploadSuccess(jsonData, field) {
      console.log('-------- upload success --------');
      console.log(jsonData);
      console.log(`field: ${field}`);
      this.activateFocus();
      this.show = false;
      this.activateFocus();
    },

    cropUploadFail(status, field) {
      console.log('-------- upload fail --------');
      console.log(status);
      console.log(`field: ${field}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
