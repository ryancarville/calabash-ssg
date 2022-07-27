require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  siteMetadata: {
    title: `calabash-ssg`,
    siteUrl: `https://www.calabashbequia.com`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID
      }
    },
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: [
          'ksf3l9damcnm9nt2ia13pv5sa4@group.calendar.google.com',
          '9hmuhj2fb93h4c5gilsiimbukk@group.calendar.google.com',
          'raairncpt4842lncef4hu9ap0o@group.calendar.google.com'
        ],
        // options to retrieve the next 10 upcoming events
        timeMin: new Date().toISOString(),
        maxResults: 1000,
        singleEvents: true,
        orderBy: 'startTime'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-160604417-1'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.calabashvillabequia.com',
        sitemap: 'https://www.calabashbequia.com/sitemap/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'react-slideshow-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
};
