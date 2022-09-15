import { v4 as uuidv4 } from 'uuid';
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
};
