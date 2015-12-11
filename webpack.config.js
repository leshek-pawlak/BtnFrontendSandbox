var webpack = require('webpack');
var path = require('path');

var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './js/index',
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/',
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015'] } },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions'] }), csswring],
};
