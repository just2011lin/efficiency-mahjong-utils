import { TILE_TYPE, TripleGroupTree } from "../type";

// 拆分手牌，将相同类型的牌归在一起
export function splitPair(pair: string) {
  let types = ["s", "m", "p", "z"];
  const pairCards = {
    s: "",
    m: "",
    p: "",
    z: "",
  };
  let tempStr = "";
  for (let card of pair) {
    if (types.includes(card)) {
      pairCards[card as TILE_TYPE] += tempStr;
      tempStr = "";
    } else {
      tempStr += card;
    }
  }
  return pairCards;
}

/**
 * 判断是否刚好是一组面子牌
 * @param faceCard 面子牌
 */
export function isFace(faceCard: string, type?: string): boolean {
  if (faceCard.length !== 3) {
    return false;
  }
  let [a, b, c] = faceCard;
  if (a === b && b === c) {
    return true;
  }
  if (type === "z") {
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
  strs: string[][] = []
) {
  if (data.children) {
    stack.push(data.value);
    data.children.forEach((child) => {
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
