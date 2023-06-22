import { getAnalyseResult } from './analyse.util';
import { isBoth, isEdge, isThreshold } from './is.util';
import { getSrotedNumArray } from './script.util';
import { splitTiles } from './split.util';

/**
 * 获取两面搭子的进张
 * @param tiles 两面搭子
 */
export function getMatchesOfBoth(tiles: string): string[] {
  if (!isBoth(tiles)) {
    return [];
  }
  const [digits, type] = splitTiles(tiles);
  const [a, b] = getSrotedNumArray(digits);
  return [a - 1 + type, b + 1 + type];
}

/**
 * 获取坎张搭子的进张
 * @param tiles 坎张搭子
 */
export function getMatchesOfThreshold(tiles: string): string[] {
  if (!isThreshold(tiles)) {
    return [];
  }
  const [digits, type] = splitTiles(tiles);
  const [a] = getSrotedNumArray(digits);
  return [a + 1 + type];
}

/**
 * 获取边张搭子的进张
 * @param tiles 边张搭子
 */
export function getMatchesOfEdge(tiles: string): string[] {
  if (!isEdge(tiles)) {
    return [];
  }
  const [digits, type] = splitTiles(tiles);
  if (digits === '12' || digits === '21') {
    return ['3' + type];
  }
  if (digits === '89' || digits === '98') {
    return ['7' + type];
  }
  return [];
}

/**
 * 获取搭子的所有进张
 * @param partner 搭子
 * @returns 所有进张组成的数组
 */
export function getMatchesOfPartner(partner: string): string[] {
  if (isEdge(partner)) {
    return getMatchesOfEdge(partner);
  } else if (isThreshold(partner)) {
    return getMatchesOfThreshold(partner);
  } else if (isBoth(partner)) {
    return getMatchesOfBoth(partner);
  }
  return [];
}

/**
 * 获取一副牌所有可胡的牌
 * @param tiles 一副牌
 */
export function getMatchesOfSuccess(tiles: string): string[] {
  const set: Set<string> = new Set();
  const pairs = getAnalyseResult(tiles);
  pairs.forEach(pair => {
    pair.getMatchesOfSuccess().forEach(s => set.add(s));
  });
  return Array.from(set);
}

/**
 * 获取一副牌的向听数
 * @param tiles 一副牌
 * @returns 向听数
 */
export function getMatchNumOfReady(tiles: string): number {
  const pairs = getAnalyseResult(tiles);
  let minMatchNum = 8;
  pairs.forEach(pair => {
    const matchNum = pair.getMatchNumOfReady();
    if (matchNum < minMatchNum) {
      minMatchNum = matchNum;
    }
  });
  return minMatchNum;
}
