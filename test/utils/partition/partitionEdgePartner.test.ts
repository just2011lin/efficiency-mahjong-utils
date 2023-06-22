import { describe, expect, test } from '@jest/globals';
import { partitionEdgePartner } from '../../../src/utils/partition.util';

describe('partitionEdgePartner 从一副牌中拆出边张搭子和剩余的牌', () => {
  test('拆分22345s中的2', () => {
    expect(partitionEdgePartner('22345', '2', 's')).toEqual(undefined);
  });
  test('拆分1s中的1', () => {
    expect(partitionEdgePartner('1', '1', 's')).toEqual(undefined);
  });
  test('拆分11s中的1', () => {
    expect(partitionEdgePartner('11', '1', 's')).toEqual(undefined);
  });
  test('拆分113s中的1', () => {
    expect(partitionEdgePartner('113', '1', 's')).toEqual(undefined);
  });
  test('拆分1133s中的1', () => {
    expect(partitionEdgePartner('1133', '1', 's')).toEqual(undefined);
  });
  test('拆分123s中的1', () => {
    expect(partitionEdgePartner('123', '1', 's')).toEqual(['12', '3']);
  });
  test('拆分22231z中的2', () => {
    expect(partitionEdgePartner('22231', '2', 'z')).toEqual(undefined);
  });
  test('拆分22221s中的2', () => {
    expect(partitionEdgePartner('22221', '2', 's')).toEqual(undefined);
  });
  test('拆分7789s中的8', () => {
    expect(partitionEdgePartner('7789', '8', 's')).toEqual(['89', '77']);
  });
  test('拆分6689s中的9', () => {
    expect(partitionEdgePartner('6689', '9', 's')).toEqual(undefined);
  });
});
