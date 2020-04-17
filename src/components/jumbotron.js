import React from 'react';
import Image from 'gatsby-image';
import {graphql, useStaticQuery} from 'gatsby';

const Jumbotron = () => {
    const jumbotronImage = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "thailand.jpg"}) {
                sharp: childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <div className="jumbotron">
            <h1>Hello World!</h1>
            <Image fluid={jumbotronImage.image.sharp.fluid} alt="A bay in Thailand"/>
        </div>
    );
}

export default Jumbotron;