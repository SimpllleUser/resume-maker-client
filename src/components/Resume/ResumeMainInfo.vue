<script setup lang="ts">
import { Ref, ref } from "vue";

import InputTag from "@/components/Input/InputTag.vue";
import FocusContainer from "@/components/FocusContainer.vue";
import ResumeContact from "@/components/Resume/ResumeContact.vue";
import ResumePhoto from "@/components/Resume/ResumePhoto.vue";

import { MainResumeVModel } from "@/types/data-managment.types";
import { useVModel } from "@vueuse/core";

interface Props {
  modelValue: MainResumeVModel;
}

interface Emits {
  (event: "update:modelValue", payload: Props): void;
  (event: "add"): void;
  (event: "remove", payload: number): void;
}

interface TemplateClasses {
  contacts: { [key: string]: boolean };
  photo: { [key: string]: boolean };
}

const img: Ref<string> = ref("");

  const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<Emits>();
const data = useVModel(props, "modelValue", emit);

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
          <input-tag v-model="data.fullName" class="text-2xl font-bold" />
          <input-tag v-model="data.position" class="text-xl" />
        </div>
        <div :class="{ 'action-hide': !focus }">
          <resume-contact v-model="data.contacts" />
        </div>
      </div>
      <div :class="getTemplateClasses().photo">
        <resume-photo v-model="data.img" label="update-photo">
          <template #img>
            <div v-show="data.img" class="w-auto h-36 border flex align-baseline content-center object-cover">
              <img :src="data.img" alt="user-photo" />
            </div>
          </template>
          <template #button-actions="{ update, remove }">
            <div class="flex justify-center" :class="{
              hidden: !focus,
            }">
              <button class="btn btn-accent btn-sm absolute transform top-0 right-0" :class="{ 'right-12': data.img }"
                @click="update()">
                <unicon v-show="!data.img" name="camera-plus" fill="white"></unicon>
                <unicon v-show="data.img" name="camera-change" fill="white"></unicon>
              </button>
              <button v-show="data.img" class="btn btn-accent btn-sm absolute transform top-0 right-0" @click="remove()">
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