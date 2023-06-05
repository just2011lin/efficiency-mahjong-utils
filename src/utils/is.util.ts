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
  return isPartialSame(partial, 3);
}

/**
 * 判断是否是对子
 * @param partial 部分牌
 * @returns 是否是对子
 */
export function isPair(partial: string) {
  return isPartialSame(partial, 2);
}

/**
 * 是否是杠子
 */
export function isTick(partial: string) {
  return isPartialSame(partial, 4);
}

/**
 * 判断是否由几张相同的牌组成
 * @param partial 部分牌
 * @param size 数量
 */
function isPartialSame(partial: string, size: number) {
  if (partial.length === size && size >= 2 && size <= 4) {
    const a = partial[0];
    let i = 1;
    while (i < size) {
      if (partial[i] !== a) {
        return false;
      }
      i++;
    }
    return true;
  }
  return false;
}
