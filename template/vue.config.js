{{#lint}}
{{#if_eq lintConfig "airbnb"}}
/**
 * 关闭eslint配置
 * @param config
 */
function closeEslint(config) {
  const eslintRule = config.module.rule('eslint')

  // 清除已有的所有 eslint loader。
  eslintRule.uses.clear();
}
{{/if_eq}}
{{/lint}}
/**
 * antd样式配置
 * @returns {{less: {modifyVars: {"primary-color": string}, javascriptEnabled: boolean}}}
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
    {{#lint}}
    {{#if_eq lintConfig "airbnb"}}
    // 关闭eslint
    closeEslint(config);
    {{/if_eq}}
      {{/lint}}
  },
  css: {
    loaderOptions: {
      ...antdStyle(),
    },
  },
}
;