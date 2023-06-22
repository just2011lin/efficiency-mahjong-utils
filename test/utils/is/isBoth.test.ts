import { describe, expect, test } from '@jest/globals';
import { isBoth } from '../../../src';

describe('isBoth,是否为两面搭子方法测试', () => {
  test('23s是一个两面搭子', () => {
    expect(isBoth('23s')).toBe(true);
  });
  test('54s是一个两面搭子', () => {
    expect(isBoth('54s')).toBe(true);
  });
  test('空字符串不是一个两面搭子', () => {
    expect(isBoth('')).toBe(false);
  });
  test('5不是一个两面搭子', () => {
    expect(isBoth('5')).toBe(false);
  });
  test('56不是一个两面搭子', () => {
    expect(isBoth('56')).toBe(false);
  });
  test('56q不是一个两面搭子', () => {
    expect(isBoth('56q')).toBe(false);
  });
  test('111s不是一个两面搭子', () => {
    expect(isBoth('111s')).toBe(false);
  });
  test('12s不是一个两面搭子', () => {
    expect(isBoth('12s')).toBe(false);
  });
  test('89s不是一个两面搭子', () => {
    expect(isBoth('89s')).toBe(false);
  });
  test('13s不是一个两面搭子', () => {
    expect(isBoth('13s')).toBe(false);
  });
});
