import inputList from '@/inputs-list';
import constants from '@/constants';

const getInputKeyFromData = (keyData) => keyData.split('.')[0];
const getInputIdFromData = (keyData) => keyData.split('.')[1];

export default {
  createdResumeId: ({ resumeList }) => resumeList[0]?.id,
  currentResume: ({ resumeList }) => (id) => resumeList.find((resumeItem) => resumeItem.id === id),
  currentResumeInputs: ({ resumeList }) => (id) => {
    const resume = resumeList.find((resumeItem) => resumeItem.id === id);
    const componentKeys = Object.keys(inputList);
    return Object.keys(resume)
      .filter((key) => componentKeys.includes(key.split('.')[0]))
      .map((formKey) => ({
        id: getInputIdFromData(formKey),
        ...inputList[getInputKeyFromData(formKey)],
      }));
  },
  resumtListCards: ({ resumeList }) => resumeList.map((resume) => {
    const mainInfo = resume[constants.MAIN_INFO_KEY_RESUME];
    const { img } = resume[constants.PHOTO_KEY_RESUME];
    return { ...mainInfo, img, id: resume.id };
  }),
};
