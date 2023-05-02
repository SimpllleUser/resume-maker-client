import { mount } from '@vue/test-utils';
import { test, expect } from 'vitest';

import ResumeItemCard from '@/components/Resume/ResumeItemCard.vue';

import { resumeItem } from './mock/resume-item';

const DISPLAY_NONE_STYLE = 'display: none;'

const ID_FULL_NAME = '#full-name';
const ID_POSITION = '#position';
const ID_USER_PHOTO = '#user-photo';

test('mount component', async () => {
    expect(ResumeItemCard).toBeTruthy();

    const wrapper = mount(ResumeItemCard, {
        props: {
            resume: resumeItem,
        },
    });

    const fullName = wrapper.find(ID_FULL_NAME).text();
    expect(fullName).toBe(resumeItem.content.main.fullName);

    const position = wrapper.find(ID_POSITION).text();
    expect(position).toBe(resumeItem.content.main.position);

    const photoStyle = wrapper.find(ID_USER_PHOTO).attributes('style');

    expect(photoStyle).toBe(DISPLAY_NONE_STYLE);
});