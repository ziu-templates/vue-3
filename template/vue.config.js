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
    {{#unless lint}}
    // 关闭eslint
    closeEslint(config);
    {{/unless}}
  },
  css: {
    loaderOptions: {
      ...antdStyle(),
    },
  },
}
;