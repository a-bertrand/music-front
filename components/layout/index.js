import * as React from 'react';
import Head from 'next/head';
import Navbar from '../sections/navbar'

import '../../static/styles/index.scss';

export default class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Magra" rel="stylesheet" />
                    <title>	&#201;cole de Musiques Actuelles d'Ancenis</title>
                    <meta charSet='utf-8' />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                </Head>
                <header>
                    <Navbar />  
                </header>
                {children}                    
            </React.Fragment>
        )
    }
}

