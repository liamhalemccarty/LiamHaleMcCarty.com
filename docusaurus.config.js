// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { searchForFacetValues } = require('@algolia/client-search');
// For math equations
const math = require('remark-math');
const katex = require('rehype-katex');

// function varyFont(value) { 
//   let css_value = "SRIF" + value; 
//   document.body.style.fontVariationSettings = css_value; 
// }

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Liam Hale McCarty',
  tagline: 'My personal portfolio of projects. Enjoy!',
  url: 'https://www.LiamHaleMcCarty.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/logo/favicon.ico',

  themes: ['@docusaurus/theme-live-codeblock'],

  plugins: [
    // '@docusaurus/plugin-ideal-image',
    [
      // See 'presets' for the first instance of the blog plugin (for my portfolio)
      '@docusaurus/plugin-content-blog',
      {
        // Required for any multi-instance plugin
        id: 'blog',
        path: 'blog', // This is the default
        routeBasePath: '/blog',
        blogTitle: 'Blog',
        blogDescription: 'Liam Hale McCarty\'s blog',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Blog',
        postsPerPage: 'ALL',
        showReadingTime: true,
        // For math equations
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Keeping this here in case I want to enable docs in the future
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        // },
        docs: false, // this disables docs
        // See 'plugins' for the first instance of the blog plugin (for my blog)
        blog: {
          path: 'portfolio', // 'blog' is the default
          routeBasePath: '/',
          blogTitle: 'Portfolio',
          blogDescription: 'Liam Hale McCarty\'s portfolio of projects',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Portfolio',
          postsPerPage: 'ALL',
          showReadingTime: false,
          // For math equations
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-9DLY1W601T',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  scripts: [
    {
      src: '/scripts/font.js',
      defer: true,
    }
  ],

  stylesheets: [
    // For math equations
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'images/what-im-working-on/what_im_working_on.jpg',
      navbar: {
        title: 'Liam Hale McCarty',
        logo: {
          alt: 'Liam Hale McCarty',
          src: 'images/logo/liam-logo.png',
        },
        items: [
          {
            label: 'About',
            to: '/about',
          },
          // TODO: Fix this so it isn't highlighted for every page (because it uses the root path)
          // I think the right fix is moving my portfolio to /portfolio and enforcing a redirect from the base domain to /portfolio
          // {
          //   label: 'Portfolio',
          //   to: '/',
          // },
          // Commenting out until I have blog content
          // See also commented out in the footer
          // {
          //   label: 'Blog',
          //   to: '/blog',
          // },
          {
            label: 'Get Updates',
            position: 'right',
            to: 'https://docs.google.com/forms/d/e/1FAIpQLSesOp1mSx8Aql_bjOFvN4Q9J7Y-P6ZrD3iK_2sX7s7fl1Fg3A/viewform?usp=sf_link',
          },
          {
            label: 'Contact Me',
            position: 'right',
            to: 'https://docs.google.com/forms/d/e/1FAIpQLSdS9SkG2tucancVwk-v6BDi7hTq3vTDCnPqVPrHrXn-j-wjcQ/viewform?usp=sf_link',
          },
          // Variable font slider
          {
            type: 'html',
            position: 'right',
            value: '<div id="variable-font-slider"><label id="sans-label" for="sans-to-serif">Sans</label><input id="sans-to-serif" type="range" name="sans-to-serif" min="0" max="1000" value="0" oninput="varyFont(this.value)"/><label id="serif-label" for="sans-to-serif">Serif</label><div class="tooltip">&#8505;<span class="tooltip-text">This website uses a <a href="/font">font</a> I created! It\'s a variable font that can slide continuously between <span class="sans">sans</span> and <span class="serif">serif</span>. Try moving the slider and watch the text change.</span></div></div>',
          },
          // {
          //   type: 'dropdown',
          //   label: 'Art',
          //   position: 'right',
          //   items: [
          //     {
          //       label: 'Metaphysics',
          //       to: '/metaphysics',
          //     },
          //     {
          //       label: 'Enlightenment',
          //       to: '/enlightenment',
          //     },
          //     {
          //       label: 'Reverie',
          //       to: '/reverie',
          //     },
          //     {
          //       label: 'Songwriting',
          //       to: '/songwriting',
          //     },
          //     {
          //       label: 'Box of Mirrors',
          //       to: '/box-of-mirrors',
          //     },
          //     {
          //       label: 'Photography',
          //       to: '/photography',
          //     },
          //     {
          //       label: 'fArtism',
          //       to: '/fartism',
          //     },
          //     {
          //       label: 'Green Education',
          //       to: '/green-education',
          //     },
          //   ],
          // },
          // {
          //   type: 'dropdown',
          //   label: 'Science',
          //   position: 'right',
          //   items: [
          //     {
          //       label: 'Metaphysics',
          //       to: '/metaphysics',
          //     },
          //     {
          //       label: 'Green Education',
          //       to: '/green-education',
          //     },
          //     {
          //       label: 'Young Scientist Challenge',
          //       to: '/young-scientist-challenge',
          //     },
          //   ],
          // },
          // {
          //   type: 'dropdown',
          //   label: 'Technology',
          //   position: 'right',
          //   items: [
          //     {
          //       label: 'Verified Inc.',
          //       to: '/verified-inc',
          //     },
          //     {
          //       label: 'Be Heard',
          //       to: '/be-heard',
          //     },
          //     {
          //       label: 'Data and Power',
          //       to: '/data-and-power',
          //     },
          //     {
          //       label: 'Young Scientist Challenge',
          //       to: '/young-scientist-challenge',
          //     },
          //   ],
          // },
          // {
          //   type: 'dropdown',
          //   label: 'Politics',
          //   position: 'right',
          //   items: [
          //     {
          //       label: 'Be Heard',
          //       to: '/be-heard',
          //     },
          //     {
          //       label: 'The Truths of Fake News',
          //       to: '/the-truths-of-fake-news',
          //     },
          //     {
          //       label: 'Trump Donald',
          //       to: '/trump-donald',
          //     },
          //     {
          //       label: 'Data and Power',
          //       to: '/data-and-power',
          //     },
          //   ],
          // },
          // {
          //   type: 'dropdown',
          //   label: 'Writing',
          //   position: 'right',
          //   items: [
          //     {
          //       label: 'Data and Power',
          //       to: '/data-and-power',
          //     },
          //     {
          //       label: 'Articles',
          //       to: '/articles',
          //     },
          //   ],
          // },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Portfolio',
                to: '/',
              },
              {
                label: 'About',
                to: '/about',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Tags',
                to: '/tags',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Get Updates',
                to: 'https://docs.google.com/forms/d/e/1FAIpQLSesOp1mSx8Aql_bjOFvN4Q9J7Y-P6ZrD3iK_2sX7s7fl1Fg3A/viewform?usp=sf_link',
              },
              {
                label: 'Contact Me',
                to: 'https://docs.google.com/forms/d/e/1FAIpQLSdS9SkG2tucancVwk-v6BDi7hTq3vTDCnPqVPrHrXn-j-wjcQ/viewform?usp=sf_link',
              },
              {
                label: '@LiamHaleMcCarty',
                href: 'https://linktr.ee/liamhalemccarty',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/LiamHaleMcCarty',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/@LiamHaleMcCarty',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/LiamHaleMcCarty',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@LiamHaleMcCarty',
              },
            ],
          },
          {
            // Blank character to make vertical spacing consistent across columns
            title: '‎',
            items: [
              {
                label: 'X',
                href: 'https://x.com/LiamHaleMcCarty',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@LiamHaleMcCarty',
              },
              {
                label: 'Threads',
                href: 'https://www.threads.net/@LiamHaleMcCarty',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LiamHaleMcCarty',
              },
            ],
          },
        ],
        copyright: `Copyright &copy; ${new Date().getFullYear()} Liam Hale McCarty. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'announcement',
        content:
          'I pledge to give at least 2% of my time and money to charity. I hope you\'ll join me in taking this <a href="/the-two-cent-pledge">Two Cent Pledge</a>.',
        backgroundColor: '#0dbc3d',
        textColor: '#ffffff',
      },
    }),
};

module.exports = config;
