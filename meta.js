/**
 * package.json元数据
 */

module.exports = {

  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project with ziu',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code?',
    },
    lintConfig: {
      when: 'lint',
      type: 'list',
      message: 'Pick an ESLint preset',
      choices: [
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb',
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none',
        },
      ],
    },
    antd: {
      type: 'confirm',
      message: 'Use Ant Design Vue?',
    },
    gitCommitMsg: {
      type: 'confirm',
      message: 'Use commitlint to check commit message?(Angular Commit Message)',
    },
    img: {
        type: 'confirm',
        message: 'Use Picture Compression?',
    },
    changelog: {
      type: 'confirm',
      message: 'Use CHANGELOG?',
    },
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    '.huskyrc': 'gitCommitMsg',
    'commitlint.config.js': 'gitCommitMsg',
  },
};