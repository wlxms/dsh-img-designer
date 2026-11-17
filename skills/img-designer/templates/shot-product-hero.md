---
id: shot-product-hero
kind: shot
name: 白底主图
use_when: 电商主图、要抠图、要贴进详情页或 PPT
avoid_when: 要展示使用氛围时（改用 shot-in-use-scene）
slots: [object, material, color, background]
defaults: { aspect: "4:3", lens: "85mm", light: "light-softbox" }
---

## 骨架

Studio product photograph of {{object}}, {{material}}, {{color}}, centered on a
seamless {{background}} background with generous margins. Lit by one large
softbox at 45° from the upper left plus a white bounce card on the right, so the
key is broad and even. A single soft contact shadow sits under the base; no
second light, no cast shadow across the background. Sharp from front to back,
true proportions preserved, accurate color, honest surface texture, no room
reflections, no props, no text.

## 负向

不要倒影板、不要背景上的第二道投影、不要渐变背景、不要装饰道具

## 验收锚点

1. 产品完整入画，四周留白够（能被裁切或贴版）
2. 背景上只有接触影，没有第二道投影
3. 边缘干净不发糊，颜色不偏（白平衡没飘）

## 变体

- `+ light-rim`：深色产品要从背景里分离时
- `background` = white / light grey / warm beige
- 要抠图：背景写纯 `#F5F5F5`，不要写 "white background" 就完事

## 踩坑记录

- 模型爱自作主张加倒影板与「高级感」道具，必须在负向里点名。
- 纯白底容易过曝糊边，宁可写 light grey 再在后期拉白。
