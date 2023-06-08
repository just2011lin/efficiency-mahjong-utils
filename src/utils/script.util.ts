/**
 * 获取字符在字符串中出现的数量
 * @param char 字符
 * @param str 字符串
 */
export function getCharNumOfString(char: string, str: string): number {
  let num = 0;
  for (const s of str) {
    if (char === s) {
      num++;
    }
  }
  return num;
}
