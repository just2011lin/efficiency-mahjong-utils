import { splitOutFaceOfPair } from './deal.util';

/**
 * 是否为一向听的牌
 * @param pair 一副牌13张
 */
export function isTwoLeftToHu(pair: string) {
  // 分析：
  // 一向听的意思就是说，一共要组成五个部分，然后有两个部分未能成形
  // 有以下三种可能性：
  // 1、两面一对两搭：两个面子+两个搭子+一个对子+一张要打出的牌
  // 2、三面一搭：三个面子+一个搭子+两个单张
  // 3、三面一对：有三个面子+对子，少一个搭子
  // ---------------------------------------------------------
  // 不管怎么说，可以先考虑移除两个面子后再做判断（可能有多种情况）
  // 判断剩下的牌是否可以再移除面子，如果可以，则说明是情况2
  const oneFaceRemovedPairs: string[] = splitOutFaceOfPair(pair);
  const twoFaceRemovedPairs: string[] = [];
  oneFaceRemovedPairs.forEach(oneFaceRemovedPair => {
    twoFaceRemovedPairs.push(...splitOutFaceOfPair(oneFaceRemovedPair));
  });
  console.log('twoFaceRemovedPairs', twoFaceRemovedPairs);
  // 判断有没有对子，如果有对子，则表明是情况1和3，没有对子则只可能是情况2
  // return twoFaceRemovedPairs.some(pair => {});
}
