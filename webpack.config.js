module.exports = {
    entry: './app/main',
    output: {
        filename: './app/js/bundle.js'
    },
    module: {
        loaders: [{
	    test: /\.js$/,
	    exclude: /node_modules/,
	    loader: 'babel',
	    query: {
	        presets: ['es2015']
	    }
	}, {
          test: /\.html$/,
	  loader: 'raw'
	}]
    },
    resolve: {
        alias: {
	    'vue$': 'vue/dist/vue.js'
	}
    }
}
