module.exports = {
  entry : {
    index: './src/index.js',
  },
  output : {
    path : `${__dirname}/public`,
    filename : '[name].bundle.js',
    publicPath: '/',
  },
  devtool : 'source-map',
  devServer : {
    contentBase: './public',
    port : 8080,
    hot: true,
    stats: { colors: true },
  },
  module : {
    loaders :[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      }
    ]
  }
};
