import { describe, expect, test } from '@jest/globals';
import { splitOutDouble } from '../../../src/utils/deal.util';

describe('splitOutDouble 从一副牌中拆出对子和剩余的牌', () => {
  test('拆分22345', () => {
    expect(splitOutDouble('22345')).toEqual([['22', '345']]);
  });
  test('拆分1', () => {
    expect(splitOutDouble('1')).toEqual([]);
  });
  test('拆分11', () => {
    expect(splitOutDouble('11')).toEqual([['11', '']]);
  });
  test('拆分113', () => {
    expect(splitOutDouble('113')).toEqual([['11', '3']]);
  });
  test('拆分1133', () => {
    expect(splitOutDouble('1133')).toEqual([
      ['11', '33'],
      ['33', '11'],
    ]);
  });
  test('拆分123', () => {
    expect(splitOutDouble('123')).toEqual([]);
  });
  test('拆分2221', () => {
    expect(splitOutDouble('2221')).toEqual([['22', '21']]);
  });
  test('拆分22221', () => {
    expect(splitOutDouble('22221')).toEqual([['22', '221']]);
  });
  test('拆分223344', () => {
    expect(splitOutDouble('223344')).toEqual([
      ['22', '3344'],
      ['33', '2244'],
      ['44', '2233'],
    ]);
  });
});
