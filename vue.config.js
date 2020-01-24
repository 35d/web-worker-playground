module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: {
            loader: "worker-loader",
            options: {
              inline: true
            }
          }
        }
      ]
    },
    // resolve: {
    //   alias: {
    //     vue$: "vue/dist/vue.esm.js",
    //     "@": path.resolve(__dirname, "src/")
    //   }
    // },
    plugins: [
      // plugin
    ]
  }
};
