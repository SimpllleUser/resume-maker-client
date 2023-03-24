<script setup lang="ts">
import { ComputedRef, Ref, ref } from "vue";

import InputTag from "@/components/Input/InputTag.vue";
import FocusContainer from "@/components/FocusContainer.vue";

import ResumeContact from "@/components/Resume/ResumeContact.vue";
import ResumePhoto from "@/components/Resume/ResumePhoto.vue";

interface TemplateClasses {
  contacts: { [key: string]: boolean };
  photo: { [key: string]: boolean };
}

const fullName: Ref<string> = ref("User full name");
const position: Ref<string> = ref("User position");
const img: Ref<string> = ref("");

const getTemplateClasses = (): TemplateClasses => {
  const existImageOrFocus: boolean = Boolean(img.value?.length);
  return {
    contacts: {
      "w-4/5": existImageOrFocus,
      "w-full": !existImageOrFocus,
    },
    photo: {
      "w-1/5 pl-2 flex items-center justify-center": existImageOrFocus,
    },
  };
};
</script>

<template>
  <focus-container #default="{ focus }">
    <div class="flex items-center relative">
      <div :class="getTemplateClasses().contacts">
        <div class="text-center" tabindex="0">
          <input-tag v-model="fullName" class="text-2xl font-bold" />
          <input-tag v-model="position" class="text-xl" />
        </div>
        <div :class="{ 'action-hide': !focus }">
          <resume-contact />
        </div>
      </div>
      <div :class="getTemplateClasses().photo">
        <resume-photo v-model="img" label="update-photo">
          <template #img="{ img }">
            <div
              v-show="img"
              class="w-auto h-36 border flex align-baseline content-center object-cover"
            >
              <img :src="img" alt="user-photo" />
            </div>
          </template>
          <template #button-actions="{ update, remove }">
            <div
              class="flex justify-center"
              :class="{
                hidden: !focus,
              }"
            >
              <button
                class="btn btn-accent btn-sm absolute transform top-0 right-0"
                :class="{ 'right-12': img }"
                @click="update()"
              >
                <unicon v-show="!img" name="camera-plus" fill="white"></unicon>
                <unicon v-show="img" name="camera-change" fill="white"></unicon>
              </button>
              <button
                v-show="img"
                class="btn btn-accent btn-sm absolute transform top-0 right-0"
                @click="remove()"
              >
                <unicon name="camera-slash" fill="white"></unicon>
              </button>
            </div>
          </template>
        </resume-photo>
      </div>
    </div>
  </focus-container>
</template>

<style lang="scss" scoped></style>