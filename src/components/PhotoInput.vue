<template>
  <div class="photo-input position-relative">
    <b-button size="sm" @click="togglePhoto" v-show="showNavigation">
    <div class="d-flex">
        <b-icon :icon="`${  showPhotoInput ? 'x-circle' : 'plus-circle'}`"></b-icon>
    </div>
    </b-button>
    <div v-show="showPhotoInput">
    <div class="mb-2">
      <label for="image-upload" v-show="false">
        <input ref="FileInput" type="file" id="image-upload" @change="onFileSelect" />
      </label>
      <div :style="style">
        <VueCropper
          v-show="!updatedCropImg"
          :style="style"
          ref="cropper"
          :src="imgDataUrl"
          alt="Source Image"
        />
        <img
          v-show="updatedCropImg"
          :src="cropedImage"
          alt="photo"
          :height="190"
          style="max-width: 200px"
        />
        <b-button v-show="!updatedCropImg" variant="primary" size="sm" @click="setImage">
          <b-icon icon="check-lg"></b-icon>
        </b-button>
      </div>
    </div>
    <div class="add-photo position-absolute" v-show="showNavigation">
      <b-button variant="primary" size="sm" @click="updatePhoto">
        <b-icon icon="arrow-clockwise" aria-hidden="true"></b-icon>
      </b-button>
      <b-button @click="resetPhoto" variant="primary" size="sm">
        <b-icon icon="trash" aria-hidden="true"></b-icon>
      </b-button>
    </div>
  </div>
  </div>
</template>

<script>
import formMixin from '@/mixins/form';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

import defaultImg from '@/assets/img/default.png';

export default {
  name: 'PhotoInput',
  components: {
    VueCropper,
  },
  mixins: [formMixin],
  data() {
    return {
      showPhotoInput: false,
      defaultImg,
      updateImg: false,
      updatedCropImg: true,
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
      mime_type: '',
      cropedImage: '',
    };
  },
  computed: {
    boxStyle() {
      return this.showNavigation ? 'height: 200px; width: 200px;' : '';
    },
    style() {
      return `${this.boxStyle}`;
    },
  },
  watch: {
    showNavigation() {
      this.setImage();
    },
    showPhotoInput: {
      immediate: true,
      handler: 'showPhotoInputHandler',
    },
  },
  methods: {
    showPhotoInputHandler(state) {
      this.$emit('can-show', state);
    },
    togglePhoto() {
      this.showPhotoInput = !this.showPhotoInput;
    },
    resetPhoto() {
      this.imgDataUrl = this.defaultImg;
      this.$refs.cropper.replace(this.imgDataUrl);
      setTimeout(() => this.setImage(), 100);
      this.updatedCropImg = true;
    },
    updatePhoto() {
      this.$refs.FileInput.click();
    },
    activateFocus() {
      this.$emit('on-focus');
    },
    setImage() {
      this.cropedImage = this.$refs.cropper.getCroppedCanvas()?.toDataURL();
      this.updatedCropImg = true;
    },
    onFileSelect(e) {
      const file = e.target.files[0];
      this.mime_type = file.type;
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgDataUrl = event.target.result;
          this.$refs.cropper.replace(this.imgDataUrl);
          this.updatedCropImg = false;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
  },
  mounted() {
    this.imgDataUrl = this.defaultImg;
    this.$refs.cropper.replace(this.imgDataUrl);
    setTimeout(() => this.setImage(), 100);
  },
};
</script>

<style lang="scss" scoped>
.photo-input {
  &:hover {
    .delete-photo-btn {
      opacity: 1;
    }
  }
}

.delete-photo-btn {
  opacity: 0;
  transition: opacity 0.3s;
}

.add-photo {
  top: 0px;
  right: 0px;
}
</style>
