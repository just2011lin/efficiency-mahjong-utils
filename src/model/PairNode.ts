import { getMatchesOfPartner } from '../utils/match.util';

/**
 * 一副牌的信息
 */
export class PairNode {
  /**
   * 完整的牌
   */
  full = '';
  /**
   * 这副牌的枚数
   */
  size = 0;
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
  children: PairNode[] = [];

  constructor(pair: string) {
    if (pair) {
      this.full = pair;
      this.left = pair;
      this.size = pair.replace(/\D/g, '').length;
    }
  }

  /**
   * 是否听牌了
   * */
  isReady() {
    const {
      left,
      splitedFaces,
      splitedPartners,
      splitedSingles,
      splitedDoubles,
    } = this;
    // 不能有剩余牌未被分解
    if (left !== '') {
      return;
    }
    // 听牌的几种形式：单骑听、搭子（边张、坎张、两面）、双碰
    const singleLength = splitedSingles.length;
    const doubleLength = splitedDoubles.length;
    const faceLength = splitedFaces.length;
    const partnerLength = splitedPartners.length;
    // 先校验比较常见的搭子听牌
    if (singleLength === 0 && doubleLength === 1 && partnerLength === 1) {
      return true;
    }
    // 再校验单骑听牌
    if (
      faceLength > 0 &&
      doubleLength === 0 &&
      partnerLength === 0 &&
      singleLength === 1
    ) {
      return true;
    }
    // 最后考虑双碰听牌
    if (doubleLength === 2 && partnerLength === 0 && singleLength === 0) {
      return true;
    }
    return false;
  }

  /**
   * 是否胡了(暂时只考虑一般型)
   * */
  isSucess() {
    const {
      left,
      splitedFaces,
      splitedPartners,
      splitedSingles,
      splitedDoubles,
    } = this;
    return (
      left === '' &&
      splitedPartners.length === 0 &&
      splitedSingles.length === 0 &&
      splitedDoubles.length === 1 &&
      splitedFaces.length > 0
    );
  }

  /**
   * 在完全分解之后，获取这副牌所有可胡的牌
   * @returns 可以胡的牌数组
   */
  getMatchesOfSuccess() {
    const result: string[] = [];
    if (this.isReady()) {
      const { splitedSingles, splitedDoubles, splitedPartners } = this;
      if (splitedSingles[0]) {
        result.push(splitedSingles[0]);
      } else if (splitedDoubles.length === 2) {
        const [one, two] = splitedDoubles;
        result.push(one.slice(1));
        result.push(two.slice(1));
      } else if (splitedPartners[0]) {
        result.push(...getMatchesOfPartner(splitedPartners[0]));
      }
    }
    return result;
  }

  /**
   * 在完全分解之后，计算这副牌的向听数(暂只考虑一般型)
   * 计算公式：基数-2*面子数-对子数-搭子数
   * @returns 这副牌进入听牌最少需要的进张数
   */
  getMatchNumOfReady() {
    const { splitedFaces, splitedDoubles, splitedPartners } = this;
    // 向听数计算的基数
    const base = Math.floor(this.size / 3);
    const fix = splitedFaces.length + splitedPartners.length - base;
    return (
      base * 2 -
      splitedFaces.length * 2 -
      splitedDoubles.length -
      splitedPartners.length + (fix > 0 ? fix: 0)
    );
  }
}
