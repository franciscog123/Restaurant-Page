const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
    about: './src/modules/about.js',
    contact: './src/modules/contact.js',
    footer: './src/modules/footer.js',
    header: './src/modules/header.js',
    menu: './src/modules/menu.js',
  },
  output: {
    filename: '[name].bundle.js',
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