// import { v4 as uuidv4 } from 'uuid';
import removeKeyFromObject from 'lodash/omit';
import types from './types';
import utils from './utils';

export default {
  [types.INIT_STATE](state, formData) {
    state.formDataTest = formData;
  },
  [types.SET_FORM_PROPERTY](state, propery) {
    const [key] = Object.keys(propery);
    const [value] = Object.values(propery);
    state.formData = { ...state.formData, [key]: value };
    utils.statuePropertyToLocalStorage('formData', state.formData);
  },
  [types.SET_INPUT](state, inputList) {
    state.inputs = inputList;
    utils.statuePropertyToLocalStorage('inputs', state.inputs);
  },
  [types.UPDATE_TITLE_CONTAINER](state, { id, value }) {
    state.formTitles = { ...state.formTitles, [id]: value };
    utils.statuePropertyToLocalStorage('formTitles', state.formTitles);
  },
  [types.DELETE_INPUT_FROM_AND_DATA](state, input) {
    const resume = state.formDataTest;
    const currenDataKey = Object
      ?.keys(state.formDataTest)
      ?.find((key) => key.indexOf(input.id) !== -1);
    state.formDataTest = removeKeyFromObject(resume, currenDataKey);
    utils.statuePropertyToLocalStorage('formData', resume);
  },
  [types.SET_COLOR](state, color) {
    state.currentColor = color;
    utils.statuePropertyToLocalStorage('currentColor', state.currentColor);
  },
  [types.SET_FONT](state, font) {
    state.currentFont = font;
    utils.statuePropertyToLocalStorage('currentFont', state.currentFont);
  },
  [types.SET_INPUT_VALUE](state, { key, value }) {
    state.formDataTest = { ...state.formDataTest, [key]: value };
    localStorage.setItem('formDataTest', JSON.stringify(state.formDataTest));
  },
  [types.TOGGLE_REQUIRE_FOCUS](state) {
    state.requireFocus = !state.requireFocus;
  },
  [types.SET_CONTAINER_INPUT_BY_KEY](state, { key, value }) {
    state.focusContainer = { ...state.focusContainer, [key]: value };
  },
};
