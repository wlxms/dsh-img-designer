---
id: light-practical-lamp
kind: light
name: 实用光源（产品自己就是灯）
use_when: 夜灯、灯箱、屏幕、蜡烛等自发光产品
avoid_when: 需要均匀无影时（改用 light-softbox）
slots: [surface, wall_material, cool_fill]
defaults: { lens: "35-50mm", exposure: "f/2.8-f/4, 1/60, ISO 400" }
---

## 骨架

The product is the only key light in the frame. Warm light pools on the
{{surface}} and washes the {{wall_material}} behind it; a faint cool fill
({{cool_fill}}) comes from a window off-frame; deep but detailed blacks, soft
long shadows, no second light source, no HDR halo.

## 负向

不要第二光源、不要 HDR 光晕、不要死黑（暗部要留细节）、不要过曝的高光团

## 验收锚点

1. 亮斑位置必须与光源位置一致（最常翻车的一条）
2. 墙面有暖洗，不能只有桌面亮
3. 阴影柔和且方向统一

## 变体

- 纯黑房间：去掉 `cool_fill`，只留产品光，对比更狠
- 加窗：`cool_fill = faint blue moonlight through a curtain`
- 需要质感：叠 shot-detail-macro 拍局部

## 踩坑记录

- 模型爱给产品加一圈"发光描边"，看着像特效，负向里点名 no HDR halo。
- 暗部容易压成死黑，验收时看阴影里还有没有细节。
