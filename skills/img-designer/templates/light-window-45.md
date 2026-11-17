---
id: light-window-45
kind: light
name: 窗光 45°
use_when: 场景图、要自然不造作的生活感
avoid_when: 需要可控无影时（改用 light-softbox）
slots: [time_of_day, bounce]
defaults: { time_of_day: "late afternoon", bounce: "pale wall" }
---

## 骨架

Lit only by a window at 45° to the subject, diffused by a sheer curtain:
{{time_of_day}} daylight, gentle directional falloff, natural shadow edges, a
little bounce off a {{bounce}}, no artificial fill and no visible light stand.

## 负向

不要补光板痕迹、不要硬边阴影、不要蓝到发青、不要两个方向的光

## 验收锚点

1. 影子朝背离窗户的一侧，方向唯一
2. 色温自然偏冷，但不发蓝
3. 明暗过渡连续，没有硬边

## 变体

- 阴天：`overcast, very soft, low contrast`
- 黄昏：`golden hour, warm low angle, long shadows`
- 夜里：改用 light-practical-lamp

## 踩坑记录

- 模型常偷偷加第二光源把暗部提亮，验收时检查暗部有没有来路不明的光。
