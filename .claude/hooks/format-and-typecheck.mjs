// PostToolUse hook: formats edited .vue/.ts files with Prettier and runs nuxt typecheck.
// Exits with code 2 on failure so Claude receives the errors and fixes them.
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const input = JSON.parse(readFileSync(0, 'utf8'))
const file = input.tool_response?.filePath ?? input.tool_input?.file_path

if (!file || !/\.(vue|ts)$/.test(file)) process.exit(0)

const run = (command) =>
  spawnSync(command, {
    cwd: process.env.CLAUDE_PROJECT_DIR ?? process.cwd(),
    shell: true,
    encoding: 'utf8'
  })

const format = run(`pnpm exec prettier --write "${file}"`)
if (format.status !== 0) {
  process.stderr.write(`Prettier failed on ${file}:\n${format.stderr}`)
  process.exit(2)
}

const typecheck = run('pnpm typecheck')
if (typecheck.status !== 0) {
  process.stderr.write(
    `nuxt typecheck failed after editing ${file}:\n${typecheck.stdout}${typecheck.stderr}`
  )
  process.exit(2)
}
