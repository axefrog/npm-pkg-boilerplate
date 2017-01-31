import {assert} from 'chai';
import {add} from '../src';

suite('tests', () => {
  test('add()', () => {
    assert.strictEqual(add(2, 3), 5);
  });
});