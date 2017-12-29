import assert from 'assert';
import comment from '../src/comment';

describe('Comment', () => {
  it('should return commented text for one line', function() {
    assert.equal(comment('I want a hawaiian pizza with lots of cheese!', 80), '/**\n * I want a hawaiian pizza with lots of cheese! \n */\n');
  });
});
