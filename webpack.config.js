module.exports = {
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            emitWarning: true
          }
        }
      ]
    }
  };