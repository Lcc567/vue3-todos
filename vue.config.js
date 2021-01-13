const webpack = require('webpack');

module.exports = {
    chainWebpack: (config) => {
        config
            .plugin('ContextReplacementPlugin')
            .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);
    }
}