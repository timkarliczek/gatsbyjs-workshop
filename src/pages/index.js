import React from 'react';
import {Link} from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron.js'
import useContentfulPosts from '../hooks/use-contentful-posts'


export default () => {
    const posts = useContentfulPosts();
    return (
        <>
            <Layout>
                <SEO pageTitle="Homepage" pageDescription="Fancy homepage"/>
                <Jumbotron/>
                <h2 style={{textAlign: 'center'}}>My Blog Posts</h2>
                {posts.map(post => (
                    <article key={post.slug} className="post-preview">
                        <h2>
                            <Link to={post.slug}>
                                {post.title}
                            </Link>
                        </h2>
                        <Link to={post.slug}>Click here to read the post</Link>
                    </article>
                ))}
            </Layout>
        </>
    );
};