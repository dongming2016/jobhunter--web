process.env.NODE_ENV = 'production';
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: path.join(__dirname, "src"),
	devtool: debug ? "inline-sourcemap" : "",
	devServer: {
			contentBase: './dist',
			publicPath: '/myapp/front'
    },
	entry: {
		app: './app.js',
		vendor: ['angular', '@uirouter/angularjs', 'angular-cookies', 'angular-translate']
	},
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle_[hash].js',
		publicPath: '/myapp/front',
	},
	module: {
		rules: [
		{
		  test: /\.js$/,
		  exclude: /(node_modules|bower_components)/,
		  use: {
			loader: 'babel-loader',
			options: {
			}
		  }
		},
		{
			test: /\.(png|jpg|gif|jpeg)$/,
			use: [
				{
					loader: 'file-loader',
					options: {}
				}
			]
		},
		{
			test: /\.(svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
			}
		},
		{
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
			}
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract(
			{
				fallback: 'style-loader',
				use:[
				'css-loader',
				'postcss-loader'
			]
			})
		},
		{
		  test: /\.(html)$/,
		  use: {
			loader: 'html-loader',
			options: {
			  attrs: [':data-src']
			}
		  }
		}
	]},
	plugins: [
		new ExtractTextPlugin('index.css?[hash]'),
		new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename:"vendor.js"}),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'index.ejs',
			hash: true
		})
	]
};