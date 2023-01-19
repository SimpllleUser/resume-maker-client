import tools from '@/utils/tools';
import constants from '@/constants';
import types from './types';

export default {
  [types.ADD_RESUME](state) {
    state.resumeList = [tools.getDefaultResume(), ...state.resumeList];
    tools.setLocalStorageObject(constants.LOCAL_STORAGE_KEYS_RESUMES, state.resumeList);
  },
  [types.UPDATE_RESUME](state, form) {
    const index = state.resumeList.findIndex(({ id }) => id === form.id);
    state.resumeList = Object.values({ ...state.resumeList, [index]: form });
    tools.setLocalStorageObject(constants.LOCAL_STORAGE_KEYS_RESUMES, state.resumeList);
  },
  [types.DELETE_RESUME](state, id) {
    state.resumeList = state.resumeList.filter((resume) => resume.id !== id);
    tools.setLocalStorageObject(constants.LOCAL_STORAGE_KEYS_RESUMES, state.resumeList);
  },
};
