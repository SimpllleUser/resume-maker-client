import types from './types';

export default {
  [types.SET_FORM_PROPERTY](state, propery) {
    const [key] = Object.keys(propery);
    const [value] = Object.values(propery);
    state.formData = { ...state.formData, [key]: value };
  },
};
