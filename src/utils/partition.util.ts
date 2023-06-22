/**
 * 将一个字符串拆分为两个
 * 比如说从112s中拆出[11s, 2s]
 */

import { TILE_TYPE } from './type.util';

export type PartitionFn = (
  partial: string,
  s: string,
  type: TILE_TYPE,
) => [string, string] | undefined;

/**
 * 拆出s的对子
 * @param partial 部分牌（不带类型）
 * @param s 单张
 * @returns 拆之后的结果:[double, left]
 * @example partitionDouble('2234', '2', 'z') => ['22', '34]
 */
export function partitionDouble(
  partial: string,
  s: string,
): [string, string] | undefined {
  const length = partial.length;
  const left = partial.replace(new RegExp(s, 'g'), '');
  const disLength = length - left.length;
  if (disLength > 1) {
    return [s.repeat(2), left.padStart(length - 2, s)];
  }
  return undefined;
}

/**
 * 拆出以s为起始的刻子
 * @param parital 部分牌(不带类型)
 * @param s 数牌
 * @param type 牌的类型
 * @returns 拆后的结果:[face,left]
 * @example partitionTriplet('44456', '4', 's') => ['444', '56']
 */
export function partitionTriplet(
  parital: string,
  s: string,
): [string, string] | undefined {
  const length = parital.length;
  // 先考虑刻子的可能性
  const tripletLeft = parital.replace(new RegExp(s, 'g'), '');
  // 这说明有刻子
  if (length - tripletLeft.length >= 3) {
    return [s.repeat(3), tripletLeft.padStart(length - 3, s)];
  }
  return undefined;
}

/**
 * 拆出以s为起始的顺子
 * @param parital 部分牌(不带类型)
 * @param s 数牌
 * @param type 牌的类型
 * @returns 拆后的结果:[face,left]
 * @example partitionSequence('44456', '4', 's') => ['456', '44']
 */
export function partitionSequence(
  parital: string,
  s: string,
  type: TILE_TYPE,
): [string, string] | undefined {
  // 如果类型是字牌，则不需要考虑顺子的可能性
  if (type === 'z') {
    return undefined;
  }
  // 如果是数牌8或9则跳过
  if (s === '8' || s === '9') {
    return undefined;
  }
  // 找到s+1的下一个数
  const nS = String(Number(s) + 1);
  // 找到s+2的数
  const nnS = String(Number(s) + 2);
  if (parital.includes(nS) && parital.includes(nnS)) {
    const sequenceLeft = parital
      .replace(s, '')
      .replace(nS, '')
      .replace(nnS, '');
    return [s + nS + nnS, sequenceLeft];
  }
  return undefined;
}

/**
 * 拆出以s为起始的两面搭子（不包括边张搭子）
 * @param parital 部分牌(不带类型)
 * @param s 数牌
 * @param type 牌的类型
 * @returns 拆后的结果:[bothPartner,left]
 * @example partitionBothPartner('4567', '5', 's') => ['56', '47']
 */
export function partitionBothPartner(
  parital: string,
  s: string,
  type: TILE_TYPE,
): [string, string] | undefined {
  if (s === '1' || s === '8' || s === '9' || type === 'z') {
    return undefined;
  }
  const nS = String(Number(s) + 1);
  if (parital.includes(nS)) {
    return [s + nS, parital.replace(s, '').replace(nS, '')];
  }
  return undefined;
}

/**
 * 拆出以s为起始的边张搭子
 * @param parital 部分牌(不带类型)
 * @param s 数牌
 * @param type 牌的类型
 * @returns 拆后的结果:[edge,left]
 * @example partitionEdgePartner('1234', '1', 's') => ['12', '34']
 */
export function partitionEdgePartner(
  parital: string,
  s: string,
  type: TILE_TYPE,
): [string, string] | undefined {
  if ((s !== '8' && s !== '1') || type === 'z') {
    return undefined;
  }
  const nns = String(Number(s) + 1);
  if (parital.includes(nns)) {
    return [s + nns, parital.replace(s, '').replace(nns, '')];
  }
  return undefined;
}

/**
 * 拆出以s为起始的坎张搭子
 * @param parital 部分牌(不带类型)
 * @param s 数牌
 * @param type 牌的类型
 * @returns 拆后的结果:[threshold,left]
 * @example partitionFace('4567', '5', 's') => ['57s', '46s']
 */
export function partitionThresholdPartner(
  parital: string,
  s: string,
  type: TILE_TYPE,
): [string, string] | undefined {
  if (s === '8' || s === '9' || type === 'z') {
    return undefined;
  }
  const nns = String(Number(s) + 2);
  if (parital.includes(nns)) {
    return [s + nns, parital.replace(s, '').replace(nns, '')];
  }
  return undefined;
}
