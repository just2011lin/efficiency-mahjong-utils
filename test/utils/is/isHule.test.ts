import { describe, expect, test } from '@jest/globals';
import { isHule } from '../../../src/utils/is.util';

describe('isHule,判断一副牌是否胡了', () => {
  test('111m22s已经胡了', () => {
    expect(isHule('111m22s')).toBe(true);
  });
});
