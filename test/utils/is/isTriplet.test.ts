import { describe, expect, test } from '@jest/globals';
import { isTriplet } from '../../../src/utils/is.util';

describe('isTriplet,是否为刻子方法测试', () => {
  test('111是一个刻子', () => {
    expect(isTriplet('111')).toBe(true);
  });
  test('11不是一个刻子', () => {
    expect(isTriplet('11')).toBe(false);
  });
  test('1111不是一个刻子', () => {
    expect(isTriplet('11')).toBe(false);
  });
  test('122不是一个刻子', () => {
    expect(isTriplet('11')).toBe(false);
  });
});
