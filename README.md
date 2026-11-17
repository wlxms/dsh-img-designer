# dsh-img-designer

给 DeepSeek Harness 用的**生图流程 skill 插件**。装一个包，模型就多一套「接需求 → 找参考 → 构图 → 生成/改图 → 验收 → 定点修复」的工作流，以及一套可复用的拍摄模板。

## 它解决什么

普通生图是「出图即结束」。这个 skill 强制三件事：

1. **先定拍摄单**：主体、场景、光源、画幅、必现元素、禁止元素、**可判定的验收标准**；
2. **有根方法论**：把「高级」「通透」这类形容词翻译成光学事实——光源方向/大小/色温 K 值/对比/分离、影子的方向/长度/边缘、材质对光的反应、焦距与最锐点、色彩绑定物体；
3. **验收有判据**：工艺八条（`references/photographic-craft.md` §11）＋硬检查 A–H，任一项不过不交付。

## 安装

```bash
dsh plugin --profile <你的 profile> add github:wlxms/dsh-img-designer
```

或从 npm：

```bash
dsh plugin --profile <你的 profile> add dsh-img-designer
```

装完重启 DSH，会话里会出现 `img-designer` 技能。

> 如果你的 workspace 里已经有同名的本地 skill（`.dsh/skills/image-generation`），装插件后请移走，避免两份同名技能。

## 内容

```
skills/img-designer/
├── SKILL.md                      全流程：拍摄单 / 参考集 / 模板 / 生成改图 / 验收 / 循环 / 交付卡
├── references/
│   └── photographic-craft.md     根方法论与验收依据（光 · 影 · 材质 · 光学 · 色彩 · 文字）
└── templates/                    11 个模板
    ├── shot-product-hero.md      白底主图
    ├── shot-in-use-scene.md      使用场景
    ├── shot-detail-macro.md      微距细节
    ├── shot-orthographic-3view.md 物体三视图
    ├── shot-character-turnaround.md 人物转面
    ├── light-practical-lamp.md   实用光源（自发光产品）
    ├── light-softbox.md          柔光箱
    ├── light-window-45.md        窗光 45°
    ├── light-rim.md              轮廓光
    ├── _negative.md              全局负向（以根方法论 §1 为准）
    └── _schema.md                模板字段说明
```

## 用法

任务里直接说需求即可；模型会按 skill 走：

```
接需求 → 拍摄单 → 找参考 → 选模板（1 主干 + 0–2 修饰）→ 生成/改图 → 验收 → 不过就定点修
```

验收卡长这样：

```
结论：通过 / 有条件通过 / 未通过
已检查：A✅ B✅ C❌（右下角文字乱码）
修复：第 1 轮改文字 → 复检通过
未解决：无
```

## 方法论来源

`references/photographic-craft.md` 的机制参考了 `supercmohq/generating-product-photos` 中的 `photographic-craft`（该仓库无许可证声明），本文为**按同一套机制重写与本地化**，未复制原文。

## License

MIT
