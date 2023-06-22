import { describe, expect, test } from '@jest/globals';
import { partitionThresholdPartner } from '../../../src/utils/partition.util';

describe('partitionThresholdPartner 从一副牌中拆出坎张搭子和剩余的牌', () => {
  test('拆分22345s中的2', () => {
    expect(partitionThresholdPartner('22345', '2', 's')).toEqual(['24', '235']);
  });
  test('拆分1s中的1', () => {
    expect(partitionThresholdPartner('1', '1', 's')).toEqual(undefined);
  });
  test('拆分11s中的1', () => {
    expect(partitionThresholdPartner('11', '1', 's')).toEqual(undefined);
  });
  test('拆分113s中的1', () => {
    expect(partitionThresholdPartner('113', '1', 's')).toEqual(['13', '1']);
  });
  test('拆分1133s中的1', () => {
    expect(partitionThresholdPartner('1133', '1', 's')).toEqual(['13', '13']);
  });
  test('拆分123s中的1', () => {
    expect(partitionThresholdPartner('123', '1', 's')).toEqual(['13', '2']);
  });
  test('拆分22231z中的2', () => {
    expect(partitionThresholdPartner('22231', '2', 'z')).toEqual(undefined);
  });
  test('拆分22221s中的2', () => {
    expect(partitionThresholdPartner('22221', '2', 's')).toEqual(undefined);
  });
  test('拆分223344s中的2', () => {
    expect(partitionThresholdPartner('223344', '2', 's')).toEqual(['24', '2334']);
  });
});
