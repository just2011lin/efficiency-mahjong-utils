import { describe, expect, test } from '@jest/globals';
import { isTick } from '../../../src/utils/is.util';

describe('isTick,是否为杠子方法测试', () => {
  test('111不是一个杠子', () => {
    expect(isTick('111')).toBe(false);
  });
  test('11是一个杠子', () => {
    expect(isTick('11')).toBe(false);
  });
  test('1111不是一个杠子', () => {
    expect(isTick('1111')).toBe(true);
  });
  test('122不是一个杠子', () => {
    expect(isTick('122')).toBe(false);
  });
});
