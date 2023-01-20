export default {
  createdResumeId: ({ resumeList }) => resumeList[0]?.id,
  currentResume: ({ resumeList }) => (id) => resumeList.find((resumeItem) => resumeItem.id === id),
};
