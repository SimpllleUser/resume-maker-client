import constants from '@/constants';

import tools from '@/utils/tools';

const initResumes = () => tools.initLocalStorageItem(
  constants.LOCAL_STORAGE_KEYS_RESUMES,
  JSON.stringify([]),
);

if (!localStorage[constants.LOCAL_STORAGE_KEYS_RESUMES]?.length) {
  initResumes();
}

if (!Array.isArray(tools.getLocalStorageObject(constants.LOCAL_STORAGE_KEYS_RESUMES))) {
  initResumes();
}

export default {
  resumeList: tools.getLocalStorageObject(constants.LOCAL_STORAGE_KEYS_RESUMES, []) || [],
};
