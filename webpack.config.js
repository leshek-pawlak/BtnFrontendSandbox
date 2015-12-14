var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var fontMagician = require('postcss-font-magician');
var cssNested = require('postcss-nested');
var postcssImport = require('postcss-import');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './js/index',
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, 'js') },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
    postcss: function (webpack) {
        return [
            postcssImport({
                async: true,
                addDependencyTo: webpack
            }),
            autoprefixer({
                browsers: ['last 2 versions']
            }),
            fontMagician(),
            cssNested(),
            csswring(),
        ];
    },
};
