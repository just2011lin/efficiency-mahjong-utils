import { isDouble } from '../../../src/utils/is.util';

import { describe, expect, test } from '@jest/globals';

describe('isDouble 判断是否是对子', () => {
  test('11s是一个对子', () => {
    expect(isDouble('11s')).toBe(true);
  });
  test('空字符串不是一个对子', () => {
    expect(isDouble('')).toBe(false);
  });
  test('4不是一个对子', () => {
    expect(isDouble('4')).toBe(false);
  });
  test('1s不是一个对子', () => {
    expect(isDouble('1s')).toBe(false);
  });
  test('55不是一个对子', () => {
    expect(isDouble('55')).toBe(false);
  });
  test('12s不是一个对子', () => {
    expect(isDouble('12s')).toBe(false);
  });
  // 关于0的问题，后面再做考虑，在日本麻将中0表示赤五宝牌
  // test('00m不是一个对子', () => {
  //   expect(isDouble('00m')).toBe(false);
  // });
  test('111不是一个对子', () => {
    expect(isDouble('111')).toBe(false);
  });
  test('111s不是一个对子', () => {
    expect(isDouble('111s')).toBe(false);
  });
});
