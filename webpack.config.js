const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      cleanOnceBeforeBuildPatterns: ['!index.html'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use:  [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              webp: {
                quality:75
              },
              bypassOnDebug: false,
              disable: false,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader',
         ],
      },
    ],
  },
};