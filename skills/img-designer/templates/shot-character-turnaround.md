---
id: shot-character-turnaround
kind: shot
name: 人物转面
use_when: 角色设定、建模参考、服装或道具一致性检查
avoid_when: 要情绪与叙事时（改用场景图）
slots: [character, outfit, height, style]
defaults: { aspect: "16:9", lens: "85mm", light: "light-softbox" }
---

## 骨架

Character turnaround sheet of {{character}}, {{outfit}}, {{style}}. Front,
three-quarter, side and back views in one row, identical {{height}} on a shared
ground line, same relaxed A-pose, neutral expression, even studio light, plain
light grey background, full body, no cropping, identical costume details and an
identical face across all views.

## 负向

不要换人换脸、不要换装、不要遮挡、不要夸张透视、不要局部裁切

## 验收锚点

1. 身高线与地平线一致，四个视角等高
2. 服装细节（扣子、口袋、图案、logo 位置）跨视角一致
3. 脸必须是同一张脸，发型与配饰不漂移

## 变体

- T-pose：建模绑定用，写 `strict T-pose, arms horizontal`
- 表情板：换成 6 格表情，写 `expression sheet`
- 服装细节优先时，加一张 shot-detail-macro 补拍

## 踩坑记录

- 模型最容易在"侧面/背面"偷换服装细节，验收必须逐个对。
- 一行四个视角容易挤，宁可拆成两行或单独出正/背两张。
