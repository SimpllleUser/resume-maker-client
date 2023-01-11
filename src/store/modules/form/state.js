import utils from '@/store/modules/form/utils';

const getFontFullLink = (linkParam) => `https://fonts.googleapis.com/css2?family=${linkParam}&display=swap`;
const colors = [
  { style: '#63677c', class: 'navy' },
  { style: '#031635', class: 'navy2' },
  { style: '#1f497d', class: 'blue' },
  { style: '#339fc3', class: 'blue2' },
  { style: '#8eb9eb', class: 'violet' },
  { style: '#6967ba', class: 'green' },
  { style: '#4cab96', class: 'ochre' },
];
const fonts = [
  {
    class: 'roboto',
    name: 'Roboto',
    style: 'Roboto',
    link: getFontFullLink('Roboto'),
  },
  {
    class: 'playfair_display',
    name: 'Playfair Display',
    style: 'Playfair Display',
    link: getFontFullLink('Playfair+Display'),
  },
  {
    class: 'eb_garamond',
    name: 'EB Garamond',
    style: 'EB Garamond',
    link: getFontFullLink('EB+Garamond'),
  },
  {
    class: 'noto_sans',
    name: 'Noto Sans',
    style: 'Noto Sans',
    link: getFontFullLink('Noto+Sans'),
  },
  {
    class: 'nunito',
    style: 'Nunito',
    name: 'Nunito',
    link: getFontFullLink('Nunito'),
  },
];

const currentColor = utils.initStateProperty('currentColor', colors[0]);
const currentFont = utils.initStateProperty('currentFont', fonts[0]);

export default {
  formTitles: {},
  formData: {},
  formDataTest: JSON.parse(localStorage.getItem('formDataTest')) || {},
  inputs: [],
  styles: {
    color: '',
    font: '',
  },
  colors,
  fonts,
  currentColor,
  currentFont,
};
