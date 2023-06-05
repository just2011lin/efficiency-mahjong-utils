import { describe, expect, test } from '@jest/globals';
import { isPair } from '../../../src/utils/is.util';

describe('isPair,是否为对子方法测试', () => {
  test('111不是一个对子', () => {
    expect(isPair('111')).toBe(false);
  });
  test('11是一个对子', () => {
    expect(isPair('11')).toBe(true);
  });
  test('1111不是一个对子', () => {
    expect(isPair('1111')).toBe(false);
  });
  test('122不是一个对子', () => {
    expect(isPair('122')).toBe(false);
  });
});
