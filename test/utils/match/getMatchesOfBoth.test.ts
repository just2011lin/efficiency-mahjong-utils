import { describe, expect, test } from '@jest/globals';
import { getMatchesOfBoth } from '../../../src/utils/match.util';

describe('getMatchOfBoth,获取两面搭子的所有进张', () => {
  test('34s的进张为2s和5s', () => {
    expect(getMatchesOfBoth('34s')).toEqual(['2s', '5s']);
  });

  test('76s的进张为5s和8s', () => {
    expect(getMatchesOfBoth('76s')).toEqual(['5s', '8s']);
  });

  test('79s不是两面搭子，没有两面进张', () => {
    expect(getMatchesOfBoth('79s')).toEqual([]);
  });

  test('23z是字牌，没有两面进张', () => {
    expect(getMatchesOfBoth('23z')).toEqual([]);
  });
});
