const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const buildStubServer = require('./stub/server');
const outDirectory = path.join(__dirname, 'dist');

console.log("cross-env", process.env.BACKEND_URL);

module.exports = {
    mode: "development",
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
            BACKEND_URL: `"${process.env.BACKEND_URL || "http://0.0.0.0:5000"}"`
        }),
        //new CompressionPlugin
    ],
    devServer: {
        contentBase: outDirectory,
        compress: true,
        historyApiFallback: true,
        port: 9000
    }
};