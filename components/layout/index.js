import * as React from 'react';
import Head from 'next/head';
import Navbar from '../sections/navbar'

import '../../static/styles/index.scss';

export default class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
                <title>L'&#201;cole de Musiques Actuelles d'Ancenis</title>
                <header>
                    <Navbar />  
                </header>
                {children}                    
            </React.Fragment>
        )
    }
}

