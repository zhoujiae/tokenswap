module.exports = {
  publicPath: "./",
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/_var.scss";'
      }
    }
  },
  transpileDependencies: [
    'ethereum-bloom-filters'
  ]
};