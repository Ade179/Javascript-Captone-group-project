const Countingcomment = require('../__mocks__/mockComment.js');
const counter = require('./counter.js');
// testing for the comment counter
describe('testing for number of comments', () => {
  test('test number of comment in id 1', () => {
    expect(counter(Countingcomment[0].comments)).toBe(2);
  });
});
// check 'mocks' folder for 'CountingComments'