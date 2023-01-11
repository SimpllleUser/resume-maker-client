<template>
  <div class="conatct-input">
    <b-row>
      <b-col cols="4" v-for="(contact, index) in valueTest" :key="index">
        <div class="d-flex align-items-center justify-content-center">
          <div class="contatc-icon">
            <b-icon
              :icon="valueTest[index].icon"
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
              v-model="valueTest[index].value"
              @focus-input="focusHandler"
              placeholderValue="Your contact"
              style="min-width: 150px"
            />
          </div>
          <div v-show="showNavigation">
            <b-icon icon="trash-fill" @click="deleteConatct(index)" />
          </div>
        </div>
      </b-col>
      <b-col v-show="showNavigation">
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
import inputMixin from '@/mixins/input';

export default {
  name: 'ConatactInput',
  components: { TagEditable },
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
      valueTest: null,
    };
  },
  methods: {
    focusHandler() {
      this.$emit('focus-input');
    },
    addConatct() {
      this.valueTest = [
        ...(this.valueTest || this.defaultInputValueInForm),
        this.defaultInputItemValue,
      ];
    },
    deleteConatct(key) {
      this.valueTest = this.valueTest?.filter((_, index) => index !== key) || [];
      this.onFocus();
    },
    getDropDownRefName(index) {
      return `icon-selector-${index}`;
    },
    hideDropDowm(refName) {
      this.$refs[`${refName}`].at(0).hide();
    },
    selectHandleIcon(icon, index) {
      this.valueTest[index].icon = icon;
    },
  },
};
</script>

<style></style>
