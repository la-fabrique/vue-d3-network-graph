import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import vuetify from "vite-plugin-vuetify";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      outputDir: ["dist", "types"],
      include: ["src/**"],
      staticImport: true,
      skipDiagnostics: false,
      logDiagnostics: true,
      //rollupTypes: true,
      insertTypesEntry: true,
    }),
    vue(),
    eslintPlugin(),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/D3NetworkGraph.vue"),
      name: "vue-d3-network-graph",
      // the proper extensions will be added
      fileName: "vue-d3-network-graph",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue", "@vueuse/core", "d3"],
      output: {
        // dir: "dist",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
