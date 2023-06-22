/**
 * 不改变内容，但将内容转化为另一种展示方式
 */

import { getSrotedNumArray } from './script.util';
import { TILE_TYPE } from './type.util';

/**
 * 将同类型的牌归在一起
 * @param pair 一副牌
 * @returns 按类型分好的牌组成的对象
 */
export function groupByType(pair: string) {
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
 * 将各类型的牌合并在一起
 * @param splitedPair groupByType方法的返回值类型
 * @returns 一副牌
 */
export function mergeWithType(splitedPair: ReturnType<typeof groupByType>) {
  return Object.entries(splitedPair)
    .map(([type, partial]) => {
      return partial ? partial + type : '';
    })
    .join('');
}

/**
 * 将散乱的一副牌整理一下
 * @param tiles 一副牌
 */
export function autoSortingTiles(tiles: string) {
  const grouped = groupByType(tiles);
  for (const key in grouped) {
    const digits = grouped[key as TILE_TYPE];
    grouped[key as TILE_TYPE] = getSrotedNumArray(digits).join('');
  }
  return mergeWithType(grouped);
}
