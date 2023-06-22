/**
 * 拆分数张同类型牌为数字和类型
 * @param tiles 数张同类型牌
 * @returns [digits, type]
 * @example splitTiles('225m') => ['225', 'm']
 */
export function splitTiles(tiles: string) {
  const type = tiles.slice(-1);
  const digits = tiles.slice(0, -1);
  return [digits, type];
}

/**
 * 将一副牌中的每一个都拆为一个单张
 * @param pair 一副牌
 * @returns 单张数组:['1s', '2z', '5p']
 */
export function splitSingles(pair: string): string[] {
  const result: string[] = [];
  let chars: string[] = [];
  for (const s of pair) {
    if (!Number.isNaN(Number(s))) {
      chars.push(s);
    } else {
      result.push(...chars.map(char => char + s));
      chars = [];
    }
  }
  return result;
}
