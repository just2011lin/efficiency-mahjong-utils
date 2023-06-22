import Pair from '../model/Pair';
import {
  splitOutPartnerOfPair,
  splitOutDoubleOfPair,
  splitOutFaceOfPair,
} from './deal.util';
import { uniqWith, cloneDeep } from 'lodash';
import { splitSingles } from './split.util';

function makeSplitPairTree(
  pairParent: Pair,
  name: keyof Pair,
  splitFn: (pair: string) => string[][],
) {
  const splitOutOfPairResult = splitFn(pairParent.left);
  const children: Pair[] = [];
  splitOutOfPairResult.forEach(([face, left]) => {
    const child = cloneDeep(pairParent);
    child.left = left;
    const values = child[name] as string[];
    if (Array.isArray(values)) {
      values.push(face);
    }
    makeSplitPairTree(child, name, splitFn);
    children.push(child);
  });
  pairParent.children = children;
  return pairParent;
}

function getPairTreeBottomChildren(pair: Pair, pairs: Pair[] = []) {
  if (pair.children.length === 0) {
    pairs.push(pair);
  } else {
    for (const child of pair.children) {
      getPairTreeBottomChildren(child, pairs);
    }
  }
  return pairs;
}

function isPairEqual(aPair: Pair, bPair: Pair): boolean {
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

export function getAnalyseResult(pair: string) {
  let lastResult = [new Pair(pair)];

  const splitMethods: [keyof Pair, (pair: string) => string[][]][] = [
    ['splitedFaces', splitOutFaceOfPair],
    ['splitedDoubles', splitOutDoubleOfPair],
    ['splitedPartners', splitOutPartnerOfPair],
  ];

  for (const [key, fn] of splitMethods) {
    const result: Pair[] = [];
    lastResult.forEach(rPair => {
      const pairRoot = makeSplitPairTree(rPair, key, fn);
      const children = getPairTreeBottomChildren(pairRoot);
      result.push(...children);
    });
    lastResult = result;
  }

  const uniqResult = uniqWith(lastResult, isPairEqual);

  // 拆分单张
  uniqResult.forEach(rPair => {
    rPair.splitedSingles = splitSingles(rPair.left);
    rPair.left = '';
  });

  return uniqResult;
}
