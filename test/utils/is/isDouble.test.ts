import { describe, expect, test } from '@jest/globals';
import { isDouble } from '../../../src/utils/is.util';

describe('isDouble,是否为对子方法测试', () => {
  test('111不是一个对子', () => {
    expect(isDouble('111')).toBe(false);
  });
  test('11是一个对子', () => {
    expect(isDouble('11')).toBe(true);
  });
  test('1111不是一个对子', () => {
    expect(isDouble('1111')).toBe(false);
  });
  test('122不是一个对子', () => {
    expect(isDouble('122')).toBe(false);
  });
});
