import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  alias: {
    "@": resolve(__dirname, "src"),
    "@shared": resolve(__dirname, "../shared"),
  },
  build: {
    manifest: true,
    sourcemap: true,
    emptyOutDir: true,
    outDir: "../../extensions/database/out/ui",
  },
  root: ".",
  server: {
    hmr: {
      host: "localhost",
    },
  },
});
