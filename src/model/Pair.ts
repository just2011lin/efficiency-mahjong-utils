/**
 * 一副牌的信息
 */
export default class Pair {
  /**
   * 剩余的仍未被拆分的牌
   */
  left = '';
  /**
   * 一副牌中可以拆出来的面子
   */
  splitedFaces: string[] = [];
  /**
   * 一副牌中可以拆出来的对子
   */
  splitedDoubles: string[] = [];
  /**
   * 一副牌中可以拆出来的搭子
   */
  splitedPartners: string[] = [];
  /**
   * 单张
   */
  splitedSingles: string[] = [];

  /**
   * 子Pair
   */
  children: Pair[] = [];

  constructor(pair: string) {
    if (pair) {
      this.left = pair;
    }
  }
}
