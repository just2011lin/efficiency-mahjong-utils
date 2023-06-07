import { describe, expect, test } from '@jest/globals';
import { getUserfulTilesOfOneLeftPair } from '../../../src/utils/userful.util';

describe('getUserfulTilesOfOneLeftPair,获取两面搭子的所有进张', () => {
  test('44789p11168s77z7s听4p和7z', () => {
    expect(getUserfulTilesOfOneLeftPair('44789p11168s77z7s')).toEqual([
      '4p',
      '7z',
    ]);
  });

  test('1112233467888m听1458m', () => {
    expect(getUserfulTilesOfOneLeftPair('1112233467888m')).toEqual([
      '1m',
      '4m',
      '8m',
      '5m',
    ]);
  });
});
