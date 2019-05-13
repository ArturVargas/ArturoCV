
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Elemento principal
    entry: './src/index.js',
    // Con el Output construimos el nombre de la carpeta para archivos de prod
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                // Le decimos con que extensiones estamos trabajando.
                test: /\.(js|jsx)$/,
                // Excluimos los modulos de node para que no compile los js | jsx.
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
            file: "./index.html"
        })
    ]
}