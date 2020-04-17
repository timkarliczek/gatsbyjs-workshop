import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';

const Layout = ({children}) => (
    <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
);

export default Layout;