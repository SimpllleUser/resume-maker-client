import { mount } from '@vue/test-utils';
import { test, expect } from 'vitest';


import HelloWorld from '@/components/HelloWorld.vue';

test('mount component', async () => {
    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'Hello from vitest',
        },
    });

    expect(wrapper.text()).toContain('Hello from vitest');
});

test('button click', async () => {
    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'Hello from vitest',
        },
    });
    await wrapper.get('button').trigger('click');

    expect(wrapper.text()).toContain('count is 1');

    await wrapper.get('button').trigger('click');

    expect(wrapper.text()).toContain('count is 2');
});