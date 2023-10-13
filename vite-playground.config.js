import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import vuetify from "vite-plugin-vuetify";
import { resolve } from "path";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    vuetify({
      autoImport: true,
    }),
  ],
  minify: false,
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "playground-dist",
    minify: false,
  },
});
