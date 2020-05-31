const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const reactAlias = {
  development: 'react/umd/react.development.js',
  production: 'react/umd/react.production.min.js'
};

const reactDomAlias = {
  development: '@hot-loader/react-dom/umd/react-dom.development.js',
  production: 'react-dom/umd/react-dom.production.min.js'
};

module.exports = (env, argv) => {
  const mode = argv.mode || process.env.NODE_ENV || 'development';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js',
      sourceMapFilename: '[file].map',
    },
    resolve: {
      alias: {
        'react': reactAlias[mode],
        'react-dom': reactDomAlias[mode],
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    target: 'web',
    mode,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                happyPackMode: true
              }
            }
          ]
        },
      ]
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        favicon: './assets/icon1.png',
        template: './public/index.html'
      }),
      new ConcatPlugin({
        name: 'react-scripts',
        filesToConcat: ['react', 'react-dom']
      }),
      new ForkTsCheckerWebpackPlugin({
        watch: ['./src']
      })
    ],
    devServer: {
      host: 'localhost',
      port: 3000
    }
  };
};
