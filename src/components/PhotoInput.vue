<template>
  <div
  class="photo-input position-relative">
    <div class="mb-2">
      <my-upload
        v-if="show" field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
         :width="190"
          :height="190" :params="params" :headers="headers" img-format="png" langType="ru" />
      <div v-if="imgDataUrl" class="position-relative">
        <img :src="imgDataUrl" alt="photo" :width="190" :height="190" />
        <b-button
         size="sm"
          @click="resetPhoto"
            variant="outline-danger"
            class="delete-photo-btn position-absolute"
            style="top: -15px;
           right: -15px;">
          <b-icon icon="trash" />
        </b-button>
      </div>
    </div>
    <div
    v-if="!imgDataUrl"
    class="position-absolute border border-danger">
      <b-button variant="primary" size="sm" @click="toggleShow">
        <b-icon icon="camera-fill" aria-hidden="true"></b-icon>
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

<style lang="scss" scoped>
.photo-input:hover {
    .delete-photo-btn {
      opacity: 1;
  }
}

.delete-photo-btn {
  opacity: 0;
  transition: opacity .3s;
}
</style>
