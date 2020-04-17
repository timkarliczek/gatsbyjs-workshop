import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout'
import Waves from '../components/waves'

export default () => {
    return (
        <>
            <Layout>
                <SEO pageTitle="About me" pageDescription="About me page."/>
                <h1>About me</h1>
                <p>This is the about page!</p>
                <Waves/>
            </Layout>
        </>
    );
};