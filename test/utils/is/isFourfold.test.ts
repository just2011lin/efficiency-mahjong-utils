import { describe, expect, test } from '@jest/globals';
import { isFourfold } from '../../../src/utils/is.util';

describe('isFourfold,是否为杠子方法测试', () => {
  test('111不是一个杠子', () => {
    expect(isFourfold('111')).toBe(false);
  });
  test('11是一个杠子', () => {
    expect(isFourfold('11')).toBe(false);
  });
  test('1111不是一个杠子', () => {
    expect(isFourfold('1111')).toBe(true);
  });
  test('122不是一个杠子', () => {
    expect(isFourfold('122')).toBe(false);
  });
});
