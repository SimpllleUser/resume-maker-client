import SkillInputForm from '@/components/InputForm/SkillInputForm.vue';
import ExpreienceInputForm from '@/components/InputForm/ExpreienceInputForm.vue';
import EducationInputForm from '@/components/InputForm/EducationInputForm.vue';
import AboutInputForm from '@/components/InputForm/AboutInputForm.vue';
import EducationStaticItem from '@/components/StaticItem/EducationStaticItem.vue';
import ExpreienceStaticInput from '@/components/StaticItem/ExpreienceStaticInput.vue';
import SkillStaticItem from '@/components/StaticItem/SkillStaticItem.vue';
import AboutStaticItem from '@/components/StaticItem/AboutStaticItem.vue';

export default {
  inputValueByKey: ({ formDataTest }) => (key) => formDataTest[key] || null,
  inputsList() {
    return [
      {
        name: 'Skill',
        type: 'skill',
        component: SkillInputForm,
        componentStatic: SkillStaticItem,
      },
      {
        name: 'Experience',
        type: 'experience',
        component: ExpreienceInputForm,
        componentStatic: ExpreienceStaticInput,
      },
      {
        name: 'Education',
        type: 'education',
        component: EducationInputForm,
        componentStatic: EducationStaticItem,
      },
      {
        name: 'About',
        type: 'about',
        component: AboutInputForm,
        componentStatic: AboutStaticItem,
      },
    ];
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
};
