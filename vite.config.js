import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import vuetify from "vite-plugin-vuetify";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      outputDir: ["dist"],
      include: ["src/**", "env.d.ts"],
      staticImport: true,
      skipDiagnostics: false,
      rollupTypes: true,
    }),
    vue(),
    eslintPlugin(),
    vuetify({
      autoImport: true,
    }),
  ],
  define: {
    "import.meta.env.VITE_APP_NAME": JSON.stringify(pkg.name),
    "import.meta.env.VITE_APP_DESCRIPTION": JSON.stringify(pkg.description),
    "import.meta.env.VITE_APP_VERSION": JSON.stringify(pkg.version),
    "import.meta.env.VITE_APP_REPO": JSON.stringify(pkg.repository.url),
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
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
          d3: "d3",
          "@vueuse/core": "VueUseCore",
          vue: "Vue",
        },
      },
    },
  },
});
