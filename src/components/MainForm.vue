<template>
  <div>
    <ul>
      <tag-editable tag-type="h1" v-model="txt" placeholderValue="Empty content" ></tag-editable>
      <li><h1>Переделать все инпуты в editable content</h1></li>
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
        <ContainerFocusItem name="main-info">
          <template #text>
            <div class="row row-cols-2">
              <div :class="`col-${formData.imgDataUrl ? 9 : 12}`">
                <div class="col">
                  <div
                    class="h1 text-center test"
                    :class="`full-name-color-${currentColor.class} font-${currentFont.value}`"
                  >
                    <text-placeholder
                      :class="`font-${currentFont.class}`"
                      :value="formData.fullName"
                      label="Your full name"
                    />
                  </div>
                  <div class="h4 text-center">
                    <text-placeholder
                      :class="`font-${currentFont.class}`"
                      :value="formData.position"
                      label="Your position"
                    />
                  </div>
                </div>
                <contact-static-item :value="formData.contacts" />
              </div>
              <div v-if="formData.imgDataUrl" class="col-3">
                <div class="d-flex justify-content-center align-items-center">
                  <img :src="formData.imgDataUrl" alt="photo" width="190px" height="190px" />
                </div>
              </div>
            </div>
          </template>
          <template #input="{ actions }">
            <div
              tabindex="-1"
              v-click-outside="actions['main-info-on-blur']"
              @focus="actions['main-info-on-focus']"
            >
              <div class="d-flex">
                <div :class="{ 'w-100': !formData.imgDataUrl }">
                  <b-form-input
                    class="text-center"
                    style="font-size: calc(1.375rem + 1.5vw); border-style: none"
                    v-model="fullName"
                    placeholder="Your full name"
                    @change="updateInputValue"
                  />
                  <b-form-input
                    v-model="position"
                    class="text-center"
                    style="font-size: calc(1.275rem + 0.3vw); border-style: none"
                    placeholder="Your position"
                    @change="updateInputValue"
                  />
                </div>
                <div>
                  <PhotoInput @on-focus="actions['main-info-on-focus']" />
                </div>
              </div>
              <div>
                <ContactInput
                  @on-focus="actions['main-info-on-focus']"
                  @on-blur="actions['main-info-on-blur']"
                />
              </div>
            </div>
          </template>
        </ContainerFocusItem>
      </div>
      <draggable v-model="mainFormInputs">
        <transition-group>
          <div
            v-for="(input, inputKey) in mainFormInputs"
            :key="`input-${inputKey}`"
            style="position: relative; margin: 32px 0px"
          >
            <ContainerFocusItem name="about">
              <template>
                <title-container
                  :id="input.id"
                  :text="getContainerTitleValue(input.id)"
                  :placeholder="input.name"
                />
              </template>
              <template #text>
                <div class="row">
                  <component
                    :id="input.id"
                    :value="getValue(input.id)"
                    v-bind:is="input.componentStatic"
                  />
                </div>
              </template>
              <template #input="{ actions }">
                <div v-click-outside="actions['about-on-blur']">
                  <component
                    :id="input.id"
                    :value="getValue(input.id)"
                    v-bind:is="input.component"
                  />
                  <b-button
                    size="sm"
                    pill
                    @click="deleteInputForm(input)"
                    variant="danger"
                    style="position: absolute; top: -15px; right: -15px"
                  >
                    <b-icon icon="trash" />
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
import ContactStaticItem from '@/components/StaticItem/ContactStaticItem.vue';
import TitleContainer from '@/components/TitleContainer.vue';
import types from '@/store/modules/form/types';
import TextPlaceholder from '@/components/TextPlaceholder.vue';
import draggable from 'vuedraggable';
import ContactInput from './ContactInput.vue';
import SkillInput from './SkillInput.vue';
import ExpreienceInput from './ExpreienceInput.vue';
import EducationInput from './EducationInput.vue';
import PhotoInput from './PhotoInput.vue';
import ContainerFocusItem from './ContainerFocusItem.vue';
import TagEditable from './TagEditable.vue';

export default {
  name: 'MainForm',
  components: {
    ContactInput,
    SkillInput,
    ExpreienceInput,
    EducationInput,
    PhotoInput,
    ContainerFocusItem,
    TitleContainer,
    TextPlaceholder,
    ContactStaticItem,
    TagEditable,
    draggable,
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
</style>
