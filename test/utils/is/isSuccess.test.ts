import { describe, expect, test } from '@jest/globals';
import { isSuceess } from '../../../src/utils/is.util';

describe('isSuceess,判断一副牌是否胡了', () => {
  test('111m22s已经胡了', () => {
    expect(isSuceess('111m22s')).toBe(true);
  });

  test('2345699m234p234s8m还没胡', () => {
    expect(isSuceess('2345699m234p234s8m')).toBe(false);
  });

  test('234p9s9s已经胡了', () => {
    expect(isSuceess('234p9s9s')).toBe(true);
  });

  test('67899m57p456s6p已经胡了', () => {
    expect(isSuceess('67899m57p456s6p')).toBe(true);
  });

  test('67899m57p456s6p已经胡了', () => {
    expect(isSuceess('67899m57p456s6p')).toBe(true);
  });

  test('67899m57p46s7z5s还没胡', () => {
    expect(isSuceess('67899m57p46s7z5s')).toBe(false);
  });
});
