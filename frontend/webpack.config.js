/**
 * Created by vladimirn on 11/27/15.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isDev = process.env.NODE_ENV === 'development';
var outputPath = isDev ? path.join(__dirname, 'dist') : 'public/assets';
var calculatedPublicPath = isDev ? '/dist/' : 'public/assets';
var appEntries = isDev ? [ 'webpack-dev-server/client?http://localhost:8080','./frontend/app.js'] : ['./frontend/app.js']
module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "bower_components", "./frontend"],
        extensions: ["", ".js", ".min.js", ".scss"]
    },
    entry: {
        app: appEntries
    },
    devtool: "source-map",
    output: {
        path: outputPath,
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "public",
        inline: true,
        watch: true
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader?sourceMap!sass-loader?sourceMap&sourceMapContents")
            },
            {
                test: /\.(ttf|eot|woff|svg|jpe?g|gif|png)[\?]?.*$/,
                loader: 'url',
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
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("styles.css?[hash]")
    ]
};
