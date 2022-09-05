<template>
  <div class="conatct-input" tabindex="-1" @focus="onFocus" @blur="onBlur">
    <b-row class="d-flex align-items-center flex-wrap">
      <b-col v-for="(contact, index) in contacts" :key="index">
        <div class="d-flex align-items-center">
          <div class="contatc-icon">
            <b-icon
              :icon="contacts[index].icon"
              font-scale="1.5rem"
              :id="`icon-selector-${index}`"
            />
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
              @focus="onFocus"
              @blur="onBlur"
            />
          </div>
          <div>
            <b-icon icon="trash-fill" @click="deleteConatct(index)" />
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="d-flex align-item-center">
          <b-button size="sm" variant="dark-outline"
          @focus="onFocus" @blur="onBlur"
           @click="addConatct">
            add <b-icon icon="plus-lg" />
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import formMixin from '@/mixins/form';

const defaultConatctItem = { icon: 'phone', value: 'value conatct' };

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
    },
    onFocus() {
      this.$emit('on-focus');
    },
    onBlur() {
      this.$emit('on-blur');
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
