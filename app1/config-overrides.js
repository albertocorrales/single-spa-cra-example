module.exports = {
  webpack(config, env) {
    config.entry = "./src/index-single-spa.tsx";
    config.output = {
      ...config.output,
      filename: "@company/app1.js",
      libraryTarget: "system",
    };
    config.plugins = config.plugins.filter(
      (plugin) =>
        plugin.constructor.name !== "HtmlWebpackPlugin" &&
        plugin.constructor.name !== "MiniCssExtractPlugin"
    );
    delete config.optimization;

    // Documentation at https://webpack.js.org/loaders/file-loader/
    config.module.rules = [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ];
    console.log(config.module.rules);
    return config;
  },
  devServer(configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.disableHostCheck = true;
      config.headers = config.headers || {};
      config.headers["Access-Control-Allow-Origin"] = "*";
      return config;
    };
  },
};
