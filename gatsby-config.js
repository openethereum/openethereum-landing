module.exports = {
  siteMetadata: {
    title: `Open Ethereum`,
    description: `Open Ethereum`,
    author: `Gnosis`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`nunito\:300,400`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `open ethereum`,
        short_name: `oe`,
        start_url: `/`,
        background_color: `#0e0e0e`,
        theme_color: `#0e0e0e`,
        display: `standalone`,
        icon: `src/images/favicon.svg`,
        legacy: false,
      },
    },
  ],
}
