import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  server: {
    open: true
  }
})
