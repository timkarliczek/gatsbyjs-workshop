require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'Frontend Workshop',
        description: 'Our mini Frontend Workshop',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'images'
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: require.resolve('./src/pages'),
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayout: {
                    default: require.resolve('./src/components/layout.js')
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1260,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true,
            },
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
                production: true,
                disable: !process.env.ANALYZE_BUDNLE_SIZE,
                generateStatsFile: true,
                analyzerMode: 'static'
            },
        },
    ],
};