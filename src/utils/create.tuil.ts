import { random } from './script.util';

function createCodeStr(key: string): string {
  const nums = key.split('').map(s => s.charCodeAt(0));
  let base = 0;
  nums.forEach(num => {
    base += num % 10;
  });
  base = (base % 10) + 1;
  return nums.map(num => num * base).join('');
}

function createOrders(key: string, size: number): number[] {
  let codesStr = createCodeStr(key);
  const orders: number[] = [];
  for (let i = 0; i < size; i++) {
    const a = codesStr.slice(0, 3);
    const b = Number(a) % (size - i);
    orders.push(b);
    codesStr = codesStr.slice(3) + b * size;
  }
  return orders;
}

function getMajongs() {
  const numTypes = ['m', 'p', 's'];
  const result: string[] = [];
  for (const type of numTypes) {
    for (let i = 1; i < 10; i++) {
      result.push(i + type, i + type, i + type, i + type);
    }
  }
  for (let i = 1; i < 8; i++) {
    result.push(i + 'z', i + 'z', i + 'z', i + 'z');
  }
  return result;
}

export function getOneMatchMahjongs(key: string) {
  const orders: number[] = createOrders(key, 136);
  const majongs = getMajongs();
  const result = orders.map(order => majongs.splice(order, 1)[0]);
  return result;
}

/**
 * 创建一个随机的数字或字母字符
 * 数字0为48，数字9为57
 * 字母A为65，字母Z为90
 * 字母a为97，字母z为122
 * 一共是62个字符，随机1-62，然后再找出其对应的字符
 * @returns 数字字母字符
 */
function createOneRandomChar() {
  const num = random(1, 62);
  if (num <= 10) {
    return String.fromCharCode(47 + num);
  } else if (num <= 36) {
    return String.fromCharCode(64 + num - 10);
  } else {
    return String.fromCharCode(96 + num - 36);
  }
}

function createRandomKey(length: number) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += createOneRandomChar();
  }
  return result;
}

export function createRandomMahjongs() {
  const randomKey = createRandomKey(10);
  return { key: randomKey, mahJongs: getOneMatchMahjongs(randomKey) };
}
