module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        assetModuleFilename: '../images/[name][ext]'
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
            }
        ]
    }
}