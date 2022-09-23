<template>
  <div class="conatct-input">
    <b-row class="d-flex align-items-center flex-wrap">
      <b-col v-for="(contact, index) in contacts" :key="index">
        <div class="d-flex align-items-center">
          <div class="contatc-icon">
            <b-icon
              :icon="contacts[index].icon"
              font-scale="1.5rem"
              :id="`icon-selector-${index}`"
            />
            <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item >Active action</b-dropdown-item>
              <b-dropdown-item >Disabled action</b-dropdown-item>
            </b-dropdown>
            <b-tooltip :target="`icon-selector-${index}`" triggers="hover" variant="primary">
              <b-icon
                v-for="icon in icons"
                :key="icon"
                :icon="icon"
                font-scale="2rem"
                @click="
                  () => {
                    contacts[index].icon = icon;
                    updateInputValue();
                  }
                "
              />
            </b-tooltip>
          </div>
          <div class="contatc-input">
            <b-form-input
            v-model="contacts[index].value"
             @change="updateInputValue"
             placeholder="Your contact"
             />
          </div>
          <div>
            <b-icon icon="trash-fill" @click="deleteConatct(index)" />
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="d-flex align-item-center">
          <b-button size="sm" variant="dark-outline" @click="addConatct">
            add <b-icon icon="plus-lg" />
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import formMixin from '@/mixins/form';

const defaultConatctItem = { icon: 'phone', value: '' };

export default {
  name: 'ConatactInput',
  mixins: [formMixin],
  data() {
    return {
      icons: ['phone', 'mailbox', 'geo-alt-fill', 'github'],
      contacts: [JSON.parse(JSON.stringify(defaultConatctItem))],
      properties: ['contacts'],
      focus: false,
    };
  },
  methods: {
    addConatct() {
      this.contacts = [...this.contacts, JSON.parse(JSON.stringify(defaultConatctItem))];
    },
    deleteConatct(key) {
      this.contacts = this.contacts.filter((_, index) => index !== key);
      this.onFocus();
    },
  },
  watch: {
    contacts() {
      this.updateInputValue();
    },
  },
};
</script>

<style></style>
