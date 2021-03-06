const { getRouterConfig, } = require('./router');
const { kebabCase } = require('lodash');
const { resolve } = require('path');

const base = process.env.NODE_ENV === 'production' ? '/ahooks-vue' : '';

module.exports = {
  title: 'ahooks-vue',
  description: 'vue hooks',
  // srcIncludes: ['./src/'],
  alias: {
    'ahooks-vue': resolve('./src/'),
  },
  outDir: '../dist',
  base,
  themeConfig: {
    lang: 'en-US',
    lastUpdated: '最近更新',
    // algolia: {
    //   apiKey: 'c57105e511faa5558547599f120ceeba',
    //   indexName: 'vitepress',
    // },
    repo: 'dewfall123/ahooks-vue',
    repoLabel: 'Github',
    prevLink: true,
    nextLink: true,
    locales: {
      '/': {
        lang: 'en-US',
        title: 'ahooks-vue',
        description: 'vue hooks',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/' },
          { text: 'Document', link: `/${kebabCase('useSize')}/` },
        ],
        sidebar: getRouterConfig(),
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'ahooks-vue',
        description: 'vue hooks',
        label: '中文',
        selectText: '语言',
        nav: [
          { text: '指南', link: '/zh/' },
          { text: '文档', link: `/zh/${kebabCase('useSize')}/` },
        ],
        sidebar: getRouterConfig('/zh/'),
      },
    },
  },
};
