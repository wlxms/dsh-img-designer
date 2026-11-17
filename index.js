import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { BUNDLED_SKILL_RANK } from '@deepseek-ai/dsh-skill'

export const name = 'dsh-img-designer'
export const inject = ['skills']

const SKILL = 'img-designer'
const DESCRIPTION =
  '生图全流程：接需求、找参考、按模板构图、生成或改图、按摄影工艺验收、定点修复到合格。要生成或修改图片、判断一张图能不能交付时加载。'

export async function apply(ctx) {
  const locator = new URL(`./skills/${SKILL}/SKILL.md`, import.meta.url)
  const resourceBase = {
    kind: 'directory',
    path: fileURLToPath(new URL(`./skills/${SKILL}/`, import.meta.url)),
  }

  const candidate = {
    name: SKILL,
    description: DESCRIPTION,
    invocation: { modelInvocable: true, userInvocable: true },
    provider: name,
    source: 'bundled',
    rank: BUNDLED_SKILL_RANK,
    locator,
    resourceBase,
  }

  ctx.skills.registerProvider(() => ({
    name,
    list: async () => [candidate],
    get: async selected =>
      selected.name === SKILL
        ? { ...candidate, content: stripFrontmatter(await readFile(locator, 'utf8')) }
        : undefined,
  }))
}

function stripFrontmatter(text) {
  const match = text.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)
  return (match ? text.slice(match[0].length) : text).trim()
}
