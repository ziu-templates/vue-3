{{#unless lint}}
/**
 * 关闭eslint配置
 * @param config
 */
function closeEslint(config) {
  const eslintRule = config.module.rule('eslint')

  // 清除已有的所有 eslint loader。
  eslintRule.uses.clear();
}
{{/unless}}
{{#antd}}
/**
 * antd样式配置
 * @returns { {less: {modifyVars: {"primary-color": string}, javascriptEnabled: boolean}} }
 */
function antdStyle() {
  return {
    less: {
      modifyVars: {
        'primary-color': '#1DA57A',
      },
      javascriptEnabled: true,
    },
  };
}
{{/antd}}

module.exports = {
  chainWebpack: config => {
    {{#unless lint}}
    // 关闭eslint
    closeEslint(config);
    {{/unless}}
  },
  css: {
    loaderOptions: {
      {{#antd}}
      // use ant design vue
      ...antdStyle(),
      {{/antd}}
    },
  },
  assetsDir: 'static',
  indexPath: 'main.html',
  pages: {
    main: {
      entry: 'src/main.js',
        // 模板来源
        template: 'public/main.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
    }
  },
  devServer: {
    https: false,
    host: 'localhost',
    port: '8080',
  },
  publicPath: '/', // 不同项目，可以修改为不同的path路径
};