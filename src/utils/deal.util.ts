/**
 * 对内容进行处理，要返回一个与先前不同的内容
 */

import {
  PartitionFn,
  partitionBothPartner,
  partitionDouble,
  partitionEdgePartner,
  partitionTriplet,
  partitionSequence,
  partitionThresholdPartner,
} from './partition.util';
import { getSrotedNumArray } from './script.util';
import { splitTiles } from './split.util';

import { groupByType, mergeWithType } from './transform.util';
import { TILE_TYPE } from './type.util';

/**
 * 摸入并打出一张牌
 * @param tiles 一副牌
 * @param tileTobeRemoved 被移除的牌
 * @param tileToBeAdded 被添加的牌
 * @returns 处理后的一副牌
 */
export function replaceTile(
  tiles: string,
  tileTobeRemoved: string,
  tileToBeAdded: string,
) {
  const grouped = groupByType(tiles);
  let [digit, type] = splitTiles(tileTobeRemoved) as [string, TILE_TYPE];
  grouped[type] = grouped[type].replace(digit, '');
  [digit, type] = splitTiles(tileToBeAdded) as [string, TILE_TYPE];
  grouped[type] = grouped[type] + digit;
  grouped[type] = getSrotedNumArray(grouped[type]).join('');
  return mergeWithType(grouped);
}

/**
 * 创建从同类型牌中取出某一部分的方法（返回所有情况）
 * @param sliceFns 取出某一部分的方法
 * @returns (pair: string, type: TILE_TYPE) => [[splited, left]]
 */
function createSplitOut(sliceFn: PartitionFn) {
  return (partial: string, type: TILE_TYPE) => {
    const results: Array<[string, string]> = [];
    const addedSet: Set<string> = new Set();
    for (const s of partial) {
      if (addedSet.has(s)) {
        continue;
      }
      addedSet.add(s);
      const result = sliceFn(partial, s, type);
      if (result) {
        results.push(result);
      }
    }
    return results;
  };
}

/**
 * 创建从一副牌中取出某一部分的方法（返回所有情况）
 * @param sliceFns 取出某一部分的方法
 * @returns (pair: string) => [[splited, left]]
 */
function createSplitOutOfPair(sliceFns: PartitionFn[]) {
  return (pair: string): [string, string][] => {
    const result: [string, string][] = [];
    const splitedPair = groupByType(pair);
    sliceFns.forEach(sliceFn => {
      const splitOutFn = createSplitOut(sliceFn);
      Object.entries(splitedPair).map(([type, partial]) => {
        const splitOutResult = splitOutFn(partial, type as TILE_TYPE);
        splitOutResult.forEach(([sliced, left]) => {
          result.push([
            sliced + type,
            mergeWithType({ ...splitedPair, [type]: left }),
          ]);
        });
      });
    });
    return result;
  };
}

/**
 * 移除一副牌中的一个面子，返回所有可能结果
 * @param pair 一副牌
 */
export const splitOutFaceOfPair = createSplitOutOfPair([
  partitionTriplet,
  partitionSequence,
]);

/**
 * 移除一副牌中的一个对子，返回所有情况
 * @param pair 一副牌
 */
export const splitOutDoubleOfPair = createSplitOutOfPair([partitionDouble]);

/**
 * 移除一副牌中的一个搭子（包括两面、坎张和边张搭子），返回所有情况
 * @param pair 一副牌
 */
export const splitOutPartnerOfPair = createSplitOutOfPair([
  partitionBothPartner,
  partitionThresholdPartner,
  partitionEdgePartner,
]);
