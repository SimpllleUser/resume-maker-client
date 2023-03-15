
<script setup lang="ts">
import { ref, Ref, watch } from 'vue';

import InputTag from '../Input/InputTag.vue';
import IconSelector from '../UI/IconSelector.vue';
import FocusContainer from '../FocusContainer.vue';

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

</script>

<template>
    <focus-container>
    <div class="grid grid-cols-4 hover:border-red-600">
        <div v-for="(contact, index) in contacts" :key="index" class="flex items-center justify-around mb-2">
            <div class="print:ml-4">
                <icon-selector v-model="contact.icon" :icons="icons" />
            </div>
            <input-tag v-model="contact.value" class="min-w-full" />
            <button class="btn btn-active btn-primary btn-xs print:hidden" @click="removeContact(index)">
                <unicon name="multiply" class="text-xs" fill="white"></unicon>
            </button>
        </div>
        <div class="print:hidden">
            <button class="btn btn-primary btn-xs" @click="addContact">
                <unicon name="plus" class="text-xs" fill="white"></unicon>
            </button>
        </div>
    </div>
</focus-container>
</template>

<style scoped></style>