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

  /**
   * 修改编译后的html文件名
   * @param config
   * @constructor
   */
  function chHtmlFileName(config) {
    config.plugin('html')
      .tap(args => {
        args[0].filename = 'main.html';
        return args;
      });
  }

module.exports = {
  chainWebpack: config => {
    chHtmlFileName(config);
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
  publicPath: '/', // 不同项目，可以修改为不同的path路径
};