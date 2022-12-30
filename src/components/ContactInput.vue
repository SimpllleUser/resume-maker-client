<template>
  <div class="conatct-input">
    <b-row>
      <b-col cols="4" v-for="(contact, index) in contacts" :key="index">
        <div class="d-flex align-items-center justify-content-center">
          <div class="contatc-icon">
            <b-icon
              :icon="contacts[index].icon"
              font-scale="1.5rem"
              :id="`icon-selector-${index}`"
            />
            <b-tooltip :target="`icon-selector-${index}`" triggers="hover" variant="dark">
              <b-icon
                v-for="icon in icons"
                :key="icon"
                :icon="icon"
                font-scale="2rem"
                @click="selectHandleIcon(icon, index)"
              />
            </b-tooltip>
          </div>
          <div class="contatc-input">
            <tag-editable
              tagType="div"
              v-model="contacts[index].value"
              @change="updateInputValue"
              @focus-input="focusHandler"
              placeholderValue="Your contact"
              style="min-width: 150px"
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
import TagEditable from '@/components/TagEditable.vue';
import formMixin from '@/mixins/form';

const defaultConatctItem = { icon: 'phone', value: '' };

export default {
  name: 'ConatactInput',
  components: { TagEditable },
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
    focusHandler() {
      this.$emit('focus-input');
    },
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
    selectHandleIcon(icon, index) {
      this.contacts[index].icon = icon;
      this.updateInputValue();
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
