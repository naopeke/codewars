import { assert } from 'chai';
import { likes, isValidWalk } from '../app.js';

describe('example tests', function() {
    it('should return correct text', function() {
        assert.strictEqual(likes([]), 'no one likes this');
        assert.strictEqual(likes(['Peter']), 'Peter likes this');
        assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
        assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
        assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
});

describe("Tests", () => {
  it("test", () => {
    //some test cases for you...
    assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
    assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
    assert.isFalse(isValidWalk(['w']), 'should return false');
    assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

  });
});


