import { defineConfig } from "vite"
import viteCompression from "vite-plugin-compression"
import routes from "./routes.js"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        // Update the entry points to include your additional HTML files
        index: "index.html",

        // Dynamically import JavaScript files from the "routes" folder
        ...routes,
      },
    },
  },
  base: "./",
  server: {
    port: 3000,
  },
  plugins: [viteCompression()],
})
