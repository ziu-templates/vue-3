{{#!lint}}
/**
 * 关闭eslint配置
 * @param config
 */
function closeEslint(config) {
  const eslintRule = config.module.rule('eslint')

  // 清除已有的所有 eslint loader。
  eslintRule.uses.clear();
}
{{/lint}}
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

module.exports = {
  chainWebpack: config => {
    {{#!lint}}
    // 关闭eslint
    closeEslint(config);
    {{/lint}}
  },
  css: {
    loaderOptions: {
      ...antdStyle(),
    },
  },
}
;