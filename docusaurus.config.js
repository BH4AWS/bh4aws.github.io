const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Dr.KaiShi',
  tagline: 'Dinosaurs are cool',
  url: 'https://bh4aws.github.io',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Dr.KaiShi', // Usually your GitHub org/user name.
  projectName: 'Dr.KaiShi website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dr.KaiShi',
        logo: {
          alt: 'Dr.KaiShi',
          src: 'img/logo.svg',
        },
        items: [
		  {
            type: 'docsVersionDropdown',
            position: 'right',
          },
		  {to: '/blog', label: 'PersonalCV', position: 'left'},
		  {to: '/blog', label: 'Publications', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Team',
          },
          {to: '/blog', label: 'Projects', position: 'left'},
		  {to: '/blog', label: 'Talks', position: 'left'},
		  {to: '/blog', label: 'PersonalInterests', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {

        links: [
          {
            title: 'Personal Contact information',
            items: [
              {
                label: 'E-Mail: BH4AWS@163.com',
                to: '/docs/intro',
              },
			  {
				label: 'WeChat: BH4AWS',
                to: '/docs/intro',
			  }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'East China University of Science and Technology',
                href: 'https://www.ecust.edu.cn/',
              },
              {
                label: 'East China University of Science and Technology',
                href: 'https://www.ecust.edu.cn/',
              },
              {
                label: 'East China University of Science and Technology',
                href: 'https://www.ecust.edu.cn/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `<strong>Copyright © ${new Date().getFullYear()} Dr.KaiShi All Rights Reserved.</strong>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
