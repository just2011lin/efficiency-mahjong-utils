import { TILE_TYPE, TripleGroupTree } from './type.util';

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

/**
 * 将同种数牌或字牌，拆分为三个一组的全部可能性
 * @param samePair 不包含结尾的类型的1-9数字字符串
 */
export function triplePairs(samePair: string): TripleGroupTree[] {
  if (samePair.length <= 3) {
    return [{ value: samePair }];
  }
  const length = samePair.length;
  const triples: TripleGroupTree[] = [];
  let a = 0;
  let b = 1;
  let c = 2;

  let aCard = samePair[a];
  let bCard = samePair[b];
  let cCard = samePair[c];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const tst: TripleGroupTree = {
      value: aCard + bCard + cCard,
    };
    const leftStr = getLeftStr(samePair, a, b, c);
    if (leftStr) {
      tst.children = triplePairs(leftStr);
    }
    triples.push(tst);
    c++;
    if (c === length) {
      b++;
      c = b + 1;
    }
    if (b > length - 2) {
      a++;
      b = a + 1;
      c = b + 1;
    }
    if (a > length - 3) {
      break;
    }
    aCard = samePair[a];
    bCard = samePair[b];
    cCard = samePair[c];
  }

  return triples;
}

export function flatmapTrileGroupTree(
  data: TripleGroupTree,
  stack: string[] = [],
  strs: string[][] = [],
) {
  if (data.children) {
    stack.push(data.value);
    data.children.forEach(child => {
      flatmapTrileGroupTree(child, [...stack], strs);
    });
  } else {
    strs.push([...stack, data.value]);
  }
  return strs;
}

/**
 * 获取移除了abc位置字符的字符串
 */
function getLeftStr(str: string, a: number, b: number, c: number) {
  const aLeft = str.slice(0, a);
  const bLeft = str.slice(a + 1, b);
  const cLeft = str.slice(b + 1, c);
  const left = str.slice(c + 1);
  return aLeft + bLeft + cLeft + left;
}

/**
 *
 * @param partial 部分牌
 * @param sizeArr 拆分后每部分的数量，比如[2,3]表示拆分为两张和一个三张
 */
// export function randomSplit(partial: string, sizeArr: number[]) {}

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
