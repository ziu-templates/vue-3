
{{#antd}}
/**
 * antd按需加载
 * @returns {*[]}
 */
function antdBabel() {
  return [
    "import",
    { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
  ];
}
{{/antd}}

module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    {{#antd}}
    // antd按需加载
    antdBabel(),
    {{/antd}}
  ],
};
