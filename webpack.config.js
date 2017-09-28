'use strict';

const path				= require('path');
const webpack			= require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackDashboard	= require('webpack-dashboard/plugin');

const extractSass = new ExtractTextPlugin({
	filename: '[name].css',
	disable: process.env.NODE_ENV === 'development'
});

let config = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:9090',
		'react-hot-loader/patch',
		path.join(__dirname, 'app/index.jsx'),
		path.join(__dirname, 'styles/style.sass')
	],
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		port: 9090,
		inline: true,
		publicPath: '/'
	},
	plugins: [
		extractSass,
		new CopyWebpackPlugin([
			{ from: 'static/' }
		]),
		new WebpackDashboard(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader/webpack', 'babel-loader']
			},
			{
				test: /\.json/,
				loaders: ['json-loader']
			},
			{
				test: /\.sass/,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader'
						}
					],
					fallback: 'style-loader',
				}),
			}
		]
	}

};

module.exports = config;
