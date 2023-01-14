<template>
  <div>
    <ul>
      <li><div>
        <h3>Добавить вызов focus по индексу елемента которій перетащили</h3>
        <p>
          В комопнент передавать index или другие данные. <br>
          Тригерить на изминение положения, и после  изминения положения вызывыать фокус <br>
          (Избежать конфликта из сбрасіванием фокуса)
        </p>
      </div></li>
      <li>Добавить небольшой OVERLAY на невіделенные обьекты</li>
      <li>Поправить фокус после D&D</li>
      <li>Подключение стилей без инета</li>
      <li>Сделать единый стиль для редактирования и отображения данных</li>
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
      <draggable v-model="mainFormInputs" @end="log">
        <transition-group>
          <div
            v-for="(input, inputKey) in mainFormInputs"
            :key="`input-${inputKey}`"
            style="position: relative; margin: 32px 0px"
          >
          {{ input.id }}
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
    ...mapState('form', ['inputs', 'formData', 'currentColor', 'currentFont', 'requireFocus']),
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
      toggleRequireFocus: types.TOGGLE_REQUIRE_FOCUS,
    }),
    showPhotoInputHandle(canShow) {
      this.showPhotoInput = canShow;
    },
    async print() {
      await this.toggleRequireFocus();
      await this.$htmlToPaper('resume-form');
    },
    log(data) {
      console.log(data);
      this.toggleRequireFocus();
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
