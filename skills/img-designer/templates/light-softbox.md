---
id: light-softbox
kind: light
name: 柔光箱
use_when: 白底主图、三视图、需要均匀无影的产品展示
avoid_when: 要氛围与方向性时（改用 light-window-45 / light-rim）
slots: [direction, fill]
defaults: { direction: "45° upper left", fill: "white bounce card right" }
---

## 骨架

Lit with one large softbox at {{direction}} plus a {{fill}}: a broad even key
that wraps the form, soft shadow edges, exactly one contact shadow under the
base, no hard speculars, no second shadow direction, and a clean falloff into a
neutral background.

## 负向

不要硬光、不要多向阴影、不要镜面高光、不要背景上出现灯位痕迹

## 验收锚点

1. 高光面积大而柔，不是一个小亮点
2. 只有一道影子，方向与灯位一致
3. 左右都不过曝，白色部分有层次

## 变体

- 顶光：`direction = directly above, large scrim`
- 双柔光箱：写 `two softboxes at 45° left and right`，但会削弱体积感
- 需要体积：补一盏低强度 light-rim

## 踩坑记录

- 柔光箱容易把产品拍"平"，需要体积时一定要叠轮廓光。
