import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier/flat";
import vue from "eslint-plugin-vue";

export default [
  {
    ignores: ["dist", "node_modules", "docs", "dist-docs", ".temp", ".cache"],
  },
  ...tsPlugin.configs["flat/recommended"],
  ...vue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
      },
    },
  },
  {
    rules: {
      "vue/no-v-html": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "vue/multi-word-component-names": "off",
    },
  },
  prettier,
];
