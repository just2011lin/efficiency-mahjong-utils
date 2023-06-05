import { TILE_TYPE } from './type.util';

/**
 * 判断是否刚好是一组面子牌
 * @param faceCard 面子牌
 */
export function isFace(faceCard: string, type?: TILE_TYPE): boolean {
  if (faceCard.length !== 3) {
    return false;
  }
  const [a, b, c] = faceCard;
  if (a === b && b === c) {
    return true;
  }
  if (type === 'z') {
    return false;
  }
  // 转成数字
  let [d, e, f] = [a, b, c].map(Number);
  if (d > e) {
    [d, e] = [e, d];
  }
  if (e > f) {
    [e, f] = [f, e];
  }
  if (d + 1 === e && e + 1 === f) {
    return true;
  }
  return false;
}

/**
 * 判断部分牌是不是一个顺子
 * @param partial 部分牌
 * @param type 牌的类型
 * @returns true表示这部分牌是一个顺子
 */
export function isStraight(partial: string, type?: TILE_TYPE) {
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
