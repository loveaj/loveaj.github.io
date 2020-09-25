const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        indexpage: path.resolve(__dirname, './src/assets/js/index-page.js'),
        fullpagecustom: path.resolve(__dirname, './src/assets/css/fullpage-custom.css'),
    },
    output: {
        path: path.resolve(__dirname, './assets/'),
        filename: isProduction ? '[name].[hash].bundle.js' : '[name].bundle.js',
        chunkFilename: isProduction ? '[id].[hash].bundle.js' : '[id].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name(resourcePath, resourceQuery) {
                    if (process.env.NODE_ENV === 'development') {
                        return '[name].[ext]';
                    }
            
                    return '[contenthash].[ext]';
                    },
                },
              },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].[hash].css' : '[name].css'
        }),
        new ManifestPlugin({
            fileName: '../_data/manifest.yml',
            publicPath: './assets/',
        }),
    ],
};