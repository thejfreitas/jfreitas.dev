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
    name: {
      first: `J.`,
      middle: `de`,
      last: `Freitas`,
    },
    title: `Software Developer`,
    aboutMeIntro: `I am a Full-Stack Web Developer with passion in build things with code.`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-75050740-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jfreitas.dev`,
        short_name: `jfreitas.dev`,
        start_url: `/`,
        background_color: `#e34f26`,
        theme_color: `#e34f26`,
        display: `standalone`,
        icon: `src/img/favicon/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
  ]
}
