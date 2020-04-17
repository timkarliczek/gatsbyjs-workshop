import {graphql, useStaticQuery} from 'gatsby';

const useContentfulPosts = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                nodes {
                    title
                    slug
                    body {body}
                    heroImage {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    `);

    return data.allContentfulBlogPost.nodes.map(post => ({
        title: post.title,
        slug: post.slug,
        body: post.body.body,
        image: post.heroImage.fluid,
    }));
};

export default useContentfulPosts;