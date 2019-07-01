const path = require('path')
const webpack = require('webpack')

let lib = [
    'vue/dist/vue.esm.js',
    'vue-router',
    'vuex',
    'axios'
]
module.exports = {
    entry: {
        lib: lib
    },
    output: {
        filename: '[name].[chunkhash].dll.js',
        path: path.resolve(__dirname, '../static/dll/'),
        library: '[name]_[chunkhash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, "./manifest.json"),
            name: '[name]_[chunkhash]'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    ]
}