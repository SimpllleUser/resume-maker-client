import { v4 as uuidv4 } from 'uuid';
import types from './types';

export default {
  [types.ADD_RESUME](state) {
    state.resumeList = [{
      id: uuidv4(),
    }, ...state.resumeList];
  },
  [types.DELETE_RESUME](state, id) {
    state.resumeList = state.resumeList.filter((resume) => resume.id !== id);
  },
};
