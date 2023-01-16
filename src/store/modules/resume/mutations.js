import tools from '@/utils/tools';
import { LOCAL_STORAGE_KEYS_RESUMES } from '@/constants';
import types from './types';

export default {
  [types.ADD_RESUME](state) {
    state.resumeList = [tools.getDefaultResume(), ...state.resumeList];
    tools.setLocalStorageObject(LOCAL_STORAGE_KEYS_RESUMES, state.resumeList);
  },
  [types.DELETE_RESUME](state, id) {
    state.resumeList = state.resumeList.filter((resume) => resume.id !== id);
    tools.setLocalStorageObject(LOCAL_STORAGE_KEYS_RESUMES, state.resumeList);
  },
};
