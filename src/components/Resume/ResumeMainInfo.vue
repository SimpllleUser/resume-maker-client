<script setup lang="ts">
import { ref } from 'vue';
import InputTag from '../Input/InputTag.vue';
import ResumeContact from './ResumeContact.vue';
import ResumePhoto from './ResumePhoto.vue';

const fullName = ref('User full name');
const position = ref('User position');
const img = ref('');
</script>

<template>
    <div class="text-center" tabindex="0">
        <input-tag v-model="fullName" class="text-2xl font-bold"/>
        <input-tag v-model="position" class="text-xl"/>
    </div>
    <div class="flex">
        <div :class="{
            'w-4/5': img.length,
            'w-full': !img.length
        }">
        <resume-contact/>
    </div>
    <div :class="{
            'w-1/5': img.length,
            'w-1': !img.length,
        }">
            <resume-photo v-model="img" label="update-photo">
                <template #img="{ img }">
                   <div v-show="img"  class="w-auto h-36 border flex align-baseline content-center object-cover">
                    <img :src="img" alt="user-photo" />
                   </div>
                </template>
                <template #button-update-image="{ update }">
                    <button class="btn btn-primary btn-sm" @click="update()">update</button>
                </template>
                </resume-photo>
        </div>
    </div>
    <!-- <div>
        <resume-skills/>
    </div> -->
</template>

<style lang="scss" scoped>

</style>