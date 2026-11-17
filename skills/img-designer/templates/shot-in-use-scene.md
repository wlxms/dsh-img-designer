---
id: shot-in-use-scene
kind: shot
name: 使用场景
use_when: 展示产品在真实空间里的样子（床头、桌面、厨房、户外）
avoid_when: 要干净主图时（改用 shot-product-hero）
slots: [product, scene, surface, time, mood]
defaults: { aspect: "3:4", lens: "35mm", light: "light-window-45" }
---

## 骨架

Photograph of {{product}} used in a real {{scene}}, resting on {{surface}}, at
{{time}}, {{mood}}. Room logic must hold: furniture sits against walls, the
object sits at believable scale, nothing floats, props are small and matte.
35mm lens at f/4 so the room stays readable but secondary, camera at standing
height with a natural slight downward angle, honest sensor grain, no staged
showroom perfection.

## 负向

不要奶油虚化与光斑团、不要大件透明道具、不要悬浮物、不要摆拍式对称

## 验收锚点

1. 家具关系能住人：柜贴墙、床在旁边而不是背后、有电源线等生活痕迹
2. 景深 ≥ f/4，背景可读（墙面有纹理），不是一团糊
3. 道具小、暗、不反光，不与主体争视线

## 变体

- `+ light-window-45`：白天、自然
- `+ light-practical-lamp`：夜里、产品自带光
- `time` = morning / dusk / night；`mood` = calm / lived-in / tidy

## 踩坑记录

- f/1.8 的浅景深一眼假，必须写死 f/4 以上。
- 玻璃杯这类透明大件会吃光、抢主体，换小暗哑光道具。
