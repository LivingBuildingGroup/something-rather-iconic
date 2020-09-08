'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
    }),
  ],
  externals: {
    'react': 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    'react-dom': 'react-dom',
    'browser-helpers': 'browser-helpers',
    'chart.js': 'chart.js',
    'conjunction-junction': 'conjunction-junction',
    'graphing-helpers': 'graphing-helpers',
    'react-chartjs-2': 'react-chartjs-2',
    'pretty-colors': 'pretty-colors',
  }
};