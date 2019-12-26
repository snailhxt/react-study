const { override, fixBabelImports,addBabelPlugins } = require('customize-cra');
module.exports = override(
     addBabelPlugins( // 支持装饰器器
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ] ),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }), );