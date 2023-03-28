/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docs: [
    { type: 'doc', id: 'intro' },
    {
      type: 'category',
      label: 'SysML-2',
      items: [
        'sysml-2/语言简介',
        'sysml-2/工具',
        {
          type: 'category',
          label: '规范',
          items: [
            'spec/sysml2/6 introduction',
            {
              type: 'category',
              label: '7 语言描述',
              link: {
                type: 'generated-index',
                title: '7 语言描述',
              },
              items: [{ type: 'autogenerated', dirName: 'spec/sysml2/7' }],
            },
            ,
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'KerML',
      items: [
        {
          type: 'category',
          label: '规范',
          items: [
            'spec/kerml/6 介绍',
            {
              type: 'category',
              label: '7 语言描述',
              link: {
                type: 'generated-index',
                title: '7 语言描述',
              },
              items: [{ type: 'autogenerated', dirName: 'spec/kerml/7' }],
            },
            {
              type: 'category',
              label: '8 元模型',
              link: {
                type: 'generated-index',
                title: '8 元模型',
              },
              items: [{ type: 'autogenerated', dirName: 'spec/kerml/8' }],
            },
          ],
        },
        ,
      ],
    },
    {
      type: 'category',
      label: '方法论',
      items: [{type: 'autogenerated', dirName: '建模方法'}]
    }
  ],
  resources: [
    {
      type: 'autogenerated',
      dirName: 'resources',
    },
  ],
}

module.exports = sidebars
