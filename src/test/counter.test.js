const counter = require('./counter.js');

describe('Test the function for an empty array', () => {
  test('No items', () => {
    const arr = [];
    expect(counter(arr)).toBe(0);
  });

  test('2 items', () => {
    const arr = [{ rocket_id: '001' }, { rocket_id: '002' }];
    expect(counter(arr)).toBe(2);
  });
});