import { isStraight } from '../src/utils/is.util';

import { describe, expect, test } from '@jest/globals';
import { TILE_TYPE } from '../src/utils/type.util';

describe('isStraight,是否为顺子方法测试', () => {
  test('123是一个顺子', () => {
    expect(isStraight('123')).toBe(true);
  });

  test('456是一个顺子', () => {
    expect(isStraight('456')).toBe(true);
  });

  test('789是一个顺子', () => {
    expect(isStraight('789')).toBe(true);
  });

  test('788不是一个顺子', () => {
    expect(isStraight('788')).toBe(false);
  });

  test('865不是一个顺子', () => {
    expect(isStraight('865')).toBe(false);
  });

  test('543是一个顺子', () => {
    expect(isStraight('543')).toBe(true);
  });

  test('453是一个顺子', () => {
    expect(isStraight('453')).toBe(true);
  });

  test('333不是一个顺子', () => {
    expect(isStraight('333')).toBe(false);
  });

  test('6不是一个顺子', () => {
    expect(isStraight('6')).toBe(false);
  });

  test('8888不是一个顺子', () => {
    expect(isStraight('8888')).toBe(false);
  });

  test('123z不是一个顺子', () => {
    expect(isStraight('123', TILE_TYPE.Z)).toBe(false);
  });
});
