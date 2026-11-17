---
id: light-rim
kind: light
name: 轮廓光
use_when: 深色产品要从背景里分离出来、要强调外形
avoid_when: 要均匀展示细节时（改用 light-softbox）
slots: [object, rim_angle]
defaults: { rim_angle: "135° from behind" }
---

## 骨架

Low key light in front, plus a hard rim light at {{rim_angle}} that traces the
silhouette of {{object}} and separates it from a dark background. The rim
follows the outline continuously, with almost no spill onto the front face.

## 负向

不要溢到正面、不要断线、不要背景过亮吃掉轮廓、不要出现灯架

## 验收锚点

1. 轮廓光只描边，正面不能被照亮
2. 背景足够暗，轮廓才立得住
3. 边缘连续不断，拐角处不消失

## 变体

- 双侧轮廓：`rim lights from both sides`，适合对称产品
- 冷调轮廓：`cool rim`，与暖色主体形成冷暖分离

## 踩坑记录

- 模型容易把轮廓光画成一圈白边贴纸，验收时看边缘是否跟着形体走。
