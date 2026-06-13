import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Serve Construct 2 game files RAW — bypass Vite's transform pipeline entirely.
    // IMPORTANT: Do NOT wrap server.middlewares.use() in a returned function.
    // Calling it directly inside configureServer() registers middleware BEFORE
    // Vite's built-in SPA fallback and JS transform middleware.
    {
      name: 'serve-construct2-raw',
      enforce: 'pre',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || ''
          // Match /Opsi-N/ or /OPSI-N/ (case-insensitive) game directories
          if (/^\/opsi-\d+\//i.test(url)) {
            const cleanUrl = url.split('?')[0]
            const filePath = path.join(process.cwd(), 'public', cleanUrl)

            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase()
              const mimeTypes = {
                '.js': 'application/javascript',
                '.html': 'text/html',
                '.css': 'text/css',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
                '.svg': 'image/svg+xml',
                '.webp': 'image/webp',
                '.mp3': 'audio/mpeg',
                '.ogg': 'audio/ogg',
                '.m4a': 'audio/mp4',
                '.wav': 'audio/wav',
                '.woff': 'font/woff',
                '.woff2': 'font/woff2',
                '.ttf': 'font/ttf',
              }
              const contentType = mimeTypes[ext] || 'application/octet-stream'
              res.setHeader('Content-Type', contentType)
              res.setHeader('Cache-Control', 'no-cache')
              res.setHeader('Access-Control-Allow-Origin', '*')
              fs.createReadStream(filePath).pipe(res)
              return
            }
          }
          next()
        })
      }
    },
    react(),
    tailwindcss()
  ],
})
