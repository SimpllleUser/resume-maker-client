import inputList from '@/inputs-list';

const getInputKeyFromData = (keyData) => keyData.split('.')[0];
const getInputIdFromData = (keyData) => keyData.split('.')[1];

export default {
  currentResumeInputs: ({ formDataTest }) => {
    const componentKeys = Object.keys(inputList);
    return Object.keys(formDataTest)
      .filter((key) => componentKeys.includes(key.split('.')[0]))
      .map((formKey) => ({
        id: getInputIdFromData(formKey),
        ...inputList[getInputKeyFromData(formKey)],
      }));
  },
  inputValueByKey: ({ formDataTest }) => (key) => formDataTest[key] || null,
  inputsList() {
    return inputList;
  },
  getValue: ({ formData }) => (keyInput) => {
    const createdInputKeys = Object
      ?.keys(formData)
      ?.filter((key) => key.split('.').length > 1);
    const formInputKey = createdInputKeys.find((key) => {
      const id = key.split('.').at(1);
      return keyInput === id;
    });
    return formData[formInputKey];
  },
  getContainerTitleValue: ({ formTitles }) => (key) => formTitles[key],
  styleFormPrint: ({ fonts, colors }) => {
    const getCssStylesByColor = (color) => `
      .color-${color.class} {
          color: ${color.style} !important;
      }
      .bg_color-${color.class}:after {
          background-color: ${color.style} !important;
      }
      .form-control.color-${color.class} {
          color: ${color.style} !important;
      }
      .border-style-color-${color.class} {
          border-color: ${color.style} !important;
      }
        .full-name-color-${color.class} {
          color: ${color.style} !important;
      }`;
    const styleColorsString = colors.reduce((otherStyles, color) => `${otherStyles} ${getCssStylesByColor(color)}`, '');
    const getFontStyle = (font) => `
    .font-${font.class} {
      font-family: ${font.style} !important;
    }
    .contact-text.font-${font.class} {
        font-family: ${font.style} !important;
    }
    .form-control.font-${font.class} {
        font-family: ${font.style} !important;
    }
    `;
    const fontStyles = fonts.reduce((allFonts, font) => `${allFonts} ${getFontStyle(font)}`, '');
    return `${styleColorsString}
      ${fontStyles}
    `;
  },
  includeFotns: ({ fonts }) => fonts.reduce((fontTags, currentFont) => `${fontTags} <link href="${currentFont.link}" rel="stylesheet">`, ''),
  existFocusOnInput: ({ focusContainer }) => Object.values(focusContainer).some(Boolean),
};
