import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Image from 'gatsby-image';
import {MDXRenderer} from 'gatsby-plugin-mdx';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            body {
                childMdx {
                    body
                }
            }
            heroImage {
                title
                fluid(maxWidth: 1260, maxHeight: 400) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
    }
`;

const PostTemplate = ({data: {contentfulBlogPost: post}}) => (
    <Layout>
        <Image fluid={post.heroImage.fluid} title={post.heroImage.title} />
        <h1>{post.title}</h1>
        <MDXRenderer>{post.body.childMdx.body}</MDXRenderer>
    </Layout>
);

export default PostTemplate;