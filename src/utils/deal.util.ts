import { TILE_TYPE } from './type.util';

// 拆分手牌，将相同类型的牌归在一起
export function splitPair(pair: string) {
  const types = ['s', 'm', 'p', 'z'];
  const pairCards = {
    s: '',
    m: '',
    p: '',
    z: '',
  };
  let tempStr = '';
  for (const card of pair) {
    if (types.includes(card)) {
      pairCards[card as TILE_TYPE] += tempStr;
      tempStr = '';
    } else {
      tempStr += card;
    }
  }
  return pairCards;
}

// 连接手牌，将拆分的手牌合并为字符串
export function joinPair(splitedPair: ReturnType<typeof splitPair>) {
  return Object.entries(splitedPair)
    .map(([type, partial]) => {
      return partial ? partial + type : '';
    })
    .join('');
}

/**
 * 从一副牌中移除部分牌
 * @param partial 部分牌（需带类型）
 * @param type 牌的类型
 * @param pair 一副牌
 */
export function removePartialFromPair(
  partial: string,
  type: TILE_TYPE,
  pair: string,
) {
  const splitedPair = splitPair(pair);
  let result = splitedPair[type];
  for (const p of partial) {
    result = result.replace(p, '');
  }
  splitedPair[type] = result;
  return joinPair(splitedPair);
}

/**
 * 从一副牌中拆出对子和剩余的牌
 * @param partial 一副牌
 * @returns Array<[double, left]>
 */
export function splitOutDouble(partial: string): Array<[string, string]> {
  const results: Array<[string, string]> = [];
  const addedSet: Set<string> = new Set();
  const length = partial.length;
  for (const s of partial) {
    if (addedSet.has(s)) {
      continue;
    }
    addedSet.add(s);
    const left = partial.replace(new RegExp(s, 'g'), '');
    const disLength = length - left.length;
    if (disLength > 1) {
      results.push([s.repeat(2), left.padStart(length - 2, s)]);
    }
  }
  return results;
}

/**
 * 从一副牌中拆出面子和剩余的牌
 * @param parital 一副牌
 * @param type 牌的类型
 */
export function splitOutFace(
  parital: string,
  type: TILE_TYPE,
): Array<[string, string]> {
  const results: Array<[string, string]> = [];
  const addedNumSet: Set<string> = new Set();
  const length = parital.length;
  for (const s of parital) {
    if (addedNumSet.has(s)) {
      continue;
    }
    addedNumSet.add(s);
    // 先考虑刻子的可能性
    const tripletLeft = parital.replace(new RegExp(s, 'g'), '');
    // 这说明有刻子
    if (length - tripletLeft.length >= 3) {
      results.push([s.repeat(3), tripletLeft.padStart(length - 3, s)]);
    }
    // 如果类型是字牌，则不需要考虑顺子的可能性
    if (type === 'z') {
      continue;
    }
    // 如果是数牌8或9则跳过
    if (s === '8' || s === '9') {
      continue;
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
      results.push([s + nS + nnS, sequenceLeft]);
    }
  }
  return results;
}

/**
 * 移除一副牌中的一个面子，返回所有可能结果
 * @param pair 一副牌
 */
export function splitOutFaceOfPair(pair: string): string[][] {
  const result: string[][] = [];
  const splitedPair = splitPair(pair);
  Object.entries(splitedPair).map(([type, partial]) => {
    const splitOutFaceResult = splitOutFace(partial, type as TILE_TYPE);
    splitOutFaceResult.forEach(([face, left]) => {
      result.push([face + type, joinPair({ ...splitedPair, [type]: left })]);
    });
  });
  return result;
}

export function splitOutDoubleOfPair(pair: string): string[][] {
  const result: string[][] = [];
  const splitedPair = splitPair(pair);
  Object.entries(splitedPair).map(([type, partial]) => {
    const splitOutDoubleResult = splitOutDouble(partial);
    splitOutDoubleResult.forEach(([double, left]) => {
      result.push([double + type, joinPair({ ...splitedPair, [type]: left })]);
    });
  });
  return result;
}
