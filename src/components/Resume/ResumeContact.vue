<script setup lang="ts">
import { ref, Ref } from "vue";

import InputTag from "@/components/Input/InputTag.vue";
import IconSelector from "@/components/UI/IconSelector.vue";

interface Contact {
  icon: string;
  value: string;
}

const icons = ["phone", "envelope", "map-marker", "github"];

const contacts: Ref<Contact[]> = ref([
  { icon: "phone", value: "phone" },
  { icon: "envelope", value: "email" },
  { icon: "github", value: "link" },
  { icon: "", value: "empty icon" },
]);

const addContact = () => {
  contacts.value.push({ icon: "phone", value: "" });
};
const removeContact = (contactIndex: number) => {
  contacts.value = contacts.value.filter((_, index) => index !== contactIndex);
};
</script>

<template>
  <div class="flex items-center justify-center flex-wrap">
    <div
      v-for="(contact, index) in contacts"
      :key="index"
      class="flex items-center justify-around mb-2 w-1/3"
    >
      <div class="print:ml-2">
        <icon-selector v-model="contact.icon" :icons="icons" />
      </div>
      <input-tag v-model="contact.value" class="min-w-full print:text-center" />
      <button
        class="action btn btn-active btn-primary btn-xs print:opacity-0"
        @click="removeContact(index)"
      >
        <unicon name="multiply" class="text-xs" fill="white"></unicon>
      </button>
    </div>
    <div class="flex items-center mb-2 action print:hidden">
      <button class="btn btn-primary btn-xs" @click="addContact">
        <unicon name="plus" fill="white"></unicon>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
