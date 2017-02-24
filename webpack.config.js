const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: './src/vendor.js',
        main: './src/index.jsx'
    },
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'chunk.[id].js',
        path: path.resolve(__dirname, 'public/assets'),
        publicPath: '/assets'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}
