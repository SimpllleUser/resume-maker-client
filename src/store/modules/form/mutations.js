import { v4 as uuidv4 } from 'uuid';
import removeKeyFromObject from 'lodash/omit';
import types from './types';

export default {
  [types.SET_FORM_PROPERTY](state, propery) {
    const [key] = Object.keys(propery);
    const [value] = Object.values(propery);
    state.formData = { ...state.formData, [key]: value };
  },
  [types.ADD_INPUT](state, input) {
    state.inputs = [...state.inputs, { ...input, id: uuidv4() }];
  },
  [types.SET_INPUT](state, inputList) {
    state.inputs = inputList;
  },
  [types.DELETE_INPUT_FROM_AND_DATA](state, input) {
    state.inputs = state.inputs.filter(({ id }) => id !== input.id);
    const currenDoemDataKey = Object
      ?.keys(state.formData)
      ?.find((key) => key.indexOf(input.id) !== -1);
    state.formData = removeKeyFromObject(state.formData, currenDoemDataKey);
  },
};
