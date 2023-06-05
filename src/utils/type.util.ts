export enum TILE_TYPE {
  // 万子
  M = 'm',
  // 索子
  S = 's',
  // 饼子
  P = 'p',
  // 字牌
  Z = 'z',
}

/**
 * 三三组合的树结构
 */
export interface TripleGroupTree {
  value: string;
  children?: TripleGroupTree[];
}
