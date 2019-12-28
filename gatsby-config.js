/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    greeting: `Hi! My name is`,
    name: `J. de Freitas`,
    aboutMeIntro: `I am a full-stack web developer`,
    socialMedia: [
      {
        name: `Twitter`,
        url: `https://twitter.com/juniormfreitas`,
        icon: `twitter.svg`
      },
      {
        name: `Github`,
        url: `https://github.com/juniormfreitas`,
        icon: `github.svg`
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/juniormfreitas/`,
        icon: `linkedin.svg`
      },
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `500`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:400,500`
        ],
        display: 'swap'
      }
    },
  ]
}
