/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://jfreitas.dev`,
    greetings: [
      `Hello`,
      `Hi`,
      `Olá`,
    ],
    name: [
      {
        first: `J.`,
        middle: `de`,
        last: `Freitas`
      }
    ],
    title: `Software Developer`,
    aboutMeIntro: `I am a Full-Stack Web Developer with experience in delivering systems, APIs and websites.`,
    socialMedia: [
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/juniormfreitas/`,
        icoClass: `linkedin`
      },
      {
        name: `Github`,
        url: `https://github.com/juniormfreitas`,
        icoClass: `github`
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/juniormfreitas`,
        icoClass: `twitter`
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
