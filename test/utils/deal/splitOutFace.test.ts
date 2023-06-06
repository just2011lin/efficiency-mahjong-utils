import { describe, expect, test } from '@jest/globals';
import { splitOutFace } from '../../../src/utils/deal.util';

describe('splitOutFace 从一组数中拆出一个面子和剩余的牌（所有组合）', () => {
  test('拆分22345', () => {
    expect(splitOutFace('22345', 'm')).toEqual([
      ['234', '25'],
      ['345', '22'],
    ]);
  });
  test('拆分1', () => {
    expect(splitOutFace('1', 'm')).toEqual([]);
  });
  test('拆分11', () => {
    expect(splitOutFace('11', 'm')).toEqual([]);
  });
  test('拆分113', () => {
    expect(splitOutFace('113', 'm')).toEqual([]);
  });
  test('拆分1133', () => {
    expect(splitOutFace('1133', 'm')).toEqual([]);
  });
  test('拆分123', () => {
    expect(splitOutFace('123', 'm')).toEqual([['123', '']]);
  });
  test('拆分2221', () => {
    expect(splitOutFace('2221', 'm')).toEqual([['222', '1']]);
  });
  test('拆分22221', () => {
    expect(splitOutFace('22221', 'm')).toEqual([['222', '21']]);
  });
  test('拆分223344', () => {
    expect(splitOutFace('223344', 'm')).toEqual([['234', '234']]);
  });
  test('拆分1', () => {
    expect(splitOutFace('1', 'z')).toEqual([]);
  });
  test('拆分11', () => {
    expect(splitOutFace('11', 'z')).toEqual([]);
  });
  test('拆分111', () => {
    expect(splitOutFace('111', 'z')).toEqual([['111', '']]);
  });
  test('拆分11155', () => {
    expect(splitOutFace('11155', 'z')).toEqual([['111', '55']]);
  });
  test('拆分111155', () => {
    expect(splitOutFace('111155', 'z')).toEqual([['111', '155']]);
  });
  test('拆分111555', () => {
    expect(splitOutFace('111555', 'z')).toEqual([
      ['111', '555'],
      ['555', '111'],
    ]);
  });
});
