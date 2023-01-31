<template>
  <div class="conatct-input d-flex justify-content-center">
    <b-row>
      <b-col cols="4" v-for="(contact, index) in inputValue" :key="index" class="d-flex">
        <div class="d-flex align-items-center">
          <div class="contatc-icon">
            <v-popup
              @focus="focusHandler"
              body-class="border border-dark border rounded"
              body-style="width: 6rem !important; padding: 5px !important;"
            >
              <template #title>
                <b-icon
                :class="currentColor.class"
                  :icon="inputValue[index].icon"
                  font-scale="1.5rem"
                  :style="`color: ${currentColor.style}`"
                />
              </template>
              <template #body>
                <div class="d-flex bg-light d-flex justify-content-between flex-wrap">
                  <div v-for="icon in icons" :key="icon" class="border" style="cursor: pointer">
                    <b-button squared variant="outline-dark" size="sm">
                      <b-icon
                        :icon="icon"
                        font-scale="1.5rem"
                        @click="selectHandleIcon(icon, index)"
                      />
                    </b-button>
                  </div>
                </div>
              </template>
            </v-popup>
          </div>
          <div class="contatc-input" style="margin-left: 10px">
            <tag-editable
              tagType="div"
              v-model="inputValue[index].value"
              @focus-input="focusHandler"
              placeholderValue="constact"
              style="min-width: 150px"
              :disabelEnter="true"
              max-length="30"
            />
          </div>
          <div v-show="showNavigation">
            <b-button size="sm" variant="outline-dark" @click="deleteConatct(index)">
              <b-icon icon="trash-fill" />
            </b-button>
          </div>
        </div>
      </b-col>
      <b-col v-show="showNavigation">
        <div class="d-flex align-item-center">
          <b-button size="sm" variant="outline-dark" @click="addConatct">
            <b-icon icon="plus" />
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import TagEditable from '@/components/TagEditable.vue';
import inputMixin from '@/mixins/input';
import VPopup from '@/components/VPopup.vue';
import { cloneDeep } from 'lodash';

export default {
  name: 'ContactInput',
  components: { VPopup, TagEditable },
  mixins: [inputMixin],
  data() {
    return {
      icons: ['phone', 'mailbox', 'geo-alt-fill', 'github'],
      defaultInputItemValue: { icon: 'phone', value: '' },
      contacts: [this.defaultInputItemValue],
      properties: ['contacts'],
      focus: false,
      inputType: 'contacts',
      defaultInputValueInForm: [],
      inputValue: [],
    };
  },
  computed: {
    ...mapState('form', ['currentColor', 'currentFont']),
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addConatct() {
      this.inputValue = [...this.inputValue, cloneDeep(this.defaultInputItemValue)];
    },
    deleteConatct(key) {
      this.inputValue = this.inputValue?.filter((_, index) => index !== key) || [];
      this.onFocus();
    },
    getDropDownRefName(index) {
      return `icon-selector-${index}`;
    },
    hideDropDowm(refName) {
      this.$refs[`${refName}`].at(0).hide();
    },
    selectHandleIcon(icon, index) {
      this.inputValue[index].icon = icon;
      this.focusHandler();
    },
  },
};
</script>

<style></style>
