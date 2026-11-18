import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { BUNDLED_SKILL_RANK } from '@deepseek-ai/dsh-skill'

export const name = 'dsh-img-designer'
export const inject = ['skills']

const SKILLS = [
  {
    id: 'img-designer',
    description:
      '生图全流程：接需求、找参考、按模板构图、生成或改图、按摄影工艺验收、定点修复到合格。要生成或修改图片、判断一张图能不能交付时加载。',
  },
  {
    id: 'product-return-photo',
    description:
      '把商品照做成真实买家返图：先过空间可用性硬门槛，再按 D/A/R 三维打分，给八段式提示词骨架、后期流程与验收清单。要"像真的、有人住"、或判断家具道具摆放是否合理时加载。',
  },
]

export async function apply(ctx) {
  const candidates = SKILLS.map(({ id, description }) => {
    const locator = new URL(`./skills/${id}/SKILL.md`, import.meta.url)
    return {
      name: id,
      description,
      invocation: { modelInvocable: true, userInvocable: true },
      provider: name,
      source: 'bundled',
      rank: BUNDLED_SKILL_RANK,
      locator,
      resourceBase: {
        kind: 'directory',
        path: fileURLToPath(new URL(`./skills/${id}/`, import.meta.url)),
      },
    }
  })

  const byName = new Map(candidates.map(candidate => [candidate.name, candidate]))

  ctx.skills.registerProvider(() => ({
    name,
    list: async () => candidates,
    get: async selected => {
      const candidate = byName.get(selected.name)
      if (!candidate) return undefined
      const content = stripFrontmatter(await readFile(candidate.locator, 'utf8'))
      return { ...candidate, content }
    },
  }))
}

function stripFrontmatter(text) {
  const match = text.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)
  return (match ? text.slice(match[0].length) : text).trim()
}
