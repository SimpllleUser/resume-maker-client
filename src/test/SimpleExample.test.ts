import { test, expect } from 'vitest';

const user = {
    name: 'Max',
    age: 25,
};

test('Max is 25', () => {
    expect(user.name).toBe('Max');
    expect(user.age).toBe(25);
});