import { describe, expect, test } from '@jest/globals';
import { isEdge } from '../../../src';

describe('isEdge,是否为边张搭子方法测试', () => {
  test('12s是一个边张搭子', () => {
    expect(isEdge('12s')).toBe(true);
  });
  test('21s是一个边张搭子', () => {
    expect(isEdge('21s')).toBe(true);
  });
  test('89s是一个边张搭子', () => {
    expect(isEdge('89s')).toBe(true);
  });
  test('98m是一个边张搭子', () => {
    expect(isEdge('98m')).toBe(true);
  });
  test('12z不是一个边张搭子', () => {
    expect(isEdge('12z')).toBe(false);
  });
});
