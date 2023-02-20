module.exports = function(context, options) {
    return {
        name: 'doc-yaml-loader',
        configureWebpack(config, isServer) {
            return {
                module: {
                    rules: [
                        {test: /\.ya?ml$/,
                    use: 'yaml-loader'}
                    ]
                }
            }
        }
    }
}