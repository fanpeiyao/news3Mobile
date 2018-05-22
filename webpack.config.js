var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
    entry:"./src/mobile.js",
    output: {
      path: __dirname + "/dist",
      filename: "s3vue-mobile.js",
      library: 's3vue',
      libraryTarget:'umd'
    },
    devtool: 'none',
    module: {
      rules: [
        {
          test:/\.vue$/,
          loader:'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        }
      })
    ]
  },
  {
    entry:"./src/mobile.js",
    output: {
      path: __dirname + "/dist",
      filename: "s3vue-mobile.min.js",
      library: 's3vue',
      libraryTarget:'umd'
    },
    devtool: 'none',
    module: {
      rules: [
        {
          test:/\.vue$/,
          loader:'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ]
  },
  {
    entry:"./src/desktop.js",
    output: {
      path: __dirname + "/dist",
      filename: "s3vue-desktop.js",
      library: 's3vue',
      libraryTarget:'umd'
    },
    devtool: 'none',
    module: {
      rules: [
        {
          test:/\.vue$/,
          loader:'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        }
      })
    ]
  },
  {
    entry:"./src/desktop.js",
    output: {
      path: __dirname + "/dist",
      filename: "s3vue-desktop.min.js",
      library: 's3vue',
      libraryTarget:'umd'
    },
    devtool: 'none',
    module: {
      rules: [
        {
          test:/\.vue$/,
          loader:'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ]
  }
];


/*

const path = require('path');
const webpack = require('webpack');
var config = {},a=[];

function generateConfig(name,entryName) {
  var uglify = name.indexOf('min') > -1;
  var config = {
    entry: './src/'+ entryName+'.js',
    output: {
      path: __dirname + "/dist",
      filename: 's3vue-'+name + '.js',
      library: 's3vue',
      libraryTarget: 'umd'
    },
    devtool: 'none',
    module : {
      rules: [
        {
          test:/\.vue$/,
          loader:'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ];


  if (uglify) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    );
  }

  return config;
}
var entryName;
['desktop', 'desktop.min'].forEach(function (key) {
  entryName = 'desktop'
  a.push(generateConfig(key,entryName)) ;
});
console.log(a)
module.exports =a;*/



