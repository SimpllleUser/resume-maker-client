<template>
  <div class="photo-input position-relative">
    <div class="d-flex justify-content-between">
      <div class="add-photo" v-show="showNavigation && inputValue.show">
        <b-button size="sm" variant="accent" @click="setOriginal()">
          <b-icon icon="arrow-clockwise" />
        </b-button>
        <b-button variant="primary" size="sm" @click="updatePhoto">
          <b-icon icon="upload" aria-hidden="true"></b-icon>
        </b-button>
        <b-button @click="resetPhoto" variant="primary" size="sm">
          <b-icon icon="trash" aria-hidden="true"></b-icon>
        </b-button>
      </div>
      <div>
        <b-button variant="outline-dark" size="sm" @click="togglePhoto" v-show="showNavigation">
          <b-icon :icon="`${inputValue.show ? 'x-circle' : 'plus-circle'}`"></b-icon>
        </b-button>
      </div>
    </div>
    <div v-show="inputValue.show">
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
            :src="inputValue.img"
            alt="photo"
            :height="190"
            style="max-width: 200px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inputMixin from '@/mixins/input';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

import defaultInputValueInForm from '@/assets/img/default.png';

const ZOOM_VALUE = -0.2;

export default {
  name: 'PhotoInput',
  components: {
    VueCropper,
  },
  mixins: [inputMixin],
  data() {
    return {
      original: '',
      showPhotoInput: false,
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
      mimeType: '',
      inputValue: { img: '', show: true },
      inputType: 'photo',
      zoomValue: -0.5,
      defaultInputValueInForm,
    };
  },
  computed: {
    boxStyle() {
      return this.showNavigation ? 'height: 160px; width: 160px;' : '';
    },
    style() {
      return `${this.boxStyle}`;
    },
    showPhoto() {
      return this.inputValue.show;
    },
  },
  watch: {
    showPhoto: {
      immediate: true,
      handler: 'showPhotoInputHandler',
    },
    showNavigation: {
      immediate: true,
      handler: 'showNavigationHandle',
    },
  },
  methods: {
    setvalueTestImg(img) {
      if (!img) return;
      this.inputValue = { ...this.inputValue, img };
    },
    showPhotoInputHandler(state) {
      if (state && !this.inputValue.img) this.resetPhoto();
      this.$emit('can-show', state);
    },
    togglePhoto() {
      this.inputValue = { ...this.inputValue, show: !this.inputValue?.show };
    },
    resetPhoto() {
      this.imgDataUrl = this.defaultInputValueInForm;
      this.$refs.cropper.replace(this.defaultInputValueInForm);
      this.setImage();
      this.setvalueTestImg(this.defaultInputValueInForm);
      this.updatedCropImg = true;
      this.$emit('can-show', true);
    },
    updatePhoto() {
      this.$refs.FileInput.click();
    },
    activateFocus() {
      this.$emit('on-focus');
    },
    setImage() {
      this.setvalueTestImg(this.$refs?.cropper?.getCroppedCanvas()?.toDataURL());
      this.updatedCropImg = true;
    },
    onFileSelect(e) {
      const file = e.target.files[0];
      this.mimeType = file.type;
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgDataUrl = event.target.result;
          this.original = this.imgDataUrl;
          this.$refs.cropper.replace(this.imgDataUrl);
          this.updatedCropImg = false;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    showNavigationHandle(state) {
      this.updatedCropImg = !state;
      try {
        this.$refs?.cropper?.relativeZoom(ZOOM_VALUE, 0);
      } catch (e) {
        console.log(e);
      }
      if (!state) {
        this.setImage();
        return;
      }
      this.imgDataUrl = this.inputValue?.img;
      this.$refs.cropper.replace(this.imgDataUrl);
    },
    setOriginal() {
      this.imgDataUrl = this.inputValue.img;
      this.updatedCropImg = false;
      this.$refs.cropper.replace(this.imgDataUrl);
    },
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
