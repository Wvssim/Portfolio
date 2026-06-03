import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import path from 'path'

const dir = 'public/certs'
const files = readdirSync(dir).filter(f => f.toLowerCase().endsWith('.png'))

let beforeTotal = 0
let afterTotal = 0

for (const f of files) {
  const inp = path.join(dir, f)
  const out = path.join(dir, f.replace(/\.png$/i, '.webp'))
  await sharp(inp)
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out)
  const before = statSync(inp).size
  const after = statSync(out).size
  beforeTotal += before
  afterTotal += after
  console.log(`${f}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`)
}

console.log(`\nTOTAL  ${(beforeTotal / 1024 / 1024).toFixed(2)}MB -> ${(afterTotal / 1024 / 1024).toFixed(2)}MB`)
