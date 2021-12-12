/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: "https://jfreitas.dev",
    siteAddress: "jfreitas.dev",
    greetings: ["Hello", "Hi", "Olá"],
    name: {
      first: "J.",
      middle: "de",
      last: "Freitas",
    },
    title: "Software Developer",
    aboutMeIntro:
      "I am a Full-Stack Web Developer with passion in build things with code.",
    socialMedia: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thejfreitas/",
        icoClass: "linkedin",
      },
      {
        name: "Github",
        url: "https://github.com/thejfreitas",
        icoClass: "github",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/thejfreitas",
        icoClass: "twitter",
      },
    ],
    repository: "https://github.com/thejfreitas/jfreitas.dev",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Poppins:400,500"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "jfreitas.dev",
        short_name: "jfreitas.dev",
        start_url: "/",
        background_color: "#e34f26",
        theme_color: "#e34f26",
        display: "standalone",
        icon: "src/img/favicon/icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["UA-75050740-3"],
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
}
