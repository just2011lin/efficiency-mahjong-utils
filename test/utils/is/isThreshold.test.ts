import { describe, expect, test } from '@jest/globals';
import { isThreshold } from '../../../src/utils/is.util';

describe('isThreshold,是否为坎张搭子方法测试', () => {
  test('13m是一个坎张搭子', () => {
    expect(isThreshold('13m')).toBe(true);
  });
  test('53s是一个坎张搭子', () => {
    expect(isThreshold('53s')).toBe(true);
  });
});
