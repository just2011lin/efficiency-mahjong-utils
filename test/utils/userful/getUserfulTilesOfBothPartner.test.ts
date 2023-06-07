import { describe, expect, test } from '@jest/globals';
import { getUserfulTilesOfBothPartner } from '../../../src/utils/userful.util';

describe('getUserfulTilesOfBothPartner,获取两面搭子的所有进张', () => {
  test('34的进张为2和5', () => {
    expect(getUserfulTilesOfBothPartner('34')).toEqual(['2', '5']);
  });

  test('76的进张为5和8', () => {
    expect(getUserfulTilesOfBothPartner('76')).toEqual(['5', '8']);
  });

  test('79不是两面搭子，没有两面进张', () => {
    expect(getUserfulTilesOfBothPartner('79')).toEqual([]);
  });
});
