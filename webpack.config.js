const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext]",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg)/,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "/src/assets/styles/variables.scss";',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/public"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
};
