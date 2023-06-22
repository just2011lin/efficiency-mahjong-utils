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

/**
 * 判断是否由数个相同的数字组成
 * @param digits 数个数字组成的字符串
 * @param size 数量
 */
export function isSizeDigits(digits: string, size: number) {
  return digits.length === size && new Set(digits.split('')).size === 1;
}

export function getSrotedNumArray(digits: string) {
  return digits
    .split('')
    .map(Number)
    .sort((a, b) => a - b);
}
