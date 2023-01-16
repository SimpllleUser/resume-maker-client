import { LOCAL_STORAGE_KEYS_RESUMES } from '@/constants';

import tools from '@/utils/tools';

tools.initLocalStorageItem(LOCAL_STORAGE_KEYS_RESUMES, JSON.stringify([]));

export default {
  resumeList: tools.getLocalStorageObject(LOCAL_STORAGE_KEYS_RESUMES) || [],
};
