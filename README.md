# efficiency-mahjong-utils

科学麻将牌效计算的工具方法

## 是否计算

`src/utils/is.util.ts`

- 是否为顺子

`function isSequence(partial: string, type?: TILE_TYPE)`

- 是否为刻字

`function isTriplet(partial: string)`

- 是否为面子

`function isFace(partial: string, type?: TILE_TYPE)`

- 是否为对子

`function isDouble(partial: string)`

- 是否为杠子

`function isFourfold(partial: string)`

- 这些牌是否都组成了面子

`function isAllFace(partial: string, type: TILE_TYPE)`

- 一副牌(14张)是否胡了，无张数限制，满足一雀头加 0 至多个面子即可

`function isHule(pair: string)`

- 一副牌(13张)是否听牌了

`function isOneLeftToHu(pair: string)`

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

`src/utils/deal.util.ts`

- 从一组数中拆出一个对子和剩余的内容（所有组合）

`function splitOutDouble(partial: string)`

- 从一组数中拆出一个面子和剩余的内容（所有组合）

`function splitOutFace(partial: string, type: TILE_TYPE)`

## 分析计算

`src/utils/userful.util.ts`

#### 进张计算

- 获取两面型搭子的进张

`function getUserfulTilesOfBothPartner(bothPartner: string)`

- 获取坎张搭子的进张

`function getUserfulTilesOfThresholdPartner(thresholdPartner: string)`

- 获取边张搭子的进张

`function getUserfulTilesOfEdgePartner(edgePartner: string)`

- 获取搭子的所有进张

`function getUserfulTilesOfPartner(partner: string)`

#### 可胡牌计算

- 在确定此牌已经听牌时，获取所有可胡的牌

`functoin getUserfulTilesOfOneLeftPair(oneLeftPair: string)`
