const path = require("path");
module.exports = {
  entry: ["./index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  performance: {
    //   maxEntrypointSize: 400000,
      maxAssetSize: 400000,
      hints: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },{
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }        
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
  }  
};