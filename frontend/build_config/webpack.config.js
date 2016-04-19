var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var postcssMergeRules = require('postcss-merge-rules');
var postcssMergeLonghands = require('postcss-merge-longhand');
var postcssMergeIdents = require('postcss-merge-idents');
var cssMqPacker = require('css-mqpacker');
var postcssSvgGo = require('postcss-svgo');


const autoprefix = {
  browsers: [
    'last 2 Chrome versions',
    'last 2 iOS versions',
    'last 1 ff version',
    'last 1 ie version',
    'Android >= 4',
    'Android 2.3',
    'last 2 Edge versions',
  ],
};

module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "bower_components", "./frontend"],
        extensions: ["", ".js", ".min.js", ".scss", ".css"]
    },
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            './frontend/app.js',
            './frontend/styles/app.scss'
        ]
    },
    devtool: "source-map",
    output: {
        publicPath: 'public/assets',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: "public",
        inline: true,
        hot: true,
        watch: true
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap!postcss")
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css?sourceMap!autoprefixer")
            },
            {
                test: /\.(ttf|eot|woff|svg|jpe?g|gif|png)[\?]?.*$/,
                loader: 'file',
                query: {
                    name: '[name][hash].[ext]',
                    limit: 10000
                }
            },
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [
                    /node_modules/,
                    /libs/,
                    /vendor/,
                    /bower_components/,
                ]
            },
            {
                test: /\.css$/,
                loader: "style!css?sourceMap",
                exclude: [
                    /node_modules/,
                    /libs/,
                    /vendor/
                ]
            }
        ]
    },
    sassLoader: {
      sourceMapContents: true
    },
    postcss: () => [
        autoprefixer(autoprefix),
        postcssMergeRules,
        postcssMergeLonghands,
        postcssMergeIdents,
        cssMqPacker,
        postcssSvgGo,
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom'
      }),
      new ExtractTextPlugin("styles.css")
    ]
};
