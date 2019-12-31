/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    greeting: `Hi! My name is`,
    name: `J. de Freitas`,
    author: this.name,
    title: `Software Developer`,
    aboutMeIntro: `I am a Full-Stack Developer and Systems Analyst with more than 7 years of experience in delivering systems, projects, APIs and websites.`,
    socialMedia: [
      {
        name: `Twitter`,
        url: `https://twitter.com/juniormfreitas`,
        icoClass: `twitter`
      },
      {
        name: `Github`,
        url: `https://github.com/juniormfreitas`,
        icoClass: `github`
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/juniormfreitas/`,
        icoClass: `linkedin`
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
