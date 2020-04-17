exports.createPages = async ({actions, graphql, reporter}) => {
    const contenfulResult = await graphql(`         
        query {
          allContentfulBlogPost {
            nodes {
              slug
            }
          }
        }
    `);

    if (contenfulResult.error) {
        reporter.panic('failed to create posts', contenfulResult.errors);
    }

    const contentfulPosts = contenfulResult.data.allContentfulBlogPost.nodes;

    contentfulPosts.forEach(post => {
        actions.createPage(
            {
                path: post.slug,
                component: require.resolve('./src/templates/post.js'),
                context: {
                    slug: post.slug,
                }
            }
        );
    });
};