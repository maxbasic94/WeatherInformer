module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        assetModuleFilename: '../images/[name][ext]'
    }
}