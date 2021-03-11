module.exports = {
  runtimeCompiler:true,
  css: {
    loaderOptions: {
      sass: {
          prependData: `@import "~@/assets/styles/main.scss"`
      }
    }
  },
}
