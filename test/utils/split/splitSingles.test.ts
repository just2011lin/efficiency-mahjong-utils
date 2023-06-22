import { describe, expect, test } from '@jest/globals';
import { splitSingles } from '../../../src/utils/split.util';

describe('splitSingles 将一副牌中的每一个都拆为一个单张', () => {
  test('拆分69m36z8m', () => {
    expect(splitSingles('69m36z8m')).toEqual(['6m', '9m', '3z', '6z', '8m']);
  });

  test('拆分空字符串', () => {
    expect(splitSingles('')).toEqual([]);
  });

  test('拆分2z', () => {
    expect(splitSingles('2z')).toEqual(['2z']);
  });
});
