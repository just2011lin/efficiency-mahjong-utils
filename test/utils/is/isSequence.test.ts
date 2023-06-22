import { isSequence } from '../../../src';

import { describe, expect, test } from '@jest/globals';

describe('isSequence 是否为顺子方法测试', () => {
  test('456m是一个顺子', () => {
    expect(isSequence('456m')).toBe(true);
  });

  test('543s是一个顺子', () => {
    expect(isSequence('543s')).toBe(true);
  });

  test('453s是一个顺子', () => {
    expect(isSequence('453s')).toBe(true);
  });

  test('788s不是一个顺子', () => {
    expect(isSequence('788s')).toBe(false);
  });

  test('865s不是一个顺子', () => {
    expect(isSequence('865s')).toBe(false);
  });

  test('333s不是一个顺子', () => {
    expect(isSequence('333s')).toBe(false);
  });

  test('6s不是一个顺子', () => {
    expect(isSequence('6s')).toBe(false);
  });

  test('8888s不是一个顺子', () => {
    expect(isSequence('8888s')).toBe(false);
  });

  test('123z不是一个顺子', () => {
    expect(isSequence('123z')).toBe(false);
  });
});
