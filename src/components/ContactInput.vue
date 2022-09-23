<template>
  <div class="conatct-input">
    <b-row>
      <b-col cols="4" v-for="(contact, index) in contacts" :key="index">
        <div class="d-flex align-items-center">
          <div class="contatc-icon">
            <b-dropdown id="dropdown-1" no-caret size="sm" :ref="getDropDownRefName(index)">
              <template #button-content>
                <b-icon
                  :icon="contacts[index].icon"
                  font-scale="1.5rem"
                  :id="`icon-selector-${index}`"
                />
              </template>
              <b-dropdown-form>
                <b-button
                v-for="icon in icons"
                 :key="icon"
                  variant="outline-dark"
                  @click="
                  () => {
                    contacts[index].icon = icon;
                    hideDropDowm(`icon-selector-${index}`);
                    updateInputValue();
                  }
                "
                  >
                  <b-icon
                    :icon="icon"
                    font-scale="1.5rem"
                  />
                </b-button>
              </b-dropdown-form>
            </b-dropdown>
            <!-- <b-tooltip :target="`icon-selector-${index}`" triggers="hover" variant="primary">
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
            </b-tooltip> -->
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
      this.contacts = [...(this.contacts || []), JSON.parse(JSON.stringify(defaultConatctItem))];
    },
    deleteConatct(key) {
      this.contacts = this.contacts?.filter((_, index) => index !== key) || [];
      this.onFocus();
    },
    getDropDownRefName(index) {
      return `icon-selector-${index}`;
    },
    hideDropDowm(refName) {
      this.$refs[`${refName}`].at(0).hide();
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
