import { describe, expect, test } from '@jest/globals';
import { isEdgePartner } from '../../../src/utils/is.util';

describe('isEdgePartner,是否为边张搭子方法测试', () => {
  test('111不是一个边张搭子', () => {
    expect(isEdgePartner('111')).toBe(false);
  });
  test('12是一个边张搭子', () => {
    expect(isEdgePartner('12')).toBe(true);
  });
  test('13不是一个边张搭子', () => {
    expect(isEdgePartner('13')).toBe(false);
  });
  test('23不是一个边张搭子', () => {
    expect(isEdgePartner('23')).toBe(false);
  });
  test('54不是一个边张搭子', () => {
    expect(isEdgePartner('54')).toBe(false);
  });
  test('89是一个边张搭子', () => {
    expect(isEdgePartner('89')).toBe(true);
  });
});
