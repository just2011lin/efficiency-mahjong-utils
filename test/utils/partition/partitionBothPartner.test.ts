import { describe, expect, test } from '@jest/globals';
import { partitionBothPartner } from '../../../src/utils/partition.util';

describe('partitionBothPartner 从一副牌中拆出两面搭子和剩余的牌', () => {
  test('拆分22345s中的2', () => {
    expect(partitionBothPartner('22345', '2', 's')).toEqual(['23', '245']);
  });
  test('拆分1s中的1', () => {
    expect(partitionBothPartner('1', '1', 's')).toEqual(undefined);
  });
  test('拆分11s中的1', () => {
    expect(partitionBothPartner('11', '1', 's')).toEqual(undefined);
  });
  test('拆分113s中的1', () => {
    expect(partitionBothPartner('113', '1', 's')).toEqual(undefined);
  });
  test('拆分1133s中的1', () => {
    expect(partitionBothPartner('1133', '1', 's')).toEqual(undefined);
  });
  test('拆分123s中的1', () => {
    expect(partitionBothPartner('123', '1', 's')).toEqual(undefined);
  });
  test('拆分22231z中的2', () => {
    expect(partitionBothPartner('22231', '2', 'z')).toEqual(undefined);
  });
  test('拆分22221s中的2', () => {
    expect(partitionBothPartner('22221', '2', 's')).toEqual(undefined);
  });
  test('拆分223344s中的2', () => {
    expect(partitionBothPartner('223344', '2', 's')).toEqual(['23', '2344']);
  });
});
