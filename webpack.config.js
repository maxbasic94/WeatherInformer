const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/app.js',
    devServer: {
        port: 8081,
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        assetModuleFilename: '../images/[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                    }
                  },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}