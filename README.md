# efficiency-mahjong-utils

科学麻将牌效计算的工具方法

## 是否计算

`src/utils/is.util.ts`

- 是否为顺子

`function isSequence(partial: string, type?: 'm' | 'p' | 's' | 'z')`

- 是否为刻字

`function isTriplet(partial: string)`

- 是否为面子

`function isFace(partial: string, type?: 'm' | 'p' | 's' | 'z')`

- 是否为对子

`function isDouble(partial: string)`

- 是否为杠子

`function isFourfold(partial: string)`

#### 两张牌搭子

- 是否为两面搭子

`function isBothPartner(partial: string)`

- 是否为坎张搭子

`function isThresholdPartner(partial: string)`

- 是否为边张搭子

`function isEdgePartner(partial: string)`

#### 三张牌的搭子

- 对子复合型

- 两坎型

#### 四张牌复合型

- 是否为搭子（对子也算是搭子的一种）

## 数字处理

- 从一组数中拆出一个对子和剩余的内容（所有组合）

`function splitOutDouble(partial)`

## 进张计算