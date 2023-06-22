import { getAnalyseResult } from './analyse.util';
import { getSrotedNumArray, isSizeDigits } from './script.util';
import { splitTiles } from './split.util';
import { NUM_TYPES, TYPES, WORD_TYPE } from './type.util';

/**
 * 类型字符是正确的
 * @param type 类型字符
 */
export function isType(type: string) {
  return TYPES.includes(type);
}

/**
 * 类型字符是数牌类型
 * @param type 类型字符
 */
export function isNumType(type: string) {
  return NUM_TYPES.includes(type);
}

/**
 * 类型字符是字牌类型
 * @param type 类型字符
 */
export function isWordType(type: string) {
  return WORD_TYPE === type;
}

/**
 * 判断是否刚好是一组面子牌
 * @param tiles 数张同类型的牌
 */
export function isFace(tiles: string): boolean {
  return isSequence(tiles) || isTriplet(tiles);
}

/**
 * 判断部分牌是不是一个顺子
 * @param tiles 数张同类型的牌
 * @returns true表示这部分牌是一个顺子
 */
export function isSequence(tiles: string) {
  const [digits, type] = splitTiles(tiles);
  // 不能是字牌，张数要为3
  if (!isNumType(type) || digits.length !== 3) {
    return false;
  }
  // 取数
  const [a, b, c] = getSrotedNumArray(digits);
  return a + 1 === b && b + 1 === c;
}

/**
 * 判断部分牌是不是一个刻子
 * @param tiles 数张同类型的牌
 * @returns true表示这部分牌是一个刻子
 */
export function isTriplet(tiles: string) {
  const [digits, type] = splitTiles(tiles);
  return isType(type) && isSizeDigits(digits, 3);
}

/**
 * 判断是否是对子
 * @param tiles 数张同类型的牌
 * @returns 是否是对子
 */
export function isDouble(tiles: string) {
  const [digits, type] = splitTiles(tiles);
  return isType(type) && isSizeDigits(digits, 2);
}

/**
 * 是否是杠子
 * @param tiles 数张同类型的牌
 * @returns true表示为杠子
 */
export function isFourfold(tiles: string) {
  const [digits, type] = splitTiles(tiles);
  return isType(type) && isSizeDigits(digits, 4);
}

/**
 * 是否为两面搭子
 * @param tiles 数张同类型的牌
 */
export function isBoth(tiles: string) {
  const [digits, type] = splitTiles(tiles);
  if (digits.length !== 2 || !isNumType(type)) {
    return false;
  }
  const [a, b] = getSrotedNumArray(digits);
  return a + 1 === b && a !== 1 && a !== 8;
}

/**
 * 是否为坎张搭子
 * @param tiles 数张同类型的牌
 */
export function isThreshold(tiles: string) {
  const [digits, type] = splitTiles(tiles);
  if (digits.length !== 2 || !isNumType(type)) {
    return false;
  }
  const [a, b] = getSrotedNumArray(digits);
  return a + 2 === b;
}

/**
 * 是否为边张搭子
 * @param tiles 数张同类型的牌
 */
export function isEdge(tiles: string) {
  const [digits, type] = splitTiles(tiles);
  if (digits.length !== 2 || !isNumType(type)) {
    return false;
  }
  return ['12', '21', '89', '98'].includes(digits);
}

/**
 * 是否是两张牌组成的搭子
 * 搭子的特点是两个数差值的绝对值为1或2
 * @param tiles 数张同类型的牌
 */
export function isPartner(tiles: string) {
  const [digits, type] = splitTiles(tiles);
  if (digits.length !== 2 || !isNumType(type)) {
    return false;
  }
  const [a, b] = getSrotedNumArray(digits);
  return a + 1 === b || a + 2 === b;
}

/**
 * 判断是否已经听牌了
 * @param tiles 一副手牌
 */
export function isReady(tiles: string) {
  return getAnalyseResult(tiles).some(p => p.isReady());
}

/**
 * 是否胡了(暂只考虑一般型)
 * @param tiles 一副手牌+胡牌
 */
export function isSuceess(tiles: string) {
  // 使用Pair对象分析此代码
  return getAnalyseResult(tiles).some(r => r.isSucess());
}
