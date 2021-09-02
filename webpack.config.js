const path = require("path");
const webpack = require("webpack");
const { typescript } = require("svelte-preprocess");

const mode = "development";

module.exports = [
  {
    mode,
    entry: "./svelte/entry.ts",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, `./public`),
      publicPath: "",
    },
    resolve: {
      alias: {
        svelte: path.resolve("node_modules", "svelte"),
      },
      extensions: [".mjs", ".js", ".ts", ".svelte"],
      mainFields: ["svelte", "browser", "module", "main"],
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "svelte-loader",
              options: {
                emitCss: false,
                hydratable: true,
                immutable: true,
                dev: true,
                preprocess: [typescript()],
              },
            },
          ],
        },
        {
          test: /\.(mjs|js|jsx|tsx|ts)$/,
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              [
                "@babel/preset-env",
                {
                  // @ts-ignore
                  targets: {
                    safari: "12.1",
                  },
                  useBuiltIns: "usage",
                  corejs: {
                    version: 3,
                  },
                },
              ],
            ],
          },
          exclude: /node_modules(?!\/(svelte))/,
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 8000,
    },
  },
];
