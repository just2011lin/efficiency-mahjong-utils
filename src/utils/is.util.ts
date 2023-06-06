import { splitOutDouble, splitOutFace, splitPair } from './deal.util';
import { TILE_TYPE } from './type.util';

/**
 * 判断是否刚好是一组面子牌
 * @param partial 面子牌
 */
export function isFace(partial: string, type: TILE_TYPE): boolean {
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
  if (type === 'z' || partial.length !== 3) {
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
export function isDouble(partial: string) {
  return isPartialSame(partial, 2);
}

/**
 * 是否是杠子
 */
export function isFourfold(partial: string) {
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

/**
 * 是否为两面搭子
 * @param partial 部分牌，主要为两张
 */
export function isBothPartner(partial: string) {
  if (partial.length !== 2) {
    return false;
  }
  const [a, b] = partial;
  const res = Number(a) + 1 === Number(b) || Number(a) - 1 === Number(b);
  return res && a !== '1' && b !== '1' && a !== '9' && b !== '9';
}

/**
 * 是否为坎张搭子
 * @param partial 部分牌，主要为两张
 */
export function isThresholdPartner(partial: string) {
  if (partial.length !== 2) {
    return false;
  }
  const [a, b] = partial;
  return Number(a) + 2 === Number(b) || Number(a) - 2 === Number(b);
}

/**
 * 是否为边张搭子
 * @param partial 部分牌，主要为两张
 */
export function isEdgePartner(partial: string) {
  if (partial.length !== 2) {
    return false;
  }
  return (
    partial === '12' || partial === '21' || partial === '89' || partial === '98'
  );
}

/**
 * 这些牌是否都组成了面子
 * @param partial 部分牌
 * @param type 牌的类型
 */
export function isAllFace(partial: string, type: TILE_TYPE): boolean {
  if (partial.length % 3 !== 0) {
    return false;
  }
  const splitedOutFaceResults = splitOutFace(partial, type);
  return splitedOutFaceResults.some(([, left]) => {
    return left === '' || isAllFace(left, type);
  });
}

/**
 * 是否胡了
 * @param pair 一副牌（假设5张）
 */
export function isHule(pair: string) {
  const splitedPair = splitPair(pair);
  let headNum = 0;
  const res = Object.entries(splitedPair).every(([type, partial]) => {
    const length = partial.length;
    // 没有这个牌
    if (length === 0) {
      return true;
    }
    // 一个对子
    else if (length === 2) {
      headNum++;
      return isDouble(partial);
    }
    // 对子 + n个面子
    else if ((length - 2) % 3 == 0) {
      headNum++;
      const splitedOutDoubleResults = splitOutDouble(partial);
      return splitedOutDoubleResults.some(([, left]) =>
        isAllFace(left, type as TILE_TYPE),
      );
    }
    // n个面子
    else if (length % 3 === 0) {
      return isAllFace(partial, type as TILE_TYPE);
    }
    return false;
  });
  return headNum === 1 && res;
}
