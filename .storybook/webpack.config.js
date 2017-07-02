// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const getClientEnvironment = require('../config/env');
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = '';
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, configType) => {
	const config = genDefaultConfig(baseConfig, configType);

	// Makes some environment variables available in index.html.
	// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
	// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
	// In development, this will be an empty string.
	config.plugins.unshift(new InterpolateHtmlPlugin(env.raw));
	// Makes some environment variables available to the JS code, for example:
	// if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
	config.plugins.unshift(new webpack.DefinePlugin(env.stringified));

	return config;
};

// // Export a function. Accept the base config as the only param.
// module.exports = {
// 	plugins: [new InterpolateHtmlPlugin(env.raw), new webpack.DefinePlugin(env.stringified)],
// };
