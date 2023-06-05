import { describe, expect, test } from '@jest/globals';
import { isThresholdPartner } from '../../../src/utils/is.util';

describe('isThresholdPartner,是否为坎张搭子方法测试', () => {
  test('111不是一个坎张搭子', () => {
    expect(isThresholdPartner('111')).toBe(false);
  });
  test('12不是一个坎张搭子', () => {
    expect(isThresholdPartner('12')).toBe(false);
  });
  test('13是一个坎张搭子', () => {
    expect(isThresholdPartner('13')).toBe(true);
  });
  test('23不是一个坎张搭子', () => {
    expect(isThresholdPartner('23')).toBe(false);
  });
  test('53是一个坎张搭子', () => {
    expect(isThresholdPartner('53')).toBe(true);
  });
  test('89不是一个坎张搭子', () => {
    expect(isThresholdPartner('89')).toBe(false);
  });
});
