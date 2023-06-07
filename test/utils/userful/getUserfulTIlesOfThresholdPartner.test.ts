import { describe, expect, test } from '@jest/globals';
import { getUserfulTilesOfThresholdPartner } from '../../../src/utils/userful.util';

describe('getUserfulTilesOfThresholdPartner,获取坎张搭子的进张', () => {
  test('24的进张为3', () => {
    expect(getUserfulTilesOfThresholdPartner('24')).toEqual(['3']);
  });

  test('79的进张为8', () => {
    expect(getUserfulTilesOfThresholdPartner('79')).toEqual(['8']);
  });

  test('13的进张为2', () => {
    expect(getUserfulTilesOfThresholdPartner('13')).toEqual(['2']);
  });

  test('12不是坎张搭子，没有坎张进张', () => {
    expect(getUserfulTilesOfThresholdPartner('12')).toEqual([]);
  });
});
