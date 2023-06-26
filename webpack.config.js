const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './front-end/index.ts',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		fallback: {
			fs: require.resolve('browserify-fs'),
			path: require.resolve('path-browserify'),
			util: require.resolve('util/'),
			buffer: require.resolve('buffer/'),
		},
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'front-end', 'index.html'),
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
			serveIndex: true,
		},
		open: true,
		port: 8080,
		hot: true,
		historyApiFallback: true,
		liveReload: true,
	},
	target: 'web',
};
