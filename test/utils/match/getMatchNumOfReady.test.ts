import { getMatchNumOfReady } from '../../../src/utils/match.util';
import { describe, expect, test } from '@jest/globals';

describe('getMatchNumOfReady 计算一副牌的向听数', () => {
  test('1m7p3s4z6p的向听数为1', () => {
    expect(getMatchNumOfReady('1m7p3s4z6p')).toBe(1);
  });
  test('18m7s6z9p的向听数为2', () => {
    expect(getMatchNumOfReady('18m7s6z9p')).toBe(2);
  });
  test('8p136s334z8s的向听数为1', () => {
    expect(getMatchNumOfReady('8p136s334z8s')).toBe(1);
  });
  test('256m22p14s4z的向听数为2', () => {
    expect(getMatchNumOfReady('256m22p14s4z')).toBe(2);
  });
  test('3m9p1125s16z的向听数为3', () => {
    expect(getMatchNumOfReady('3m9p1125s16z')).toBe(3);
  });
  test('3678m1388s45z1m的向听数为1', () => {
    expect(getMatchNumOfReady('3678m1388s45z1m')).toBe(1);
  });
  test('279m23p17789s2p的向听数为2', () => {
    expect(getMatchNumOfReady('279m23p17789s2p')).toBe(2);
  });
  test('58m249p567s45z6s的向听数为3', () => {
    expect(getMatchNumOfReady('58m249p567s45z6s')).toBe(3);
  });
  test('3558m12p4s146z1p的向听数为4', () => {
    expect(getMatchNumOfReady('3558m12p4s146z1p')).toBe(4);
  });
  test('123678m677p1236s4s的向听数为0', () => {
    expect(getMatchNumOfReady('123678m677p1236s4s')).toBe(0);
  });
  test('33579m7p34577997s的向听数为1', () => {
    expect(getMatchNumOfReady('33579m7p34577997s')).toBe(1);
  });
  test('1123345m1309p5s7z5p的向听数为2', () => {
    expect(getMatchNumOfReady('1123345m1309p5s7z5p')).toBe(2);
  });
  test('27m14577p23568s22z的向听数为3', () => {
    expect(getMatchNumOfReady('27m14577p23568s22z')).toBe(3);
  });
  test('4589m2367p111z233z的向听数为2', () => {
    expect(getMatchNumOfReady('4589m2367p111z233z')).toBe(2);
  });
  test('124589m2367p111z2z的向听数为3', () => {
    expect(getMatchNumOfReady('124589m2367p111z2z')).toBe(3);
  });
  test('37m1479p3578s123z8m的向听数为4', () => {
    expect(getMatchNumOfReady('37m1479p3578s123z8m')).toBe(4);
  });
});
