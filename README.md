# efficiency-mahjong-utils

麻将牌效计算的工具方法

## 牌种类描述说明

`s`表示索子，`m`表示万子，`p`表示饼子，`z`表示`东南西北白发中`

## 常见英文词说明

| 英文      | 描述                      |示例       |
| ---       | ---                       | ---    |
| tile      | 带类型的一张牌             | 1s       |
| digits    | 连续无序的数字字符串        | 2517    |
| tiles     | 带类型的一副牌（数量不限） | 456s2p3m77z |
| sequence  | 顺子                      | 234s      |
| triplet   | 刻子                      | 333z      |
| face      | 面子                      | 234s      |
| double    | 对子                      | 55s       |
| fourfold  | 杠子                      | 1111z     |
| ready     | 表示听牌了                | 34s22z    |
| oneLeft   | 表示一向听                | 36s22z    |