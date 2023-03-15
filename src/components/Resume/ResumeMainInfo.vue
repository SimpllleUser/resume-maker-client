<script setup lang="ts">
import { computed, ref } from 'vue';
import InputTag from '../Input/InputTag.vue';
import ResumeContact from './ResumeContact.vue';
import ResumePhoto from './ResumePhoto.vue';
import FocusContainer from '../FocusContainer.vue';

const fullName = ref('User full name');
const position = ref('User position');
const img = ref('');

const getTemplateClasses = (focus: boolean) => {
    const existImageOrFocus = img.value?.length || focus;
    return {
        contacts: {
            'w-4/5': existImageOrFocus,
            'w-full': !existImageOrFocus
        },
        photo: {
            'w-1/5': existImageOrFocus,
            'hidden': !existImageOrFocus
        }
    }
}

</script>

<template>
    <focus-container #default="{ focus }">
    <div class="flex items-center">
        <div :class="getTemplateClasses(focus).contacts">
                <div class="text-center" tabindex="0">
                    <input-tag v-model="fullName" class="text-2xl font-bold" />
                    <input-tag v-model="position" class="text-xl" />
                </div>
                <resume-contact />
            </div>
            <div :class="getTemplateClasses(focus).photo">
                <resume-photo v-model="img" label="update-photo">
                    <template #img="{ img }">
                        <div v-show="img" class="w-auto h-36 border flex align-baseline content-center object-cover">
                            <img :src="img" alt="user-photo" />
                        </div>
                    </template>
                    <template #button-update-image="{ update }">
                        <div class="flex justify-center" :class="{
                            'hidden': !focus,
                        }">
                            <button class="btn btn-primary btn-sm" @click="update()">update</button>
                        </div>
                    </template>
                </resume-photo>
            </div>
        </div>
    </focus-container>
    <!-- <div>
                <resume-skills/>
            </div> -->
</template>

<style lang="scss" scoped></style>