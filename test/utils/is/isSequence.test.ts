import { isSequence } from '../../../src/utils/is.util';

import { describe, expect, test } from '@jest/globals';

describe('isSequence,是否为顺子方法测试', () => {
  test('123是一个顺子', () => {
    expect(isSequence('123')).toBe(true);
  });

  test('456是一个顺子', () => {
    expect(isSequence('456')).toBe(true);
  });

  test('789是一个顺子', () => {
    expect(isSequence('789')).toBe(true);
  });

  test('788不是一个顺子', () => {
    expect(isSequence('788')).toBe(false);
  });

  test('865不是一个顺子', () => {
    expect(isSequence('865')).toBe(false);
  });

  test('543是一个顺子', () => {
    expect(isSequence('543')).toBe(true);
  });

  test('453是一个顺子', () => {
    expect(isSequence('453')).toBe(true);
  });

  test('333不是一个顺子', () => {
    expect(isSequence('333')).toBe(false);
  });

  test('6不是一个顺子', () => {
    expect(isSequence('6')).toBe(false);
  });

  test('8888不是一个顺子', () => {
    expect(isSequence('8888')).toBe(false);
  });

  test('123z不是一个顺子', () => {
    expect(isSequence('123', 'z')).toBe(false);
  });
});
