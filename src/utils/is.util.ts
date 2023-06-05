import { TILE_TYPE } from './type.util';

/**
 * 判断是否刚好是一组面子牌
 * @param partial 面子牌
 */
export function isFace(partial: string, type?: TILE_TYPE): boolean {
  return isSequence(partial, type) || isTriplet(partial);
}

/**
 * 判断部分牌是不是一个顺子
 * @param partial 部分牌
 * @param type 牌的类型
 * @returns true表示这部分牌是一个顺子
 */
export function isSequence(partial: string, type?: TILE_TYPE) {
  // 不能是字牌，张数要为3
  if (type === TILE_TYPE.Z || partial.length !== 3) {
    return false;
  }
  // 取数
  let [a, b, c] = partial.split('').map(Number);
  // 大小交换
  if (a > b) {
    [a, b] = [b, a];
  }
  if (b > c) {
    [b, c] = [c, b];
  }
  if (a > b) {
    [a, b] = [b, a];
  }
  return a + 1 === b && b + 1 === c;
}

/**
 * 判断部分牌是不是一个刻子
 * @param partial 部分牌
 * @param type 牌的配型
 * @returns true表示这部分牌是一个刻子
 */
export function isTriplet(partial: string) {
  if (partial.length !== 3) {
    return false;
  }
  const [a, b, c] = partial;
  return a === b && b === c;
}
