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
  faces: string[] = [];
  /**
   * 一副牌中可以拆出来的对子
   */
  doubles: string[] = [];
  /**
   * 一副牌中可以拆出来的搭子
   */
  partners: string[] = [];
  /**
   * 单张
   */
  singles: string[] = [];

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
      faces,
      partners,
      singles,
      doubles,
    } = this;
    // 不能有剩余牌未被分解
    if (left !== '') {
      return;
    }
    // 听牌的几种形式：单骑听、搭子（边张、坎张、两面）、双碰
    const singleLength = singles.length;
    const doubleLength = doubles.length;
    const faceLength = faces.length;
    const partnerLength = partners.length;
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
      faces,
      partners,
      singles,
      doubles,
    } = this;
    return (
      left === '' &&
      partners.length === 0 &&
      singles.length === 0 &&
      doubles.length === 1 &&
      faces.length > 0
    );
  }

  /**
   * 在完全分解之后，获取这副牌所有可胡的牌
   * @returns 可以胡的牌数组
   */
  getMatchesOfSuccess() {
    const result: string[] = [];
    if (this.isReady()) {
      const { singles, doubles, partners } = this;
      if (singles[0]) {
        result.push(singles[0]);
      } else if (doubles.length === 2) {
        const [one, two] = doubles;
        result.push(one.slice(1));
        result.push(two.slice(1));
      } else if (partners[0]) {
        result.push(...getMatchesOfPartner(partners[0]));
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
    const { faces, doubles, partners } = this;
    // 向听数计算的基数
    const base = Math.floor(this.size / 3);
    const fix = faces.length + partners.length - base;
    return (
      base * 2 -
      faces.length * 2 -
      doubles.length -
      partners.length + (fix > 0 ? fix : 0)
    );
  }

  /**
   * 复制一份节点
   */
  clone() {
    const p = new PairNode(this.full);
    p.left = this.left;
    p.faces = Array.from(this.faces);
    p.doubles = Array.from(this.doubles);
    p.partners = Array.from(this.partners);
    p.singles = Array.from(this.singles);
    return p;
  }
}
