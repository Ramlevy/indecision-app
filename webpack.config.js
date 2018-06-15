const path = require('path');  // require is built in Node Function

//entry -> output

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),  // using node path to create specific path for the bundle file
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,  
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',  // sourcamap - lets chrome know where the error is(show which file instead of bundle.js)
    devServer: {     // webpack-dev-server package, server from the "public" path
         contentBase: path.join(__dirname, 'public')
    }
};