import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function sitesStaticWorker() {
  return {
    name: 'sites-static-worker',
    apply: 'build',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'server/index.js',
        source: `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404) return response

    const indexUrl = new URL('/index.html', request.url)
    return env.ASSETS.fetch(new Request(indexUrl, request))
  },
}\n`,
      })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), sitesStaticWorker()],
})
