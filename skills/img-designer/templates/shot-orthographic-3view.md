---
id: shot-orthographic-3view
kind: shot
name: 物体三视图
use_when: 建模、量产、结构评审；需要消除透视误差时
avoid_when: 需要氛围与情绪时（改用 shot-in-use-scene）
slots: [object, material, color, background]
defaults: { aspect: "4:3", lens: "orthographic", light: "light-softbox" }
---

## 骨架

Orthographic three-view sheet of {{object}}, {{material}}, {{color}}. Front,
side and top views on one sheet, identical scale, aligned on a common baseline,
no perspective, flat even light from a large softbox, no cast shadows, plain
neutral grey background. Technical product-reference style: sharp edges, true
proportions, no styling, no props, no text.

## 负向

不要投影、不要透视灭点、不要渐变背景、不要装饰物、不要镜像错误

## 验收锚点

1. 三个视角的比例必须一致（同一部件量出来一样长）
2. 画面里不能出现灭点，否则就是透视而不是正交
3. 部件的数量与位置在三个视角里必须对得上

## 变体

- 四视图：加 back view，写 `front / side / back / top`
- 要贴进技术文档：`background` 写 flat white，加 1px 灰线框
- 参考方向：需要正/侧/顶的实拍照片作为输入，见本 skill 第 2 节「找参考」

## 踩坑记录

- 模型会偷偷加一点透视，验收时必须检查灭点。
- 顶视图最容易被画成"俯视照片"，要强调 orthographic。
