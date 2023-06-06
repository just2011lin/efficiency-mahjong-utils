/** 麻将牌类型 */
export type TILE_TYPE = 'm' | 's' | 'p' | 'z';

/**
 * 三三组合的树结构
 */
export interface TripleGroupTree {
  value: string;
  children?: TripleGroupTree[];
}
