module.exports = {
  siteMetadata: {
    title: ``,
    author: ``,
    description: ``,
    keywords: ``,
    siteUrl: ``,
    image: ``,
    social: {
      twitter: ``,
    },
  },
  flags: { DEV_SSR: true },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [{ resolve: `gatsby-plugin-emotion` }],
};
