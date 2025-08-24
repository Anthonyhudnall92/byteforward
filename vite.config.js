import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'ByteForward - Advanced Cybersecurity Solutions',
          description: 'ByteForward provides cutting-edge cybersecurity solutions to protect your digital assets and infrastructure from evolving threats.'
        }
      }
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['wrangler']
        }
      }
    },
    sourcemap: false
  },
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  preview: {
    port: 4173,
    open: true
  },
  optimizeDeps: {
    include: []
  },
  css: {
    devSourcemap: true
  },
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __VERSION__: JSON.stringify(process.env.npm_package_version)
  }
})
