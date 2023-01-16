import { v4 as uuidv4 } from 'uuid';

const getDefaultResume = () => ({
  id: uuidv4(),
  [`title.${uuidv4()}`]: '',
  'mainInfo.main-info': {
    fullName: '',
    position: '',
  },
  'contacts.contact-item-is-uniq': [
    {
      icon: 'phone',
      value: '',
    },
    {
      icon: 'phone',
      value: '',
    },
    {
      icon: 'phone',
      value: '',
    },
  ],
  'photo.photo-input-is-uniq': '',
  [`skills.${uuidv4()}`]: [
    '',
    '',
    '',
  ],
  [`expreriance.${uuidv4()}`]: [
    {
      companyName: '',
      position: '',
      date: {
        from: '',
        to: '',
      },
      description: '',
    },
  ],
  [`educations.${uuidv4()}`]: [],
  [`ebout.${uuidv4()}`]: '',
});

const setLocalStorageObject = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getLocalStorageObject = (key) => JSON.parse(localStorage.getItem(key) || '{}');
const initLocalStorageItem = (key, defaultValue) => localStorage[key]?.lenght || localStorage.setItem(key, defaultValue || '');

export default {
  getDefaultResume,
  setLocalStorageObject,
  getLocalStorageObject,
  initLocalStorageItem,
};
