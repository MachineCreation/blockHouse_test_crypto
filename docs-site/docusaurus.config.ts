import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Crypto Dashboard Docs',
  tagline: 'Track and analyze cryptocurrency data with ease',
  favicon: 'img/favicon.ico',

  // URL and Base Path Configuration
  url: 'https://your-crypto-dashboard-docs.com',
  baseUrl: '/',

  // GitHub Pages Deployment
  organizationName: 'MachineCreation',
  projectName: 'blockHouse_test_crypto',
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/MachineCreation/blockHouse_test_crypto/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/MachineCreation/blockHouse_test_crypto/edit/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/crypto-dashboard-social.jpg',
    navbar: {
      title: 'Crypto Dashboard Docs',
      logo: {
        alt: 'Crypto Dashboard Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/MachineCreation/blockHouse_test_crypto',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Setup', to: '/docs/setup' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub Discussions', href: 'https://github.com/MachineCreation/blockHouse_test_crypto/discussions' },
            { label: 'Discord', href: 'https://discord.com/invite/crypto-dashboard' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/MachineCreation/blockHouse_test_crypto' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crypto Dashboard. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
