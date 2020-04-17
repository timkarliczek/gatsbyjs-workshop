import React from 'react';
import {Helmet} from 'react-helmet';
import useStaticMetadata from '../hooks/use-sitemetadata'

const SEO = ({pageTitle, pageDescription}) => {
    const {title, description} = useStaticMetadata();

    const siteTitle = pageTitle || title;
    const siteDescription = pageDescription || description;

    return (
        <Helmet>
            <html lang="de"/>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription}/>
        </Helmet>
    );
};

export default SEO;