module.exports = {
    configureWebpack: {
        resolve: {
            // extensions: []  省略后缀名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}