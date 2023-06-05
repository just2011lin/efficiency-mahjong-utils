import { describe, expect, test } from '@jest/globals';
import { isBothPartner } from '../../../src/utils/is.util';

describe('isBothPartner,是否为两面搭子方法测试', () => {
  test('111不是一个两面搭子', () => {
    expect(isBothPartner('111')).toBe(false);
  });
  test('12不是一个两面搭子', () => {
    expect(isBothPartner('12')).toBe(false);
  });
  test('13不是一个两面搭子', () => {
    expect(isBothPartner('13')).toBe(false);
  });
  test('23是一个两面搭子', () => {
    expect(isBothPartner('23')).toBe(true);
  });
  test('54是一个两面搭子', () => {
    expect(isBothPartner('54')).toBe(true);
  });
  test('89不是一个两面搭子', () => {
    expect(isBothPartner('89')).toBe(false);
  });
});
