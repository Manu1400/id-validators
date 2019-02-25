// const webpack = require("webpack");
// const path = require("path");

module.exports = {
  resolve: {
    alias: {
      // 'uri-js': path.resolve('.', 'node_modules', 'uri-js', 'dist', 'es5', 'uri.all.js'),
      // 'uk-modulus-checking': path.resolve('.', 'node_modules', 'uk-modulus-checking', 'src', 'index.js'),
    },
  },
  output: {
    // path: path.resolve(__dirname, "./public"),
    filename: './[name].js',
    chunkFilename: '[name].bundle.js',
    libraryTarget: 'window',
    libraryExport: 'default',
    publicPath: './src/DE/',
  },
  module: {
    rules: [/* {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, */
    /*
    {
       type: 'javascript/auto',
       test: /\.json$/,
       use: [{
         loader: 'file-loader',
         options: {
           name(file) {
            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }
            return '[hash].[ext]';
          },
         },
       }],
      // include: /\.\/config/  // for e.g, but better to only copy particular JSON files (not all)
    } */
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
  plugins: [
  ],
};
