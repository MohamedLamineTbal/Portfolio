import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const outputDirectory = resolve('dist')
const htmlPath = resolve(outputDirectory, 'index.html')

if (!existsSync(htmlPath)) {
  throw new Error('dist/index.html is missing. Run `npm run build` first.')
}

const html = readFileSync(htmlPath, 'utf8')

if (html.includes('/src/main.jsx')) {
  throw new Error('The Pages artifact still points to the uncompiled Vite source.')
}

const localReferences = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((reference) => !/^(?:https?:|data:|#)/.test(reference))

const missingFiles = localReferences.filter((reference) => {
  const cleanReference = reference.split(/[?#]/, 1)[0]
  const relativeReference = cleanReference.replace(/^\.\//, '').replace(/^\//, '')
  return !existsSync(resolve(outputDirectory, relativeReference))
})

if (missingFiles.length > 0) {
  throw new Error(`The Pages artifact has missing files: ${missingFiles.join(', ')}`)
}

console.log('GitHub Pages artifact is compiled and self-contained.')
