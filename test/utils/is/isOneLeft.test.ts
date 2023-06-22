import { describe, expect, test } from '@jest/globals';
import { isReady } from '../../../src/utils/is.util';

describe('isReady,判断一副牌是否听牌了', () => {
  test('44789p111678s77z听牌了', () => {
    expect(isReady('44789p111678s77z')).toBe(true);
  });

  test('444678m34577p67s', () => {
    expect(isReady('444678m34577p67s')).toBe(true);
  });

  test('2567m789p12367s7z未听牌', () => {
    expect(isReady('2567m789p12367s7z')).toBe(false);
  });

  test('567m55789p12367s', () => {
    expect(isReady('567m55789p12367s')).toBe(true);
  });

  test('9m1234588p388s24z未听牌', () => {
    expect(isReady('9m1234588p388s24z')).toBe(false);
  });

  test('9m12345588p388s4z未听牌', () => {
    expect(isReady('9m12345588p388s4z')).toBe(false);
  });

  test('12345888p34588s', () => {
    expect(isReady('12345888p34588s')).toBe(true);
  });
});
