// import { TripleGroupTree } from './type';
import {
  flatmapTrileGroupTree,
  isFace,
  splitPair,
  triplePairs,
} from './utils/deal.util';

function createCards(num: number, type: string) {
  return new Array(num).fill('').map((val, index) => `${index + 1}${type}`);
}

// 索子牌
const sCards = createCards(9, 's');

// 饼子牌
const pCards = createCards(9, 'p');

// 万子牌
const mCards = createCards(9, 'm');

// 字牌
const zCards = createCards(7, 'z');

// 一副牌
const onePair = '23s133m456789p11z';

// 计算出哪些牌是上述牌的进张
// isPairFowardCard(onePair, "2m");

// 判断card是否是pair的进张
// function isPairFowardCard(pair, inCard) {
//   // 获取摸牌的类型
//   const cardType = inCard[1];
//   // 如果手牌没有与摸牌类型相同的牌
//   // 则其显然不是进张
//   if (!pair.includes(cardType)) {
//     return false;
//   }
//   // 找出手牌中与摸牌同类型的牌
//   const pairCard = splitPair(onePair);
//   const sameCard = pairCard[cardType];
// //   isCardCanStay(sameCard, inCard);
// }

/**
 * 判断进张是否可以留下
 * @param {string} sameCard 同种数牌或字牌
 * @param {string} inCard 进张
 */
// function isCardCanStay(sameCard, inCard) {
//   console.log(sameCard, inCard);
// }

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
  console.log(facedStrs);
}

createFaceObjs('1112341');
