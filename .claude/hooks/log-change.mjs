// PostToolUse hook: appends a one-line summary of each Write/Edit to logs/changes.log.
import { appendFileSync, mkdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const MAX_SNIPPET = 60

const input = JSON.parse(readFileSync(0, 'utf8'))
const {
  tool_name: tool,
  tool_input: args = {},
  tool_response: res = {}
} = input
const file = res.filePath ?? args.file_path
if (!file) process.exit(0)

const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd()
const countLines = (text = '') =>
  text === '' ? 0 : text.replace(/\n$/, '').split('\n').length
const snippet = (text = '') => {
  const line = text.split('\n').find((l) => l.trim()) ?? ''
  const clean = line.trim()
  return clean.length > MAX_SNIPPET ? `${clean.slice(0, MAX_SNIPPET)}…` : clean
}

let description
if (tool === 'Write') {
  const verb = res.type === 'update' ? 'Sobrescrito' : 'Creado'
  const lines = countLines(args.content)
  description = `${verb} (${lines} ${lines === 1 ? 'línea' : 'líneas'})`
} else {
  const scope = args.replace_all ? 'todas las apariciones' : '1 bloque'
  description = `Editado ${scope}: ${countLines(args.old_string)} → ${countLines(args.new_string)} líneas`
}
const preview = snippet(tool === 'Write' ? args.content : args.new_string)
if (preview) description += ` · "${preview}"`

const now = new Date()
const pad = (n) => String(n).padStart(2, '0')
const stamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
const path = relative(root, file).replaceAll('\\', '/') || file

mkdirSync(join(root, 'logs'), { recursive: true })
appendFileSync(
  join(root, 'logs', 'changes.log'),
  `${stamp} | ${tool.padEnd(5)} | ${path} | ${description}\n`
)
