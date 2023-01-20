import { v4 as uuidv4 } from 'uuid';
import constants from '@/constants';

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
  [`${constants.INPUT_KEYS.SKILL}.${uuidv4()}`]: [
    '',
    '',
    '',
  ],
  [`${constants.INPUT_KEYS.EXPERIENCE}.${uuidv4()}`]: [
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
  [`${constants.INPUT_KEYS.EDUCATION}.${uuidv4()}`]: [
    {
      educationName: '',
      date: {
        from: '',
        to: '',
      },
      description: '',
    },
  ],
  [`${constants.INPUT_KEYS.ABOUT}.${uuidv4()}`]: '',
});

const setLocalStorageObject = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getLocalStorageObject = (
  key,
  defaultValue,
) => {
  try {
    return JSON?.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(JSON.stringify(error, null, 4));
    return defaultValue || {};
  }
};
const initLocalStorageItem = (key, defaultValue) => localStorage[key]?.lenght || localStorage.setItem(key, defaultValue || '');

export default {
  getDefaultResume,
  setLocalStorageObject,
  getLocalStorageObject,
  initLocalStorageItem,
};
