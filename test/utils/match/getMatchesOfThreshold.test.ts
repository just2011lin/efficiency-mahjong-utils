import { describe, expect, test } from '@jest/globals';
import { getMatchesOfThreshold } from '../../../src/utils/match.util';

describe('getMatchesOfThreshold,获取坎张搭子的进张', () => {
  test('24s的进张为3s', () => {
    expect(getMatchesOfThreshold('24s')).toEqual(['3s']);
  });

  test('12s不是坎张搭子，没有坎张进张', () => {
    expect(getMatchesOfThreshold('12s')).toEqual([]);
  });

  test('24z是字牌，没有坎张进张', () => {
    expect(getMatchesOfThreshold('24z')).toEqual([]);
  });
});
