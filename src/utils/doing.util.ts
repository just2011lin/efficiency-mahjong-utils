import Pair from '../model/Pair';
import { splitOutDoubleOfPair, splitOutFaceOfPair } from './deal.util';
import { uniqWith, cloneDeep } from 'lodash';

export function makeSplitFacePairTree(pairParent: Pair) {
  const splitOutFaceOfPairResult = splitOutFaceOfPair(pairParent.left);
  const children: Pair[] = [];
  splitOutFaceOfPairResult.forEach(([face, left]) => {
    const child = cloneDeep(pairParent);
    child.left = left;
    child.splitedFaces.push(face);
    makeSplitFacePairTree(child);
    children.push(child);
  });
  pairParent.children = children;
  return pairParent;
}

export function getPairTreeBottomChildren(pair: Pair, pairs: Pair[] = []) {
  if (pair.children.length === 0) {
    pairs.push(pair);
  } else {
    for (const child of pair.children) {
      getPairTreeBottomChildren(child, pairs);
    }
  }
  return pairs;
}

export function isPairEqual(aPair: Pair, bPair: Pair): boolean {
  /** 如果left不相同则不一样 */
  if (aPair.left !== bPair.left) {
    return false;
  }
  const aSplitedFaces = aPair.splitedFaces;
  const bSplitedFaces = bPair.splitedFaces;
  // 如果提取出来的面子数量不一致，则不相等
  if (aSplitedFaces.length !== bSplitedFaces.length) {
    return false;
  }
  // a和b放在一起进行去重之后数量与原来一致，则说明a、b中的面子是一样的
  if (
    new Set([...aSplitedFaces, ...bSplitedFaces]).size !== aSplitedFaces.length
  ) {
    return false;
  }
  // 不用判断对子部分是否相同
  // 因为拆对子的方式是固定的，只要别的部分是相同的，对子拆出来也总是相同的
  return true;
}

export function makeSplitDoublePairTree(pairParent: Pair) {
  const splitOutDouleOfPairResult = splitOutDoubleOfPair(pairParent.left);
  const children: Pair[] = [];

  splitOutDouleOfPairResult.forEach(([double, left]) => {
    const child = cloneDeep(pairParent);
    child.left = left;
    child.splitedDoubles.push(double);
    children.push(child);
    makeSplitDoublePairTree(child);
  });

  pairParent.children = children;

  return pairParent;
}

export function getAnalyseResult(pair: string) {
  const pairRoot = makeSplitFacePairTree(new Pair(pair));

  const result = getPairTreeBottomChildren(pairRoot);
  // 拆出对子后的结果
  const resultB: Pair[] = [];
  // 拆对子
  result.forEach(rPair => {
    const pairRoot = makeSplitDoublePairTree(rPair);
    const result = getPairTreeBottomChildren(pairRoot);
    resultB.push(...result);
  });

  return uniqWith(resultB, isPairEqual);
}
