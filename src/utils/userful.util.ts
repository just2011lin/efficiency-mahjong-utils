import { splitOutDouble, splitOutFace, splitPair } from './deal.util';
import {
  isBothPartner,
  isDouble,
  isEdgePartner,
  isHule,
  isThresholdPartner,
} from './is.util';
import { TILE_TYPE } from './type.util';

/**
 * 获取两面搭子的进张
 * @param bothPartner 两面搭子
 */
export function getUserfulTilesOfBothPartner(bothPartner: string): string[] {
  const [a, b] = bothPartner;
  const an = Number(a);
  const bn = Number(b);
  if (an < bn) {
    return an + 1 === bn ? [an - 1 + '', bn + 1 + ''] : [];
  } else {
    return bn + 1 === an ? [bn - 1 + '', an + 1 + ''] : [];
  }
}

/**
 * 获取坎张搭子的进张
 * @param thresholdPartner 坎张搭子
 */
export function getUserfulTilesOfThresholdPartner(
  thresholdPartner: string,
): string[] {
  const [a, b] = thresholdPartner;
  const an = Number(a);
  const bn = Number(b);
  if (an < bn) {
    return an + 2 === bn ? [an + 1 + ''] : [];
  } else {
    return bn + 2 === an ? [an - 1 + ''] : [];
  }
}

/**
 * 获取边张搭子的进张
 * @param thresholdPartner 边张搭子
 */
export function getUserfulTilesOfEdgePartner(edgePartner: string): string[] {
  if (edgePartner === '12' || edgePartner === '21') {
    return ['3'];
  }
  if (edgePartner === '89' || edgePartner === '98') {
    return ['7'];
  }
  return [];
}

/**
 * 获取搭子的所有进张
 * @param partner 搭子
 * @returns 所有进张组成的数组
 */
export function getUserfulTilesOfPartner(partner: string): string[] {
  if (isEdgePartner(partner)) {
    return getUserfulTilesOfEdgePartner(partner);
  } else if (isThresholdPartner(partner)) {
    return getUserfulTilesOfThresholdPartner(partner);
  } else if (isBothPartner(partner)) {
    return getUserfulTilesOfBothPartner(partner);
  }
  return [];
}

/**
 * 获取听牌时某一类牌可以胡的所有牌
 * @param partial 一副牌中某类型的所有牌
 * @param pair 一副牌
 * @param type 牌的类型
 * @param userfulTiles 可以胡牌的所有种类
 * @returns 进某一类牌时可以胡的所有牌
 */
function getUserfulTilesOfPartial(
  partial: string,
  pair: string,
  type: TILE_TYPE,
  userfulTiles: string[] = [],
): string[] {
  const length = partial.length;
  if (length === 1) {
    userfulTiles.push(partial + type);
  } else if (length === 2) {
    // 判断是否为对子，如果是对子，则可能是双碰听
    if (isDouble(partial) && isHule(pair + partial[0] + type)) {
      userfulTiles.push(partial[0] + type);
    }
    // 如果不是对子，则肯定为搭子听牌
    else if (type !== 'z') {
      userfulTiles.push(
        ...getUserfulTilesOfPartner(partial).map(i => i + type),
      );
    }
  } else if (length % 3 === 1) {
    // 先考虑单骑，这时候其他三个是能够组成一个面子的
    const splitOutFaceResult = splitOutFace(partial, type as TILE_TYPE);
    splitOutFaceResult.forEach(([, left]) => {
      getUserfulTilesOfPartial(left, pair, type, userfulTiles);
    });

    // 再考虑搭子和双碰，这种情况是一个对子+搭子或两个对子
    const splitOutDoubleResult = splitOutDouble(partial);
    splitOutDoubleResult.forEach(([, left]) => {
      getUserfulTilesOfPartial(left, pair, type, userfulTiles);
    });
  } else if (length % 3 === 2) {
    // 取出一个面子
    const splitOutFaceResult = splitOutFace(partial, type as TILE_TYPE);
    splitOutFaceResult.forEach(([, left]) => {
      getUserfulTilesOfPartial(left, pair, type, userfulTiles);
    });
  }
  return userfulTiles;
}

/**
 * 在确定此牌已经听牌时，获取所有可胡的牌
 * @param oneLeftPair 听牌型的牌
 */
export function getUserfulTilesOfOneLeftPair(oneLeftPair: string): string[] {
  const splitedPair = splitPair(oneLeftPair);
  const userfulTiles: string[] = [];
  for (const type of ['m', 's', 'p', 'z']) {
    const partial = splitedPair[type as TILE_TYPE] as string;
    userfulTiles.push(
      ...getUserfulTilesOfPartial(partial, oneLeftPair, type as TILE_TYPE),
    );
  }
  return Array.from(new Set(userfulTiles));
}
