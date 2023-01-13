<template>
  <div>
    <ul>
      <tag-editable tag-type="h1" v-model="txt" placeholderValue="Empty content" ></tag-editable>
      <li>Реализовать сохранение данных в Local Storage</li>
      <li>Сделать единый стиль для редактирования и отображения данных</li>
      <li>Вернуть отображение оглавлений</li>
      <li>Добавить возможность множественных созданий резюме</li>
    </ul>
    <div class="d-flex justify-content-center">
      <div>
        <b-button @click="resetState()">Reset</b-button>
      </div>
      <div>
        <b-button @click="print"> Print </b-button>
      </div>
    </div>
    <div class="main-form" id="resume-form" :class="`font-${currentFont.value}`">
      <span v-html="`<style>${styleFormPrint}</style>`" />
      <span v-html="includeFotns"></span>
      <div>
        <ContainerFocusItem name="main-info" :show-title="false">
          <template #main="{ actions, focus }">
            <div
            class="row justify-content-center row-cols-2 position-relative"
            >
              <div :class="`col-${formData.imgDataUrl ? 9 : 12}`">
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
              :class="{'col-3': showPhotoInput}">
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
      <draggable v-model="mainFormInputs" >
        <transition-group>
          <div
            v-for="(input, inputKey) in mainFormInputs"
            :key="`input-${inputKey}`"
            style="position: relative; margin: 32px 0px"
          >
            <ContainerFocusItem :name="input.id" :title="input.name" :show-title="true" >
              <template #main="{ actions, focus }">
                <div>
                  <component
                    :id="input.id"
                    :value="getValue(input.id)"
                    v-bind:is="input.component"
                    :show-navigation="focus"
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
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import formMixin from '@/mixins/form';
import TitleContainer from '@/components/TitleContainer.vue';
import types from '@/store/modules/form/types';
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
    ...mapState('form', ['inputs', 'formData', 'currentColor', 'currentFont']),
    ...mapGetters('form', ['getValue', 'getContainerTitleValue', 'styleFormPrint', 'includeFotns']),
  },
  watch: {
    inputs: {
      immediate: true,
      handler() {
        this.mainFormInputs = this.inputs;
      },
    },
    mainFormInputs() {
      this.updateInputs(this.mainFormInputs);
    },
  },
  methods: {
    ...mapMutations('form', {
      updateInputs: types.SET_INPUT,
      deleteInputForm: types.DELETE_INPUT_FROM_AND_DATA,
      initState: types.INIT_STATE,
      resetState: types.RESET_STATE,
    }),
    showPhotoInputHandle(canShow) {
      this.showPhotoInput = canShow;
    },
    setValue(e) {
      const value = e.target.innerText;
      this.txt = value;
    },
    async print() {
      await this.$htmlToPaper('resume-form');
    },
  },
  mounted() {
    this.initState();
  },
};
</script>
<style lang="scss">
@import '../assets/app.scss';
.empty-photo {
  top: 0px;
  right: 100px;
}
</style>
