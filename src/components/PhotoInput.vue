<template>
  <div class="photo-input position-relative">
    <div class="mb-2">
      <label for="image-upload" v-show="false">
        <input ref="FileInput" type="file" id="image-upload" @change="onFileSelect"/>
      </label>
      <div style="height: 200px; width: 200px;" >
        <VueCropper
        v-show="!updateCropImg"
        ref="cropper"
        :src="imgDataUrl"
        alt="Source Image" />
        <img v-show="updateCropImg" :src="cropedImage" alt="photo" :height="190" />

        <b-button
        v-show="!updateCropImg && updateImg"
        variant="primary" size="sm" @click="saveImage">
          set
        </b-button>
      </div>
    </div>
    <div  class="position-absolute border border-danger">
      <b-button variant="primary" size="sm" @click="updatePhoto">
        <b-icon icon="camera-fill" aria-hidden="true"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
// import myUpload from 'vue-image-crop-upload';
import formMixin from '@/mixins/form';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  name: 'PhotoInput',
  components: {
    VueCropper,
  },
  mixins: [formMixin],
  data() {
    return {
      updateImg: false,
      updateCropImg: false,
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
      /// /
      mime_type: '',
      cropedImage: '',
      autoCrop: false,
      selectedFile: '',
      image: '',
      dialog: false,
      files: '',
    };
  },
  watch: {
    imgDataUrl() {
      this.updateInputValue();
    },
    // cropedImage() {
    //   this.updateCropImg = true;
    // },
  },
  methods: {
    updatePhoto() {
      this.$refs.FileInput.click();
    },
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
    saveImage() {
      this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.updateCropImg = true;
    },
    onFileSelect(e) {
      const file = e.target.files[0];
      this.mime_type = file.type;
      if (typeof FileReader === 'function') {
        this.dialog = true;
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgDataUrl = event.target.result;
          this.$refs.cropper.replace(this.imgDataUrl);
          this.updateImg = true;
          this.updateCropImg = false;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
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
  transition: opacity 0.3s;
}
</style>
