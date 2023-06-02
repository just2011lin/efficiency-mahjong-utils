/**
 * 判断是否刚好是一组面子牌
 * @param faceCard 面子牌
 */
export function isFace(faceCard: string, type?: string): boolean {
  if (faceCard.length !== 3) {
    return false;
  }
  const [a, b, c] = faceCard;
  if (a === b && b === c) {
    return true;
  }
  if (type === 'z') {
    return false;
  }
  // 转成数字
  let [d, e, f] = [a, b, c].map(Number);
  if (d > e) {
    [d, e] = [e, d];
  }
  if (e > f) {
    [e, f] = [f, e];
  }
  if (d + 1 === e && e + 1 === f) {
    return true;
  }
  return false;
}
