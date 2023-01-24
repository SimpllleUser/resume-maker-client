<template>
  <div class="main-form-page p-2 border shadow">
    <ul>
      <li>Изменить календарь on vue2-datepicker</li>
      <li>Сделать единый стиль для редактирования и отображения данных</li>
      <li>Подключение стилей без инета</li>
    </ul>
    <div class="d-flex justify-content-center">
      <div>
        <b-button @click="resetState()">Reset</b-button>
      </div>
      <div>
        <b-button @click="print"> Print </b-button>
      </div>
    </div>
    <div
    class="main-form"
     id="resume-form"
      :class="` ${existFocusOnInput && 'exist-focus'} font-${currentFont.value}`">
      <div style="margin: 0 auto; max-width: 990px;">
      <span v-html="`<style>${styleFormPrint}margin: 0 auto; max-width: 990px;</style>`" />
      <span v-html="includeFotns"></span>
      <div>
        <ContainerFocusItem name="main-info" :show-title="false">
          <template #main="{ actions, focus }">
            <div
            class="row justify-content-center row-cols-2 position-relative"
            >
              <div :class="`col-${ showPhotoInput ? '8' : 12}`">
                <div class="col">
                  <main-info-input-form
                  id="main-info"
                  :show-navigation="focus"
                  @focus-input="actions['main-info'].focus"
                  />
                </div>
                <div>
                  <ContactInput
                  id="contact-item-is-uniq"
                  :show-navigation="focus"
                  @focus-input="actions['main-info'].focus"
                  />
                </div>
              </div>
              <div
              :class="{ 'col-3': showPhotoInput }"
              >
                <div
                :class="{ 'empty-photo position-absolute': !showPhotoInput }"
                class="d-flex justify-content-center align-items-center">
                  <PhotoInput
                  id="photo-input-is-uniq"
                  :show-navigation="focus" @can-show="showPhotoInputHandle" />
                </div>
              </div>
            </div>
          </template>
        </ContainerFocusItem>
      </div>
      <draggable v-model="mainFormInputs" @end="setActiveContainer">
        <transition-group>
          <div
            v-for="(input, inputKey) in mainFormInputs"
            :key="`input-${inputKey}`"
            style="position: relative; margin: 32px 0px"
          >
            <ContainerFocusItem
            :name="input.id"
            :id="input.id"
            :title="input.name"
            :show-title="true"
            :activeIndex="activeIndex"
            :index="inputKey"
            >
              <template #main="{ actions, focus }">
                <div>
                  <component
                    :id="input.id"
                    :value="getValue(input.id)"
                    :show-navigation="focus"
                    v-bind:is="input.component"
                    @focus-input="actions[`${input.id}`].focus()"
                    />
                  <b-button
                    v-show="focus"
                    size="sm"
                    @click="deleteInputForm(input)"
                    variant="dark"
                    style="position: absolute; top: -15px; right: -15px"
                  >
                    <b-icon icon="x" />
                  </b-button>
                </div>
              </template>
            </ContainerFocusItem>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import formMixin from '@/mixins/form';
import TitleContainer from '@/components/TitleContainer.vue';
import types from '@/store/modules/form/types';
import resumeTypes from '@/store/modules/resume/types';
import TextPlaceholder from '@/components/TextPlaceholder.vue';
import draggable from 'vuedraggable';
import MainInfoInputForm from './InputForm/MainInfoInputForm.vue';
import ContactInput from './ContactInput.vue';
import PhotoInput from './PhotoInput.vue';
import ContainerFocusItem from './ContainerFocusItem.vue';
import TagEditable from './TagEditable.vue';

export default {
  name: 'MainForm',
  components: {
    TagEditable,
    draggable,
    MainInfoInputForm,
    ContactInput,
    PhotoInput,
    ContainerFocusItem,
    TitleContainer,
    TextPlaceholder,
  },
  mixins: [formMixin],
  props: {
    id: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      txt: '',
      fullName: '',
      position: '',
      skills: ['name - skill'],
      expirience: [{ companyName: '', date: 'YYYY-MM', description: '' }],
      education: [{ placeName: '', date: 'YYYY', description: '' }],
      about: '',
      properties: ['fullName', 'position', 'about'],
      mainFormInputs: null,
      showPhotoInput: false,
      activeIndex: NaN,
      //   includeFotns: `
      //   <link rel="preconnect" href="https://fonts.googleapis.com">
      //   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      //   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
      //   <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
      //   <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap" rel="stylesheet">
      //   <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap" rel="stylesheet">
      //   <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap" rel="stylesheet">
      // `,
    };
  },
  computed: {
    ...mapState('form', [
      'inputs',
      'formData',
      'formDataTest',
      'currentFont',
    ]),
    ...mapGetters('form', [
      'getValue',
      'getContainerTitleValue',
      'styleFormPrint',
      'includeFotns',
      'existFocusOnInput',
      // 'currentResumeInputs',
    ]),
    ...mapGetters('resume', [
      'currentResume',
      'currentResumeInputs',
    ]),
    bodyStyle() {
      return !this.existFocusOnInput && ` body{
      background-color: white;
    }`;
    },
    formData() {
      return this.currentResume(this.id);
    },
    resumeInputs() {
      return this.currentResumeInputs(this.id);
    },
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.mainFormInputs = this.resumeInputs;
        this.initState(this.currentResume(this.id));
      },
    },
    formDataTest() {
      this.updateResume(this.formDataTest);
    },
    resumeInputs() {
      this.mainFormInputs = this.resumeInputs;
    },
  },
  methods: {
    ...mapMutations('form', {
      initState: types.INIT_STATE,
      updateInputs: types.SET_INPUT,
      deleteInputForm: types.DELETE_INPUT_FROM_AND_DATA,
      resetState: types.RESET_STATE,
      toggleRequireFocus: types.TOGGLE_REQUIRE_FOCUS,
    }),
    ...mapMutations('resume', {
      updateResume: resumeTypes.UPDATE_RESUME,
    }),
    showPhotoInputHandle(canShow) {
      this.showPhotoInput = canShow;
    },
    async print() {
      await this.toggleRequireFocus();
      await this.$htmlToPaper('resume-form');
    },
    setActiveContainer({ newIndex }) {
      this.toggleRequireFocus();
      this.activeIndex = newIndex;
    },
  },
};
</script>
<style lang="scss">
@import '../assets/app.scss';
.empty-photo {
  top: 0px;
  right: 100px;
}
.main-form {
  padding: 10px;
  background-color: white;
}
.main-form.exist-focus {
  background-color: rgba(128, 128, 128, 0.332);
  box-shadow: 0 0 3px rgb(0 0 0 / 10%);
}
.main-form-page {
  background-color: rgba(128, 128, 128, 0.192);
}
</style>
