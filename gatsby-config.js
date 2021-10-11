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
      first: 'J.',
      last: 'de Freitas',
    },
    title: 'Software Developer',
    aboutMeIntro: 'I am a Full-Stack Web Developer with passion in build things with code.',
    socialMedia: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/juniormfreitas/',
        icoClass: 'linkedin',
      },
      {
        name: 'Github',
        url: 'https://github.com/juniormfreitas',
        icoClass: 'github',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/juniormfreitas',
        icoClass: 'twitter',
      },
    ],
    repository: 'https://github.com/juniormfreitas/jfreitas.dev',
    navigation: [
      {
        label: 'Home',
        path: '/',
        icon: '',
      },
      {
        label: 'Blog',
        path: '/blog',
        icon: '',
      },
      {
        label: 'About me',
        path: '/about',
        icon: '',
      },
    ],
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
        background_color: '#e34f26',
        theme_color: '#e34f26',
        display: 'standalone',
        icon: 'src/img/favicon/icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        breakpoints: [576, 768, 992, 1200],
        backgroundColor: 'transparent',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['UA-75050740-3'],
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};
