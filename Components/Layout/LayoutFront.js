import React from 'react';
import HeaderLanding from './HeaderLanding';
import Head from 'next/head'


const LayoutFront = ({ children }) => {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div id="main-wrapper" className="dashboard">
                <HeaderLanding />
                {children}
                <div className="bg_icons"></div>
            </div>
        </>
    );
};

export default LayoutFront;