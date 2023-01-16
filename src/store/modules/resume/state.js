import { LOCAL_STORAGE_KEYS_RESUMES } from '@/constants';

import tools from '@/utils/tools';

const initResumes = () => tools.initLocalStorageItem(
  LOCAL_STORAGE_KEYS_RESUMES,
  JSON.stringify([]),
);

if (!localStorage[LOCAL_STORAGE_KEYS_RESUMES]?.length) {
  initResumes();
}

if (!Array.isArray(tools.getLocalStorageObject(LOCAL_STORAGE_KEYS_RESUMES))) {
  initResumes();
}

export default {
  resumeList: tools.getLocalStorageObject(LOCAL_STORAGE_KEYS_RESUMES, []) || [],
};
