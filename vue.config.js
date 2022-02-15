function getProdExternals() {
  return {
    "@vueuse/core": "@vueuse/core",
    vue: "vue",
    d3: "d3",
    "core-js": "core-js",
  };
}

module.exports = {
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
    webpackBundleAnalyzer: {
      openAnalyzer: process.env.NODE_ENV === "production" ? true : false,
    },
  },
  configureWebpack: {
    externals: process.env.NODE_ENV === "production" ? getProdExternals() : {},
  },
};
