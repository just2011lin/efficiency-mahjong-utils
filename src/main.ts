import {
  flatmapTrileGroupTree,
  splitOutDouble,
  splitPair,
  triplePairs,
} from './utils/deal.util';

import { isFace, isHule, isSequence } from './utils/is.util';
import { TILE_TYPE } from './utils/type.util';

/**
 * 分析一副牌
 * @param pair 一副牌
 */
function analysePair(pair: string) {
  const splitedPair = splitPair(pair);
  const faceObjs = createFaceObjs(splitedPair.p);
  console.log(faceObjs);
}

/**
 * 找出这副牌中可以组成面子的所有可能性
 * @param cards 同种数牌或字牌
 */
function createFaceObjs(cards: string) {
  // 不够两张牌，是不能组成
  if (cards.length < 3) {
    return [];
  }
  // 三张牌的话，只能这三个组成面子，不能则没有
  if (cards.length === 3) {
    if (isFace(cards)) {
      return [{ faces: [cards], left: [] }];
    } else {
      return [];
    }
  }
  // 大于三张的情况，要从中取出三张，然后看是否为面子，然后再看剩余牌中是否有面子
  const tripleGroups = triplePairs(cards);
  const facedStrs: string[][] = [];
  tripleGroups.forEach(tripleGroup => {
    const strss = flatmapTrileGroupTree(tripleGroup);
    strss.forEach(strs => {
      if (strs.every(str => str.length < 3 || isFace(str))) {
        facedStrs.push(strs);
      }
    });
  });
  return facedStrs;
}

console.log(splitOutDouble('11133'));
