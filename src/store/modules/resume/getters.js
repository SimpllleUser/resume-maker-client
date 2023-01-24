import inputList from '@/inputs-list';

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
};
