
<script setup lang="ts">
import { ref, Ref, watch } from 'vue';

import InputTag from '../Input/InputTag.vue';
import IconSelector from '../UI/IconSelector.vue';

import { useFocusWithin } from '@vueuse/core'

interface Contact {
    icon: string;
    value: string;
}

const icons = [
    'phone',
    'envelope',
    'map-marker',
    'github',
];

const contacts: Ref<Contact[]> = ref([
    { icon: 'phone', value: 'phone' },
    { icon: 'envelope', value: 'email' },
    { icon: 'github', value: 'link' },
    { icon: '', value: 'empty icon' },
]);

const addContact = () => {
    contacts.value.push({ icon: 'phone', value: '' });
};
const removeContact = (contactIndex: number) => {
    contacts.value = contacts.value.filter((_, index) => index !== contactIndex);
};

const setFocus = () => {console.log('FOCUS'); }


const target = ref();
const { focused } = useFocusWithin(target)

watch(focused, focused => {
  if (focused) console.log('Target contains the focused element')
  else console.log('Target does NOT contain the focused element')
})
</script>

<template>
    <div class="flex flex-wrap justify-around border-red-600" ref="target" @focus="setFocus" tabindex="-1">
        <div v-for="(contact, index) in contacts" :key="index" class="flex justify-around w-64 mb-2">
            <icon-selector v-model="contact.icon" :icons="icons" />
            <input-tag v-model="contact.value" class="min-w-full" />
            <button class="btn btn-active btn-primary btn-xs" @click="removeContact(index)">
                <unicon name="multiply" class="text-xs" fill="white"></unicon>
            </button>
        </div>
        <div class="flex justify-around w-64 mb-2">
            <button class="btn btn-primary btn-xs" @click="addContact">
                <unicon name="plus" class="text-xs" fill="white"></unicon>
            </button>
        </div>
    </div>
</template>

<style scoped></style>