const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: '#inline-source-map',
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/js'
    ],

    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'dist/app.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src/js')
            },
            {
                test: /\.scss/,
                loaders: [
                    'style',
                    'css',
                    'sass?sourceMap'
                ],
                include: path.join(__dirname, 'src/scss')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};
