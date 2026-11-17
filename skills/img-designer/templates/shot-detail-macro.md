---
id: shot-detail-macro
kind: shot
name: 微距细节
use_when: 材质、工艺、纹理、刻字、接口等局部证明
avoid_when: 要交代整体形态时（改用 white-background 或三视图）
slots: [subject, feature, material]
defaults: { aspect: "1:1", lens: "100mm macro", light: "light-softbox" }
---

## 骨架

Extreme close-up of {{feature}} on {{subject}}, {{material}}, filling the frame.
Raking light from a low side angle reveals surface texture, tool marks and
grain; 100mm macro at f/8 with focus stacked across the feature, no gloss, a
few natural dust specks only. Background falls off to a soft neutral, no props,
no text.

## 负向

不要重复贴图纹理、不要美颜式平滑、不要过锐、不要塑料反光

## 验收锚点

1. 纹理不重复（同一片纹路不能出现两次以上）
2. 焦点确实落在宣称的那个特征上
3. 刻字、倒角、接缝不错位、不糊

## 变体

- `+ light-softbox`：要干净的工艺展示
- `+ light-rim`：要立体感与边缘分离
- 要证明尺寸时，加一枚已知参照物（硬币、尺子）

## 踩坑记录

- 微距下文字最容易崩，凡是带字的细节必须单独列为验收项。
- 模型倾向把纹理做成平铺 pattern，负向里要点名 "no repeated tiling"。
