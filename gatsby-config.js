/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://jfreitas.dev',
    siteAddress: 'jfreitas.dev',
    greetings: ['Hello', 'Hi', 'Olá', 'Howdy', 'Bonjour', 'Hola'],
    name: {
      first: 'Jose',
      last: 'de Freitas Jr.',
    },
    title: 'Software Engineer',
    aboutMeIntro: 'I am a Software Engineer with a passion for building things with code.',
    since: 2013,
    socialMedia: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/thejfreitas/',
        icon: 'linkedin',
      },
      {
        name: 'Github',
        url: 'https://github.com/thejfreitas',
        icon: 'github',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/thejfreitas',
        icon: 'twitter',
      },
    ],
    repository: 'https://github.com/thejfreitas/jfreitas.dev',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Poppins:400,500'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jfreitas.dev',
        short_name: 'jfreitas.dev',
        start_url: '/',
        background_color: '#0093e9',
        theme_color: '#004269',
        display: 'standalone',
        icon: 'src/img/favicon/icon.png',
      },
    },

    'gatsby-plugin-offline',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-JRGTGBFGX1'],

        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};
